import Link from 'next/link';
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
    <div className="bg-[var(--capecod-lightest)] rounded-xl border border-[var(--color-border)] overflow-hidden flex flex-col">
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
        <div className="font-pt-sans text-[var(--color-text-secondary)] text-sm my-2">
          {date} &bull; {location}
        </div>
        <p className="font-pt-sans text-[var(--color-text-primary)] text-base mb-4 mt-4">
          {description}
        </p>
        <Link
          href={link}
          className="inline-flex items-center text-[var(--color-accent)] font-pt-sans font-semibold text-base hover:underline"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
