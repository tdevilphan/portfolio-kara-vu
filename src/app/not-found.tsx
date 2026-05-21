import Link from "next/link";

export default function NotFound() {
  return (
    <main className="deck-grid flex min-h-screen items-center justify-center px-5 py-16">
      <section className="w-full max-w-xl rounded-deck border-2 border-ink bg-white p-6 text-center shadow-deck md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-violetPop">
          Not found
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight text-ink md:text-5xl">
          This page is not available.
        </h1>
        <p className="mt-4 text-lg leading-8 text-neutral-700">
          The case study or page you opened may have moved, changed, or not been
          published yet.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border-2 border-ink bg-yellowPop px-5 py-3 text-sm font-black text-ink shadow-sticker transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-violetPop"
        >
          Back home
        </Link>
      </section>
    </main>
  );
}
