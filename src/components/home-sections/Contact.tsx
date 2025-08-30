"use client";

import Image from "next/image";
import FadeInWrapper from "components/shared/FadeInWrapper";
import HeadingWithTag from "components/shared/HeadingWithTag";
import { OutlinedEnvelope, OutlinedTelephone, OutlinedMapMarker } from "@/components/icons";

const EMAIL = "info@bangladeshbuddhistassociation.org";
const PHONE_DISPLAY = "+44 (0)20 1234 5678";
const PHONE_TEL = "+442012345678";
const ADDRESS = "456 Peaceful Lane, London, UK";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-neutral-darker text-neutral-200"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
        <FadeInWrapper>
          <HeadingWithTag tag="Connect" heading="Contact Us" />
          <p className="mt-6 text-lg text-neutral-300 md:text-xl">
            We would love to hear from you!
          </p>
        </FadeInWrapper>

        <div className="mt-12 space-y-14">
          <FadeInWrapper delay={0.05}>
            <OutlinedEnvelope width={40} className="text-foreground-inverse" />
            <h3 className="mt-4 font-serif text-2xl text-foreground-inverse md:text-3xl">Email</h3>
            <div className="mt-2 space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="block underline decoration-neutral-500 underline-offset-4 hover:text-white"
              >
                {EMAIL}
              </a>
            </div>
          </FadeInWrapper>

          <FadeInWrapper delay={0.1}>
            <OutlinedTelephone width={40} className="text-foreground-inverse" />
            <h3 className="mt-4 font-serif text-2xl text-foreground-inverse md:text-3xl">Phone</h3>
            <p className="mt-2 text-neutral-300">Call us anytime!</p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-3 inline-block underline decoration-neutral-500 underline-offset-4 hover:text-white"
            >
              {PHONE_DISPLAY}
            </a>
          </FadeInWrapper>

          <FadeInWrapper delay={0.15}>
            <OutlinedMapMarker width={42} className="text-foreground-inverse" />
            <h3 className="mt-4 font-serif text-2xl text-foreground-inverse md:text-3xl">Office</h3>
            <p className="mt-2">{ADDRESS}</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-flex items-center gap-2 font-semibold text-foreground-inverse"
            >
              <span className="underline decoration-neutral-500 underline-offset-4">
                Get Directions
              </span>
              <svg
                viewBox="0 0 24 24"
                className="mt-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </FadeInWrapper>

          <FadeInWrapper delay={0.2}>
            <figure className="overflow-hidden rounded-lg">
              <Image
                src="/hero-buddha.jpg"
                alt="Association office illustrative photo"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 900px, 100vw"
                priority={false}
              />
            </figure>
          </FadeInWrapper>
        </div>
      </div>
    </section>
  );
}
