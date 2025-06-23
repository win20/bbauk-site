import HeadingWithTag from "@components/shared/HeadingWithTag";
import UpdateCard from "@components/updates-section/UpdateCard";
import LinkButton from "@components/shared/LinkButton";
import FadeInWrapper from "@components/shared/FadeInWrapper";

export default function UpdatesSection() {
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
    <section className="bg-[var(--capecod-lighter)] px-6 py-16 text-gray-950">
      <FadeInWrapper>
        <HeadingWithTag heading="Latest News and Updates" tag="Updates" />
        <p>Stay informed about our community events</p>
      </FadeInWrapper>

      <div className="mt-10">
        {updates.map((update) => (
          <FadeInWrapper key={update.id} delay={200} duration="normal">
            <UpdateCard
              key={update.id}
              id={update.id}
              title={update.title}
              description={update.description}
              image_src={update.image_src}
            />
          </FadeInWrapper>
        ))}
      </div>

      <div className="mt-2 flex justify-center">
        <FadeInWrapper>
          <LinkButton href="/updates" variant="filled" className="bg-[var(--neutral-darkest)]/10">
            View All
          </LinkButton>
        </FadeInWrapper>
      </div>
    </section>
  );
}
