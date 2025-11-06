import { generatePostsSitemap } from "@/lib/sitemap";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export async function GET() {
  const xml = await generatePostsSitemap();
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
    },
  });
}
