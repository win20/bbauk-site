import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import CroppedImage from "components/shared/CroppedImage";

interface BaseEventCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  priority?: boolean;
}

interface EventCardProps extends BaseEventCardProps {
  variant: "upcoming" | "update";
  date?: string;
  location?: string;
  id?: number;
}

export default function EventCard({
  image,
  title,
  description,
  link,
  variant,
  date,
  location,
  priority = false,
}: EventCardProps) {
  const isUpcoming = variant === "upcoming";
  const isUpdate = variant === "update";

  if (isUpcoming) {
    return (
      <div className="flex flex-col overflow-hidden rounded-xl bg-capecod-lightest">
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
          {date && location && (
            <div className="my-2 font-pt-sans text-sm text-[var(--color-text-secondary)]">
              {date} &bull; {location}
            </div>
          )}
          <p className="mt-2 mb-4 font-pt-sans text-base text-[var(--color-text-primary)]">
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

  if (isUpdate) {
    return (
      <div className="mb-10">
        <CroppedImage
          src={image}
          alt={`Image for update: ${title}`}
          height="h-[220px]"
          className="mt-6 rounded-md"
          objectPosition="60%"
        />
        <h4 className="mt-4 font-merriweather text-lg">{title}</h4>
        <p className="mt-2">{description}</p>
        <Link
          href={link}
          className="group mt-4 inline-flex items-center font-pt-sans text-base font-semibold text-[var(--color-accent)] hover:underline"
        >
          Read more
          <RiArrowRightSLine
            className="mt-1 ml-1 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
            strokeWidth={1}
          />
        </Link>
      </div>
    );
  }

  return null;
}
