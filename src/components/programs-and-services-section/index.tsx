"use client";

import LinkButton from "@components/shared/LinkButton";
import CroppedImage from "@components/shared/CroppedImage";
import FadeInWrapper from "@components/shared/FadeInWrapper";
import ProgramsAndServicesItem from "@components/programs-and-services-section/ProgramAndServiceItem";
import HeadingWithTag from "@components/shared/HeadingWithTag";

export default function ProgramsAndServicesSection() {
  const programsAndServices = [
    {
      title: "Meditation and Mindfulness",
      body: "Join our guided meditation sessions to cultivate peace and mindfulness in your daily life.",
    },
    {
      title: "Cultural Events",
      body: "Participate in our cultural events to celebrate and share our rich Buddhist heritage with others.",
    },
    {
      title: "Dharma Talks and Teachings",
      body: "Our teachers discuss key Buddhist concepts like suffering, impermanence, and the path to enlightenment through insightful Dharma talks.",
    },
  ];

  return (
    <section className="bg-[var(--neutral-lightest)] px-6 py-16 text-gray-950">
      <FadeInWrapper delay={0}>
        <HeadingWithTag heading="Programs and Services" tag="Services" />
      </FadeInWrapper>

      <FadeInWrapper delay={100}>
        <p>
          We offer a variety of programs aimed at fostering community spirit and understanding of
          Buddhist teachings. Our services include meditation sessions, cultural events, and
          educational workshops.
        </p>
      </FadeInWrapper>

      <FadeInWrapper delay={100} animation="scale" duration="extra-slow">
        <CroppedImage
          src="/buddha-services-section.jpg"
          alt="Hero Image"
          height="h-[350px] md:h-80 lg:h-96"
          className="mt-6 rounded-md"
          objectPosition="60%"
          priority
        />
      </FadeInWrapper>

      {programsAndServices.map((item) => (
        <FadeInWrapper key={item.title} delay={200} duration="normal">
          <ProgramsAndServicesItem title={item.title} body={item.body} />
        </FadeInWrapper>
      ))}

      <FadeInWrapper delay={200}>
        <LinkButton
          href="/services"
          variant="filled"
          className="mt-6 bg-[var(--neutral-darkest)]/10"
        >
          Learn More
        </LinkButton>
      </FadeInWrapper>
    </section>
  );
}
