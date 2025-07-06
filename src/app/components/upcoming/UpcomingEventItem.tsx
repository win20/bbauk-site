import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import CroppedImage from "@components/shared/CroppedImage";

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
    <div className="flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--capecod-lightest)]">
      <CroppedImage
        src={image}
        alt={title}
        width="w-full"
        height="h-54"
        objectPosition="center"
        priority={priority}
        quality={80}
      />
      <div className="p-5 pt-4">
        <h3 className="m-0 font-merriweather text-xl font-bold text-[var(--color-text-primary)]">
          {title}
        </h3>
        <div className="my-2 font-pt-sans text-sm text-[var(--color-text-secondary)]">
          {date} &bull; {location}
        </div>
        <p className="mt-4 mb-4 font-pt-sans text-base text-[var(--color-text-primary)]">
          {description}
        </p>
        <Link
          href={link}
          className="group inline-flex items-center font-pt-sans text-base font-semibold text-[var(--color-accent)] hover:underline"
        >
          Read more
          <RiArrowRightSLine
            className="mt-1 ml-1 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
            strokeWidth={1}
          />
        </Link>
      </div>
    </div>
  );
}
