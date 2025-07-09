"use client";

import FadeInWrapper from "components/shared/FadeInWrapper";
import CroppedImage from "components/shared/CroppedImage";

export default function Contact() {
  return (
    <section className="w-full bg-[var(--color-background-inverse)] text-white">
      <div className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <FadeInWrapper
              delay={0}
              as="p"
              className="mb-2 text-sm font-medium tracking-wider uppercase"
            >
              Connect
            </FadeInWrapper>
            <FadeInWrapper
              delay={100}
              as="h2"
              className="mb-4 font-merriweather text-4xl font-bold"
            >
              Contact Us
            </FadeInWrapper>
            <FadeInWrapper delay={200} as="p" className="font-pt-sans text-lg text-white/90">
              We would love to hear from you!
            </FadeInWrapper>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Email Section */}
              <FadeInWrapper delay={300} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <h3 className="font-pt-sans text-xl font-semibold">Email</h3>
                </div>
                <p className="font-pt-sans text-white/90">info@bangladeshbuddhistassociation.org</p>
                <a
                  href="mailto:info@bangladeshbuddhistassociation.org"
                  className="font-pt-sans text-white underline transition-colors hover:text-white/80"
                >
                  info@bangladeshbuddhistassociation.org
                </a>
              </FadeInWrapper>

              {/* Phone Section */}
              <FadeInWrapper delay={400} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <h3 className="font-pt-sans text-xl font-semibold">Phone</h3>
                </div>
                <p className="font-pt-sans text-white/90">Call us anytime!</p>
                <a
                  href="tel:+442012345678"
                  className="font-pt-sans text-white underline transition-colors hover:text-white/80"
                >
                  +44 (0)20 1234 5678
                </a>
              </FadeInWrapper>

              {/* Office Section */}
              <FadeInWrapper delay={500} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className="font-pt-sans text-xl font-semibold">Office</h3>
                </div>
                <p className="font-pt-sans text-white/90">456 Peaceful Lane, London, UK</p>
                <button className="flex items-center gap-2 font-pt-sans text-white underline transition-colors hover:text-white/80">
                  Get Directions
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </button>
              </FadeInWrapper>
            </div>

            {/* Image Section */}
            <FadeInWrapper delay={600} animation="scale" duration="slow" className="relative">
              <CroppedImage
                src="/contact-architecture.jpg"
                alt="Modern architecture building"
                height="h-[400px] lg:h-[500px]"
                objectPosition="center"
                className="rounded-lg"
              />
            </FadeInWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
