import { getPageBySlug } from "@/lib/wordpress";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://adnosaurblog.vercel.app").replace(/\/$/, "");
const WORDPRESS_POSTS_BASE = "https://go.adnosaur.com/wp-json/wp/v2/";

type SitemapEntry = {
  loc: string;
  lastmod?: string;
};

let cachedPosts: any[] | null = null;

function buildAbsoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

function toIsoDate(dateLike: string | undefined | null): string | undefined {
  if (!dateLike) return undefined;
  const parsed = new Date(dateLike);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString();
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function fetchWordPressCollection(
  baseUrl: string,
  resource: string,
  extraParams: Record<string, string | undefined> = {}
): Promise<any[]> {
  const results: any[] = [];
  let page = 1;
  let totalPages = 1;

  do {
    const url = new URL(resource, baseUrl);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("page", page.toString());
    Object.entries(extraParams).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, value);
      }
    });

    const response = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      console.error(
        `Sitemap fetch failed for ${url.toString()}: ${response.status} ${response.statusText}`
      );
      return results;
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      break;
    }

    results.push(...data);
    totalPages = Number(response.headers.get("x-wp-totalpages") || "1");
    page += 1;
  } while (page <= totalPages);

  return results;
}

async function getAllWordPressPosts(): Promise<any[]> {
  if (cachedPosts) {
    return cachedPosts;
  }

  const posts = await fetchWordPressCollection(
    WORDPRESS_POSTS_BASE,
    "posts",
    {
      _embed: "1",
      orderby: "modified",
      order: "desc",
    }
  );

  cachedPosts = posts;
  return posts;
}

async function getStaticPageEntries(): Promise<SitemapEntry[]> {
  const nowIso = new Date().toISOString();
  const entries: SitemapEntry[] = [
    { loc: buildAbsoluteUrl("/"), lastmod: nowIso },
    { loc: buildAbsoluteUrl("/blog"), lastmod: nowIso },
    { loc: buildAbsoluteUrl("/contact"), lastmod: nowIso },
  ];

  const legalPages = [
    { slug: "sample-privacy-policy", path: "/privacy-policy" },
    { slug: "sample-terms-and-conditions", path: "/terms-and-conditions" },
    { slug: "sample-cookie-policy", path: "/cookie-policy" },
  ];

  const pageResults = await Promise.all(
    legalPages.map(async ({ slug, path }) => {
      const page = await getPageBySlug(slug);
      if (!page) return null;
      return {
        loc: buildAbsoluteUrl(path),
        lastmod: toIsoDate(page.modified || page.date) || nowIso,
      } satisfies SitemapEntry;
    })
  );

  pageResults.forEach((entry) => {
    if (entry) {
      entries.push(entry);
    }
  });

  return entries;
}

export async function generatePagesSitemap(): Promise<string> {
  const entries = await getStaticPageEntries();
  return buildUrlsetXml(entries);
}

export async function generatePostsSitemap(): Promise<string> {
  const posts = await getAllWordPressPosts();

  const entries: SitemapEntry[] = posts.map((post) => {
    const lastMod =
      post.modified_gmt || post.modified || post.date_gmt || post.date;
    return {
      loc: buildAbsoluteUrl(`/posts/${post.slug}`),
      lastmod: toIsoDate(lastMod),
    };
  });

  return buildUrlsetXml(entries);
}

export async function generateAuthorsSitemap(): Promise<string> {
  const posts = await getAllWordPressPosts();
  const authorMap = new Map<string, { loc: string; lastmod?: string }>();

  posts.forEach((post) => {
    const author = post._embedded?.author?.[0];
    if (!author?.slug) {
      return;
    }

    const loc = buildAbsoluteUrl(`/authors/${author.slug}`);
    const postLastMod = toIsoDate(
      post.modified_gmt || post.modified || post.date_gmt || post.date
    );

    const existing = authorMap.get(author.slug);
    if (!existing) {
      authorMap.set(author.slug, { loc, lastmod: postLastMod });
      return;
    }

    if (
      postLastMod &&
      (!existing.lastmod || new Date(postLastMod) > new Date(existing.lastmod))
    ) {
      authorMap.set(author.slug, { loc, lastmod: postLastMod });
    }
  });

  const entries = Array.from(authorMap.values());

  return buildUrlsetXml(entries);
}

