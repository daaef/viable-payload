"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    name: "John Smith",
    photo: "/photos/vincent-adrichem.png",
    role: "Project Management",
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    name: "Emily Johnson",
    photo: "/photos/Team Photo.png",
    role: "CEO of Green Solutions",
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    name: "Michael Brown",
    role: "Chief of Operations",
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    name: "Sarah Davis",
    role: "Marketing Manager",
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    name: "David Wilson",
    role: "Chef of Justice",
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    name: "Jessica Miller",
    role: "Security Officer",
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    name: "Daniel Taylor",
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    name: "Laura Anderson",
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    name: "James Moore",
  },
];

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="embla__slide">
            <blockquote className="text-center text-base leading-6 sm:text-xl sm:leading-9 px-3">
              <p className="font-sans italic font-light">{testimonial.quote}</p>
            </blockquote>
            <figcaption className="mt-6 sm:mt-10 flex flex-col items-center text-base">
              {testimonial.photo && (
                <Image
                  className="mx-auto h-20 w-20 sm:w-40 sm:h-40 rounded-full"
                  src={testimonial.photo}
                  alt=""
                  width={144}
                  height={144}
                />
              )}
              {!testimonial.photo && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  width={144}
                  height={144}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
              <div className="text-base text-xl font-sans text-[var(--light-green-950-rgb)] mt-2 sm:mt-3">
                {testimonial.name}
              </div>
              <div className="text-base font-sans text-[var(--light-green-950-rgb)] mt-4">
                {testimonial.role}
              </div>
            </figcaption>
          </div>
        ))}
      </div>
    </div>
  );
}
