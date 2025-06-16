"use client";

import LinkButton from "@components/shared/LinkButton";
import Image from "next/image";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function HeroSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollFadeIn(0.1, "0px", 0);
  const { ref: descRef, isVisible: descVisible } = useScrollFadeIn(0.1, "0px", 150);
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollFadeIn(0.1, "0px", 300);
  const { ref: eventRef, isVisible: eventVisible } = useScrollFadeIn(0.3, "0px", 450);

  return (
    <section className="w-full bg-[var(--capecod)] text-white">
      <div className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-6 text-left">
          <h1
            ref={titleRef}
            className={`font-merriweather text-4xl font-bold transition-all duration-800 ease-out ${
              titleVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Our Story
          </h1>
          <p
            ref={descRef}
            className={`font-pt-sans text-base leading-relaxed transition-all duration-800 ease-out ${
              descVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            The Bangladesh Buddhist Association UK is dedicated to promoting Buddhist values,
            supporting our community, and preserving our rich cultural heritage in the United
            Kingdom. Join us in our mission to foster peace and understanding.
          </p>
          <div
            ref={buttonsRef}
            className={`flex justify-start gap-4 pt-2 transition-all duration-800 ease-out ${
              buttonsVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
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

      <div className="relative h-[380px] w-full md:h-80 lg:h-96">
        <div
          ref={eventRef}
          className={`absolute top-3 left-4 z-10 text-sm text-white transition-all duration-700 ease-out ${
            eventVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="pb-1 font-bold">Next Event</p>
          <p>Katina Ceremony - 14 April - Plaistow Temple</p>
        </div>
        <Image
          src="/hero-buddha.jpg"
          alt="Image of a Buddha statue in a forest"
          fill
          className="object-cover"
          style={{ objectPosition: "60%" }}
          priority
        />
      </div>
    </section>
  );
}
