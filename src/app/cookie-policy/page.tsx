import { notFound } from "next/navigation";
import { decode } from "he";
import { getPageBySlug } from "@/lib/wordpress";

export const revalidate = 300;

export default async function CookiePolicyPage() {
  const page = await getPageBySlug("sample-cookie-policy");

  if (!page) {
    notFound();
  }

  const lastUpdated = new Date(page.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="min-h-screen py-[7rem] md:py-16 px-4 bg-dark">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-gray-600">
            Legal
          </span>
          <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {decode(page.title)}
          </h1>
          <p className="mt-4 text-gray-600">
            Last updated on <span className="font-medium text-gray-900">{lastUpdated}</span>
          </p>
        </header>

        <section className="relative overflow-hidden rounded-3xl border border-dark-tertiary bg-dark-secondary shadow-xl">
          <div className="absolute inset-x-0 top-0 h-1 bg-primary" aria-hidden="true" />
          <div className="relative p-6 md:p-10">
            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </div>
        </section>
      </div>
    </article>
  );
}
