import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import CroppedImage from "@components/shared/CroppedImage";

interface UpdateCardProps {
  id: number;
  title: string;
  description: string;
  image_src: string;
}

export default function UpdateCard({ id, title, description, image_src }: UpdateCardProps) {
  return (
    <div className="mb-10">
      <CroppedImage
        src={image_src}
        alt={`Image for update: ${title}`}
        height="h-[220px]"
        className="mt-6 rounded-md"
        objectPosition="60%"
      />
      <h4 className="mt-4 font-merriweather text-lg">{title}</h4>
      <p className="mt-2">{description}</p>
      <Link
        href={`/updates/${id}`}
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
