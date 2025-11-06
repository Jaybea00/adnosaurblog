import { generateAuthorsSitemap } from "@/lib/sitemap";

export const revalidate = 300;

export async function GET() {
  const xml = await generateAuthorsSitemap();
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
    },
  });
}
