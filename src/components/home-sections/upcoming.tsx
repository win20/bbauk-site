import HeadingWithTag from "components/shared/HeadingWithTag";
import LinkButton from "components/shared/LinkButton";
import EventCard from "components/shared/EventCard";
import FadeInWrapper from "components/shared/FadeInWrapper";

const events = [
  {
    image: "/buddha-services-section.jpg",
    title: "Meditation Retreat",
    date: "Fri 09 Feb 2024",
    location: "London",
    description: "A day of mindfulness and peace, led by experienced meditation instructors.",
    link: "#",
  },
  {
    image: "/hero-buddha.jpg",
    title: "Cultural Festival",
    date: "Sat 10 Feb 2024",
    location: "Birmingham",
    description: "Celebrate our heritage with food, performances, and community activities.",
    link: "#",
  },
  {
    image: "/hero-buddha.jpg",
    title: "Community Service",
    date: "Sun 11 Feb 2024",
    location: "Manchester",
    description: "Join us to give back to the community through various service projects.",
    link: "#",
  },
];

export default function Upcoming() {
  return (
    <section className="flex w-full flex-col items-center bg-[var(--capecod-lighter)] px-6 py-16 text-gray-950">
      <FadeInWrapper className="text-center">
        <HeadingWithTag heading="Events" tag="Upcoming" />
        <p>Join us for these upcoming events organised by our community</p>
      </FadeInWrapper>
      <div className="mt-8 flex w-full flex-col gap-6">
        {events.map((event, idx) => (
          <FadeInWrapper key={event.title} delay={idx * 100} duration="normal">
            <EventCard
              key={event.title}
              variant="upcoming"
              image={event.image}
              title={event.title}
              description={event.description}
              link={event.link}
              date={event.date}
              location={event.location}
              priority={idx === 0}
            />
          </FadeInWrapper>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <FadeInWrapper>
          <LinkButton href="/upcoming" variant="filled" className="bg-[var(--neutral-darkest)]/10">
            View All
          </LinkButton>
        </FadeInWrapper>
      </div>
    </section>
  );
}
