"use client";

import React from "react";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoply from "embla-carousel-autoplay";
function Acknowledgements() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoply()]);
  const acknowledgements = [
    {
      href: "/acknowledgements/google.png",
      alt: "Google",
      width: 320,
      height: 52,
    },
    {
      href: "/acknowledgements/cuthemustard.png",
      alt: "Cuthemustard",
      width: 320,
      height: 52,
    },
    {
      href: "/acknowledgements/terra-foundation.png",
      alt: "Terra Foundation",
      width: 320,
      height: 52,
    },
    {
      href: "/acknowledgements/the-tree-party.png",
      alt: "The Tree Party",
      width: 320,
      height: 52,
    },
    {
      href: "/acknowledgements/volunteer-the-hague.png",
      alt: "Volunteer The Hague",
      width: 320,
      height: 52,
    },
    {
      href: "/acknowledgements/solum-regen.png",
      alt: "Solum Regen",
      width: 320,
      height: 52,
    },
    {
      href: "/acknowledgements/green-goose.png",
      alt: "Green Goose",
      width: 320,
      height: 52,
    },
  ];
  return (
    <section className="mx-auto sm:px-16 px-6 max-w-7xl overflow-x-hidden py-20">
      <h3 className="text-[var(--green-500-rgb)] text-2xl font-bold text-center mb-10">
        Acknowledgements
      </h3>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {acknowledgements.map((acknowledgement, index) => (
              <div className="embla__slide max-w-[25%]" key={index}>
                <Image
                  className="w-[320px] h-[52px] object-contain"
                  src={acknowledgement.href}
                  alt={acknowledgement.alt}
                  width={acknowledgement.width}
                  height={acknowledgement.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acknowledgements;
