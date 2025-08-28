"use client";

import Image from "next/image";
import FadeInWrapper from "components/shared/FadeInWrapper";
import HeadingWithTag from "components/shared/HeadingWithTag";

const EMAIL = "info@bangladeshbuddhistassociation.org";
const PHONE_DISPLAY = "+44 (0)20 1234 5678";
const PHONE_TEL = "+442012345678";
const ADDRESS = "456 Peaceful Lane, London, UK";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

function IconEnvelope(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      {...props}
    >
      <path d="M6.6 10.8c1.6 3 4.6 5.4 7.6 6.6l2-2a1.5 1.5 0 011.6-.36c1.1.37 2.3.57 3.5.57v3a2 2 0 01-2.2 2c-9.3-1-16.7-8.3-17.7-17.6A2 2 0 015 1.9h3c0 1.2.2 2.4.6 3.5.2.55.05 1.18-.36 1.6l-2 1.8z" />
    </svg>
  );
}

function IconPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      {...props}
    >
      <path d="M12 22s7-5.2 7-12a7 7 0 10-14 0c0 6.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

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
            <IconEnvelope className="h-7 w-7 text-white" />
              <h3 className="font-serif text-2xl text-white mt-4 md:text-3xl">Email</h3>
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
              <IconPhone className="h-7 w-7 text-white" />
                <h3 className="font-serif text-2xl text-white mt-4 md:text-3xl">Phone</h3>
                <p className="mt-2 text-neutral-300">Call us anytime!</p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-3 inline-block underline decoration-neutral-500 underline-offset-4 hover:text-white"
                >
                  {PHONE_DISPLAY}
                </a>
          </FadeInWrapper>

          <FadeInWrapper delay={0.15}>
            <IconPin className="h-7 w-7 text-white" />
              <h3 className="font-serif text-2xl text-white mt-4 md:text-3xl">Office</h3>
              <p className="mt-2">{ADDRESS}</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-flex items-center gap-2 font-semibold text-white"
              >
                <span className="underline decoration-neutral-500 underline-offset-4">
                  Get Directions
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 mt-1"
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
