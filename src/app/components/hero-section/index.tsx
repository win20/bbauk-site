import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-[var(--capecod)] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl space-y-6 text-left">
        <h1 className="font-merriweather text-4xl font-bold">Our Story</h1>
        <p className="text-lg leading-relaxed font-[var(--font-pt-sans)]">
          The Bangladesh Buddhist Association UK is dedicated to promoting Buddhist values,
          supporting our community, and preserving our rich cultural heritage in the United Kingdom.
          Join us in our mission to foster peace and understanding.
        </p>
        <div className="flex justify-start gap-4 pt-4">
          <Link
            href="/about"
            className="rounded-md bg-white px-6 py-3 font-semibold text-[var(--capecod)] transition-colors hover:bg-gray-100"
          >
            Learn More
          </Link>
          <Link
            href="/donate"
            className="rounded-md border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[var(--capecod)]"
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
