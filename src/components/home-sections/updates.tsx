import HeadingWithTag from "components/shared/HeadingWithTag";
import EventCard from "components/shared/EventCard";
import LinkButton from "components/shared/LinkButton";
import FadeInWrapper from "components/shared/FadeInWrapper";

export default function Updates() {
  const updates = [
    {
      id: 1,
      title: "Celebrating Our Heritage",
      description: "Join us as we celebrate our rich history and culture.",
      image_src: "/buddha-services-section.jpg",
    },
    {
      id: 2,
      title: "New Community Event",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image_src: "/buddha-services-section.jpg",
    },
    {
      id: 3,
      title: "Meditation Workshop Series",
      description:
        "Discover inner peace through our guided meditation sessions led by experienced practitioners.",
      image_src: "/buddha-services-section.jpg",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center bg-capecod-lighter px-6 py-16 text-gray-950">
      <FadeInWrapper className="text-center">
        <HeadingWithTag heading="Latest News and Updates" tag="Updates" />
        <p>Stay informed about our community events</p>
      </FadeInWrapper>

      <div className="mt-4">
        {updates.map((update) => (
          <FadeInWrapper key={update.id} delay={200} duration="normal">
            <EventCard
              variant="update"
              image={update.image_src}
              title={update.title}
              description={update.description}
              link={`/updates/${update.id}`}
            />
          </FadeInWrapper>
        ))}
      </div>

      <div className="mt-2 flex justify-center">
        <FadeInWrapper>
          <LinkButton href="/updates" variant="filled" className="bg-neutral-darkest/10">
            View All
          </LinkButton>
        </FadeInWrapper>
      </div>
    </section>
  );
}
