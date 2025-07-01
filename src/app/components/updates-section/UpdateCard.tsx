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
      <h4 className="mt-4 mb-2 font-merriweather text-lg">{title}</h4>
      <p>{description}</p>
      <Link href={`/updates/${id}`} className="mt-4 inline-flex items-center">
        Read more
        <RiArrowRightSLine className="mt-1 ml-1" strokeWidth={1} />
      </Link>
    </div>
  );
}
