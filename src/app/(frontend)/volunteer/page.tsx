import Image from "next/image";
import { EmblaCarousel } from "../_components/carousel";
import JoinUsText from "./join-us-text";
import Link from "next/link";
import Slider from "./testimonials-slider";
import { HeartIcon } from "@heroicons/react/24/outline";
import {PlusIcon} from "@heroicons/react/20/solid";

interface JoinUsSectionProps {
  content: string[];
}

export default function VolunteerPage() {
  const content = [
    "Take initiative and can keep things simple in a start-up environment",
    "Would like to become part of the Viable Team and build/boost/transform this organization",
    "Can take on the responsibility to finish tasks, coordinate tasks, make decisions while requesting and including the circle’s participants’ input",
    "Are willing (to learn) to work in our digital office, using Google workspace in the cloud and download Slack for your phone and/or desktop",
    "Check in at least twice a week",
    "Will join short, focused weekly coordination meetings.",
  ];

  return (
    <main>
      <HeroSection />
      {/* <CarouselSection /> */}
      <JoinUsSection content={content} />
      {/* <Banner />
      <TestimonialsSection /> */}
    </main>
  );
}

function HeroSection() {
  return (
    <div className="bg-white flex py-3 items-center sm:py-32 sm:bg-cover sm:bg-[center_52%] sm:bg-[url('/licensed-images/growing-it-from-the-ground-out-2023-11-27-05-32-41-utc-min.webp')]">
      <h1 className="pl-6 font-semibold mx-auto sm:text-5xl sm:text-white font-sans">
        Volunteer with us
      </h1>
      <Image
        className="inline sm:hidden"
        src="/graphics-from-the-brandbook/bijen-viable-wit.svg"
        alt="bijen wit"
        width={70}
        height={60}
      />
    </div>
  );
}

function CarouselSection() {
  return (
    <div className="h-[34rem] sm:h-[42rem] bg-white sm:bg-[var(--green-100-rgb)] w-full flex items-center justify-center relative">
      <Image
        className="absolute bottom-24 left-10 hidden xl:inline-block"
        src="graphics-from-the-brandbook/bijen-viable-wit.svg"
        alt="bijen wit"
        width={200}
        height={200}
        priority
      />
      <div className="w-full px-5">
        <EmblaCarousel />
      </div>
    </div>
  );
}

function JoinUsSection({ content }: JoinUsSectionProps) {
  return (
    <div className="sm:h-[74rem] bg-[var(--orange-100-rgb)] pb-6 flex flex-col items-center justify-center relative font-sans">
      <div className="w-full sm:h-48 lg:h-96 h-24 flex justify-center items-center text-center relative z-10 bg-[url('/banners/rec_1.svg')] bg-cover bg-top">
        <h2 className="absolute text-[#1f1100] text-4xl font-bold sm:text-5xl">
          Join us!
        </h2>
      </div>
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="bg-[var(--light-green-500-rgb)] sm:w-[42rem] my-6 mx-6 sm:p-10 h-35 rounded-lg flex flex-col items-start relative ">
          <div className="flex mb-2">
            <div className="h-full mt-15 w-52 mt-8 hidden sm:block">
              <Image
                src="/CV-Brandmark-Green.svg"
                alt="Viable Logo"
                width={73}
                height={74}
                priority
              />
            </div>
            <div className="justify-center ml-4 sm:ml-0">
              <div className="flex flex-row items-center">
                <h4 className="text-2xl sm:text:3xl font-semibold sm:ml-10 grow mt-3">
                  Become a Volunteer
                </h4>
                  <HeartIcon
                      className="hidden md:block mr-4 w-[20px] h-[24px] text-[#6c6c41]"
                      />
                  <PlusIcon
                      className="mr-4 w-[20px] h-[24px] text-[#6c6c41]"
                      />
              </div>
              <JoinUsText content={content} />
            </div>
          </div>
        </div>
      </div>

      <Link
        href="https://www.volunteerthehague.nl/o/Viable-Community/opportunities"
        passHref
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md transition text-base bg-[var(--green-300-rgb)] px-36 py-4 mt-8 mb-4 whitespace-nowrap text-black underline hover:bg-[var(--green-500-rgb)] hover:bg-[var(--green-500-rgb)]"
      >
        Current vacancies
      </Link>
      <Image
        className="absolute top-52 left-28 hidden xl:block z-20"
        src="graphics-from-the-brandbook/flower-viable-groen.svg"
        alt="flower green"
        width={200}
        height={200}
        priority
      />
      <Image
        className="absolute bottom-4 right-10 hidden xl:block"
        src="graphics-from-the-brandbook/flower-viable-groen.svg"
        alt="flower green"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-[var(--light-green-50-rgb)] flex flex-col items-center justify-center relative font-sans">
      <div className="w-full sm:h-48 xl:h-[300px] h-24 flex justify-center items-center text-center relative bg-[url('/banners/rec_2.svg')] bg-cover bg-top">
        <span className="absolute text-[var(--green-50-rgb)] sm:text-5xl text-4xl font-bold">
          Testimonials
        </span>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className="flex items-center justify-center relative w-full h-auto">
      <div className="relative flex flex-col items-center justify-center bg-[var(--light-green-50-rgb)] h-[24rem] sm:h-[34rem] w-full">
        <Image
          className="h-10 w-10 mt-4 sm:mt-6"
          src="/icons/quotes.svg"
          alt="quotes"
          height={21}
          width={30}
        />
        <Slider />
      </div>
      <Image
        className="absolute bottom-0 right-0 hidden xl:inline-block"
        src="graphics-from-the-brandbook/plantje-2-viable-wit.svg"
        alt="plantje wit"
        width={210}
        height={275}
        priority
      />
    </div>
  );
}
