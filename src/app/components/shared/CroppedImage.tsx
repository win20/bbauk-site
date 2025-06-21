"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface CroppedImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
  objectPosition?: string;
  priority?: boolean;
  quality?: number;
}

export default function CroppedImage({
  src,
  alt,
  width = "w-full",
  height = "h-80",
  className = "",
  objectPosition = "center",
  priority = false,
  quality = 75,
}: CroppedImageProps) {
  return (
    <div className={twMerge("relative overflow-hidden", width, height, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition }}
        priority={priority}
        quality={quality}
      />
    </div>
  );
}
