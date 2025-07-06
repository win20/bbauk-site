import HeadingWithTag from "@components/shared/HeadingWithTag";
import LinkButton from "@components/shared/LinkButton";
import UpcomingEventItem from "@components/upcoming/UpcomingEventItem";

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

export default function UpcomingEvents() {
  return (
    <section className="flex w-full flex-col items-center bg-[var(--capecod-lighter)] px-6 py-16 text-gray-950">
      <div className="flex w-full flex-col items-center">
        <HeadingWithTag heading="Events" tag="Upcoming" />
        <p className="text-center font-pt-sans text-base text-[var(--color-text-primary)]">
          Join us for these upcoming events organised by our community
        </p>
        <div className="mt-8 flex w-full flex-col gap-6">
          {events.map((event, idx) => (
            <UpcomingEventItem key={event.title} {...event} priority={idx === 0} />
          ))}
        </div>
        <LinkButton href="#" variant="filled" className="mt-8 bg-[var(--neutral-darkest)]/10">
          View all
        </LinkButton>
      </div>
    </section>
  );
}
