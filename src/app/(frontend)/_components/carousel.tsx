"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CarouselCard from "./card";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface CardData {
  title: string;
  location: string;
  date: string;
  imageSrc: string;
}

const cardData: CardData[] = [
  {
    title: "Nature Reserves in Local Extremadura",
    location: "Extremadura, Spain",
    date: "July, 2023",
    imageSrc:
      "/licensed-images/maintenance-engineer-at-solar-farm-looking-drawing-2023-11-27-05-19-47-utc-min.webp",
  },
  {
    title: "Nature Reserves in Local Extremadura",
    location: "Extremadura, Spain",
    date: "August, 2023",
    imageSrc:
      "/licensed-images/new-seed-starts-to-grow-environmental-social-gove-2023-11-27-05-07-56-utc-min.webp",
  },
  {
    title: "Nature Reserves in Local Extremadura",
    location: "Extremadura, Spain",
    date: "September, 2023",
    imageSrc:
      "/licensed-images/fiery-throated-hummingbird-panterpe-insignis-sa-2023-11-27-04-59-35-utc-min.webp",
  },
];

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="embla__slide flex-[0_0_90%] md:flex-[0_0_40%] flex justify-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CarouselCard
              isHovered={hoveredIndex === index}
              title={data.title}
              location={data.location}
              date={data.date}
              imageSrc={data.imageSrc}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center py-4 lg:py-8">
        <button
          className="embla__prev mr-4 hidden sm:block"
          onClick={scrollPrev}
        >
          <ArrowLeftIcon className="h-8 w-8 hover:text-[var(--green-400-rgb)]" />
        </button>
        <button
          className="embla__next ml-4 hidden sm:block"
          onClick={scrollNext}
        >
          <ArrowRightIcon className="h-8 w-8 hover:text-[var(--green-400-rgb)]" />
        </button>
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/our-work">
          <button className="rounded-md transition ease-in-out duration-250 text-base bg-[var(--green-300-rgb)] px-28 py-4 whitespace-nowrap text-black underline hover:bg-[var(--green-500-rgb)]">
            Our work
          </button>
        </Link>
      </div>
    </div>
  );
}