export async function generateSitemapIndex(): Promise<string> {
  const nowIso = new Date().toISOString();

  const entries: SitemapEntry[] = [
    { loc: buildAbsoluteUrl("/pages"), lastmod: nowIso },
    { loc: buildAbsoluteUrl("/post"), lastmod: nowIso },
    { loc: buildAbsoluteUrl("/authors"), lastmod: nowIso },
  ];

  return buildSitemapIndexXml(entries);
}

export function generateSitemapStylesheet(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sitemap">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>XML Sitemap</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background:#f9f9f7; color:#111827; padding:2.5rem 1rem; line-height: 1.6; }
          .wrapper { max-width:960px; margin:0 auto; background:#fff; border-radius:24px; padding:2.5rem; border:1px solid #e5e7eb; box-shadow:0 20px 45px rgba(15,23,42,0.08); }
          h1 { font-size:2rem; margin:0 0 0.5rem; font-weight:700; letter-spacing:-0.02em; color:#111827; }
          .description { color:#6b7280; margin-bottom:2rem; font-size:0.95rem; }
          table { width:100%; border-collapse:separate; border-spacing:0 0.5rem; margin-top:1.5rem; }
          th { text-align:left; font-size:0.7rem; letter-spacing:0.15em; color:#6b7280; text-transform:uppercase; padding:0.75rem 1rem; font-weight:600; }
          tr { transition: all 0.2s ease; }
          td { background:#f9fafb; padding:1rem 1.5rem; font-size:0.9rem; vertical-align:middle; }
          td:first-child { border-radius:12px 0 0 12px; }
          td:last-child { border-radius:0 12px 12px 0; text-align:right; }
          td a { color:#1f2937; text-decoration:none; font-weight:500; word-break:break-all; }
          td a:hover { color:#15803d; text-decoration:underline; }
          .lastmod { color:#6b7280; font-size:0.85rem; white-space:nowrap; }
          @media (max-width: 768px) {
            .wrapper { padding:1.5rem; }
            h1 { font-size:1.5rem; }
            td, th { padding:0.75rem 1rem; font-size:0.85rem; }
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <h1>XML Sitemap</h1>
          <p class="description">This sitemap contains all the important URLs for this website.</p>
          
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">
              <table>
                <thead>
                  <tr>
                    <th>Sitemap</th>
                    <th>Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                    <tr>
                      <td>
                        <a href="{sitemap:loc}">
                          <xsl:value-of select="sitemap:loc" />
                        </a>
                      </td>
                      <td class="lastmod">
                        <xsl:value-of select="sitemap:lastmod" />
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:when>
            <xsl:otherwise>
              <table>
                <thead>
                  <tr>
                    <th>URL</th>
                    <th>Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td>
                        <a href="{sitemap:loc}">
                          <xsl:value-of select="sitemap:loc" />
                        </a>
                      </td>
                      <td class="lastmod">
                        <xsl:value-of select="sitemap:lastmod" />
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:otherwise>
          </xsl:choose>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;
}

function buildUrlsetXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map((entry) => {
      const loc = escapeXml(entry.loc);
      const lastmod = entry.lastmod ? `<lastmod>${escapeXml(entry.lastmod)}</lastmod>` : "";
      return `  <url>\n    <loc>${loc}</loc>\n${lastmod ? `    ${lastmod}\n` : ""}  </url>`;
    })
    .join("\n");

  return [
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
    "<?xml-stylesheet type=\"text/xsl\" href=\"/sitemap.xsl\"?>",
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildSitemapIndexXml(entries: SitemapEntry[]): string {
  const body = entries
    .map((entry) => {
      const loc = escapeXml(entry.loc);
      const lastmod = entry.lastmod ? `<lastmod>${escapeXml(entry.lastmod)}</lastmod>` : "";
      return `  <sitemap>\n    <loc>${loc}</loc>\n${lastmod ? `    ${lastmod}\n` : ""}  </sitemap>`;
    })
    .join("\n");

  return [
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
    "<?xml-stylesheet type=\"text/xsl\" href=\"/sitemap.xsl\"?>",
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    body,
    "</sitemapindex>",
  ]
    .filter(Boolean)
    .join("\n");
}
