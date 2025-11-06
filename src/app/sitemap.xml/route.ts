import { generateSitemapIndex } from "@/lib/sitemap";

export const revalidate = 300;
export const dynamic = "force-static";

export async function GET() {
  const xml = await generateSitemapIndex();
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
    },
  });
}
