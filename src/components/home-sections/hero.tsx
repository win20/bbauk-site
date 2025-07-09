"use client";

import LinkButton from "components/shared/LinkButton";
import CroppedImage from "components/shared/CroppedImage";
import FadeInWrapper from "components/shared/FadeInWrapper";

export default function Hero() {
  return (
    <section className="w-full bg-capecod text-white">
      <div className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-6 text-left">
          <FadeInWrapper delay={0} as="h1" className="font-merriweather text-4xl font-bold">
            Our Story
          </FadeInWrapper>
          <FadeInWrapper delay={150} as="p" className="font-pt-sans text-base leading-relaxed">
            The Bangladesh Buddhist Association UK is dedicated to promoting Buddhist values,
            supporting our community, and preserving our rich cultural heritage in the United
            Kingdom. Join us in our mission to foster peace and understanding.
          </FadeInWrapper>
          <FadeInWrapper delay={300} duration="slow" className="flex justify-start gap-4 pt-2">
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
          </FadeInWrapper>
        </div>
      </div>

      <FadeInWrapper delay={100} animation="scale" duration="extra-slow" className="relative">
        <FadeInWrapper
          delay={300}
          threshold={0.3}
          duration="slow"
          className="absolute top-3 left-4 z-10 text-sm text-white"
        >
          <p className="pb-1 font-bold">Next Event</p>
          <p>Katina Ceremony &middot; 14 April &middot; Plaistow Temple</p>
        </FadeInWrapper>
        <CroppedImage
          src="/hero-buddha.jpg"
          alt="Hero Image"
          height="h-[380px] md:h-80 lg:h-96"
          objectPosition="60%"
          priority
        />
      </FadeInWrapper>
    </section>
  );
}
