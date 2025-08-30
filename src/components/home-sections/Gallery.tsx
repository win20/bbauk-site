"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CroppedImage from "components/shared/CroppedImage";
import FadeInWrapper from "components/shared/FadeInWrapper";
import HeadingWithTag from "components/shared/HeadingWithTag";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function Gallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const galleryImages = [
    {
      src: "/hero-buddha.jpg",
      alt: "Buddhist ceremony at temple",
    },
    {
      src: "/buddha-services-section.jpg",
      alt: "Community meditation session",
    },
    {
      src: "/hero-buddha.jpg",
      alt: "Cultural festival celebration",
    },
    {
      src: "/buddha-services-section.jpg",
      alt: "Temple architecture",
    },
    {
      src: "/hero-buddha.jpg",
      alt: "Prayer gathering",
    },
    {
      src: "/buddha-services-section.jpg",
      alt: "Buddhist teachings session",
    },
  ];

  return (
    <section className="bg-background px-6 py-16 text-gray-950 md:px-26">
      <FadeInWrapper delay={0}>
        <HeadingWithTag heading="Image Gallery" tag="" />
      </FadeInWrapper>

      <FadeInWrapper delay={100}>
        <p className="mb-8 font-pt-sans text-base leading-relaxed">
          Explore moments from our community gatherings, ceremonies, and cultural celebrations that
          bring together our Buddhist community in the UK.
        </p>
      </FadeInWrapper>

      <FadeInWrapper delay={200}>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3">
                <div className="h-64 overflow-hidden rounded-lg">
                  <CroppedImage
                    src={image.src}
                    alt={image.alt}
                    height="h-full"
                    className="rounded-lg transition-transform duration-300 hover:scale-105"
                    objectPosition="center"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-200 ${
                index + 1 === current ? "scale-125 bg-gray-800" : "bg-gray-300 hover:bg-gray-500"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            variant="secondary"
            size="icon"
            className="size-12 rounded-sm bg-neutral-white hover:cursor-pointer hover:bg-neutral-lighter"
            onClick={() => api?.scrollPrev()}
            disabled={!api?.canScrollPrev()}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="size-12 rounded-sm bg-neutral-white hover:cursor-pointer hover:bg-neutral-lighter"
            onClick={() => api?.scrollNext()}
            disabled={!api?.canScrollNext()}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </FadeInWrapper>
    </section>
  );
}
