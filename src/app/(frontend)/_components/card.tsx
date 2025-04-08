import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

interface CarouselCardProps {
  isHovered: boolean;
  title: string;
  location: string;
  date: string;
  imageSrc: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  isHovered,
  title,
  location,
  date,
  imageSrc,
}) => {
  return (
    <div
      className="w-80 h-96 sm:w-4/5 md:w-[36.5rem] sm:mx-4 relative rounded-lg mx-1 cursor-not-allowed pointer-events-none"
      style={{ backgroundColor: isHovered ? "#889649" : "#a5b465" }}
    >
      <div
        className="relative h-fit flex rounded-t-lg bg-cover bg-no-repeat bg-center w-full h-full mx-0 my-0 rounded-b-none"
        style={{ backgroundImage: `url('${imageSrc}')` }}
      >
        <div className="absolute top-2 left-2">
          <button className="bg-[var(--light-green-500-rgb)] text-black font-sans flex items-center justify-center px-2 py-1.5 rounded">
            <Image
              src="/graphics-from-the-brandbook/bijen-viable-zwart.svg"
              className="h-6 mr-1"
              width={40}
              height={40}
              alt="Bijen Zwart"
            />
            <span className="text-center font-bold">Regenerate</span>
          </button>
        </div>
        <div className="absolute sm:w-48 sm:right-0 bg-[var(--light-green-500-rgb)] sm:rounded-tl-md w-full bottom-0 py-1 text-center">
          <span className="text-black text-sm font-bold">
            <Icon
              icon="mdi:location"
              width={20}
              height={20}
              className="inline mr-2"
            />
            {location}
          </span>
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <h4 className="font-semibold text-xl text-black">{title}</h4>
      </div>
      <div className="px-4 py-4 sm:px-6">
        <span className="font-sans hidden">{date}</span>
      </div>
    </div>
  );
};

export default CarouselCard;
