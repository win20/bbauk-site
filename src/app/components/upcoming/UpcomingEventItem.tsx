import CroppedImage from '@components/shared/CroppedImage';

interface UpcomingEventItemProps {
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
  link: string;
  priority?: boolean;
}

export default function UpcomingEventItem({
  image,
  title,
  date,
  location,
  description,
  link,
  priority = false,
}: UpcomingEventItemProps) {
  return (
    <div className="bg-[var(--neutral-white)] rounded-xl border border-[var(--color-border)] overflow-hidden flex flex-col">
      <CroppedImage
        src={image}
        alt={title}
        width="w-full"
        height="h-40"
        objectPosition="center"
        priority={priority}
        quality={80}
      />
      <div className="p-5 pt-4">
        <h3 className="font-merriweather text-[var(--color-text-primary)] font-bold text-xl m-0">
          {title}
        </h3>
        <div className="font-pt-sans text-[var(--color-text-primary)] text-sm my-2">
          {date} &bull; {location}
        </div>
        <p className="font-pt-sans text-[var(--color-text-primary)] text-base mb-4 mt-2">
          {description}
        </p>
        <a
          href={link}
          className="inline-block bg-[var(--color-accent-light)] text-[var(--color-text-primary)] font-pt-sans font-bold text-base rounded-md px-5 py-2 no-underline border-none"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
