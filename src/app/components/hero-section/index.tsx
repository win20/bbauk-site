import LinkButton from "@components/shared/LinkButton";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-[var(--capecod)] text-white">
      <div className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-6 text-left">
          <h1 className="font-merriweather text-4xl font-bold">Our Story</h1>
          <p className="font-pt-sans text-base leading-relaxed">
            The Bangladesh Buddhist Association UK is dedicated to promoting Buddhist values,
            supporting our community, and preserving our rich cultural heritage in the United
            Kingdom. Join us in our mission to foster peace and understanding.
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
      </div>

      <div className="relative h-[400px] w-full md:h-80 lg:h-96">
        <Image
          src="/hero-buddha.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
          style={{ objectPosition: "80% 10%" }}
          priority
        />
      </div>
    </section>
  );
}
