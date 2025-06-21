import LinkButton from "@components/shared/LinkButton";
import CroppedImage from "../shared/CroppedImage";
import ProgramsAndServicesItem from "@components/programs-and-services-section/ProgramAndServiceItem";

export default function ProgramsAndServicesSection() {
  return (
    <section className="bg-[var(--neutral-lightest)] px-6 py-16 text-gray-950">
      <h3 className="mb-4 text-base font-bold">Services</h3>
      <h2 className="mb-4 font-merriweather text-4xl">Programs and Services</h2>
      <p>
        We offer a variety of programs aimed at fostering community spirit and understanding of
        Buddhist teachings. Our services include meditation sessions, cultural events, and
        educational workshops.
      </p>

      <CroppedImage
        src="/buddha-services-section.jpg"
        alt="Hero Image"
        height="h-[350px] md:h-80 lg:h-96"
        className="mt-6 rounded-md"
        objectPosition="60%"
        priority
      />

      <ProgramsAndServicesItem
        title="Meditation and Mindfulness"
        body="Join our guided meditation sessions to cultivate peace and mindfulness in your daily life."
      />

      <ProgramsAndServicesItem
        title="Cultural Events"
        body="Participate in our cultural events to celebrate and share our rich Buddhist heritage with others."
      />

      <ProgramsAndServicesItem
        title="Dharma Talks and Teachings"
        body="Our teachers discuss key Buddhist concepts like suffering, impermanence, and the path to enlightenment through insightful Dharma talks."
      />

      <LinkButton href="/services" variant="filled" className="mt-6 bg-[var(--neutral-darkest)]/10">
        Learn More
      </LinkButton>
    </section>
  );
}
