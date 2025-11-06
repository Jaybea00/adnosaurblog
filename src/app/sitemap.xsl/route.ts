import { generateSitemapStylesheet } from "@/lib/sitemap";

export const revalidate = 86400;

export async function GET() {
  const xsl = generateSitemapStylesheet();
  return new Response(xsl, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
