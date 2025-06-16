import LinkButton from "../shared/LinkButton";

export default function HeroSection() {
  return (
    <section className="w-full bg-[var(--capecod)] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl space-y-6 text-left">
        <h1 className="font-merriweather text-4xl font-bold">Our Story</h1>
        <p className="font-pt-sans text-base leading-relaxed">
          The Bangladesh Buddhist Association UK is dedicated to promoting Buddhist values,
          supporting our community, and preserving our rich cultural heritage in the United Kingdom.
          Join us in our mission to foster peace and understanding.
        </p>
        <div className="flex justify-start gap-4 pt-4">
          <LinkButton href="/about" variant="elevated">
            Learn More
          </LinkButton>
          <LinkButton
            href="/donate"
            variant="elevated"
            className="border-white/20 bg-white/10 text-white"
          >
            Donate
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
