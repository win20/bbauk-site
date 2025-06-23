"use client";

import LinkButton from "@components/shared/LinkButton";
import CroppedImage from "@components/shared/CroppedImage";
import ProgramsAndServicesItem from "@components/programs-and-services-section/ProgramAndServiceItem";
import { useScrollFadeIn } from "@hooks/useScrollFadeIn";

export default function ProgramsAndServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollFadeIn(0.1, "0px", 0);
  const { ref: descRef, isVisible: descVisible } = useScrollFadeIn(0.1, "0px", 100);
  const { ref: imageRef, isVisible: imageVisible } = useScrollFadeIn(0.1, "0px", 100);
  const { ref: item1Ref, isVisible: item1Visible } = useScrollFadeIn(0.1, "0px", 200);
  const { ref: item2Ref, isVisible: item2Visible } = useScrollFadeIn(0.1, "0px", 300);
  const { ref: item3Ref, isVisible: item3Visible } = useScrollFadeIn(0.1, "0px", 400);
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollFadeIn(0.1, "0px", 200);

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
      <h3
        ref={titleRef}
        className={`mb-4 text-base font-bold transition-all duration-500 ease-in-out ${
          titleVisible ? "blur-0 translate-y-0 opacity-100" : "translate-y-6 opacity-0 blur-sm"
        }`}
      >
        Services
      </h3>
      <h2
        className={`mb-4 font-merriweather text-4xl transition-all duration-500 ease-in-out ${
          titleVisible ? "blur-0 translate-y-0 opacity-100" : "translate-y-6 opacity-0 blur-sm"
        }`}
      >
        Programs and Services
      </h2>
      <p
        ref={descRef}
        className={`transition-all duration-500 ease-in-out ${
          descVisible ? "blur-0 translate-y-0 opacity-100" : "translate-y-6 opacity-0 blur-sm"
        }`}
      >
        We offer a variety of programs aimed at fostering community spirit and understanding of
        Buddhist teachings. Our services include meditation sessions, cultural events, and
        educational workshops.
      </p>

      <div
        ref={imageRef}
        className={`transition-all duration-1000 ease-out ${
          imageVisible ? "scale-100 opacity-100" : "scale-105 opacity-0"
        }`}
      >
        <CroppedImage
          src="/buddha-services-section.jpg"
          alt="Hero Image"
          height="h-[350px] md:h-80 lg:h-96"
          className="mt-6 rounded-md"
          objectPosition="60%"
          priority
        />
      </div>

      {programsAndServices.map((item, index) => {
        const itemRefs = [item1Ref, item2Ref, item3Ref];
        const itemVisibles = [item1Visible, item2Visible, item3Visible];

        return (
          <div
            key={item.title}
            ref={itemRefs[index]}
            className={`transition-all duration-700 ease-in-out ${
              itemVisibles[index]
                ? "blur-0 translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 blur-sm"
            }`}
          >
            <ProgramsAndServicesItem title={item.title} body={item.body} />
          </div>
        );
      })}

      <div
        ref={buttonRef}
        className={`transition-all duration-500 ease-in-out ${
          buttonVisible ? "blur-0 translate-y-0 opacity-100" : "translate-y-6 opacity-0 blur-sm"
        }`}
      >
        <LinkButton
          href="/services"
          variant="filled"
          className="mt-6 bg-[var(--neutral-darkest)]/10"
        >
          Learn More
        </LinkButton>
      </div>
    </section>
  );
}
