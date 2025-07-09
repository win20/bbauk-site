"use client";

import React, { useState } from "react";
import HeadingWithTag from "components/shared/HeadingWithTag";
import CroppedImage from "components/shared/CroppedImage";
import FadeInWrapper from "components/shared/FadeInWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "components/ui/carousel";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
}

const dummyGalleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/buddha-services-section.jpg",
    alt: "Community meditation session",
    title: "Weekly Meditation",
  },
  {
    id: "2",
    src: "/buddha-services-section.jpg",
    alt: "Buddhist ceremony gathering",
    title: "Special Ceremony",
  },
  {
    id: "3",
    src: "/buddha-services-section.jpg",
    alt: "Teaching session with monks",
    title: "Dharma Teaching",
  },
  {
    id: "4",
    src: "/buddha-services-section.jpg",
    alt: "Community celebration event",
    title: "Festival Celebration",
  },
  {
    id: "5",
    src: "/buddha-services-section.jpg",
    alt: "Prayer and chanting session",
    title: "Evening Prayers",
  },
  {
    id: "6",
    src: "/buddha-services-section.jpg",
    alt: "Youth group activities",
    title: "Youth Program",
  },
];

export default function Gallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="w-full overflow-visible bg-gray-100 py-16">
      <div className="">
        <div className="mx-auto max-w-4xl">
          <FadeInWrapper delay={0} className="mb-8 text-center">
            <HeadingWithTag tag="Gallery" heading="Image Gallery" />
            <p>Explore our cherished moments from past events.</p>
          </FadeInWrapper>

          <FadeInWrapper delay={200} className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent className="mx-10 md:-ml-4">
                {dummyGalleryImages.map((image) => (
                  <CarouselItem key={image.id} className="px-2 md:basis-1/3 md:pl-4">
                    <CroppedImage
                      src={image.src}
                      alt={image.alt}
                      height="h-64 md:h-64"
                      className="rounded-lg shadow-md"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-6 flex justify-center space-x-4">
                <CarouselPrevious className="relative top-auto left-auto translate-x-0 translate-y-0" />
                <CarouselNext className="relative top-auto right-auto translate-x-0 translate-y-0" />
              </div>
            </Carousel>

            <div className="mt-4 flex justify-center space-x-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === current - 1 ? "bg-gray-800" : "bg-gray-400"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </FadeInWrapper>
        </div>
      </div>
    </section>
  );
}
