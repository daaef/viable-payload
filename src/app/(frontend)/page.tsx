import { headers as getHeaders } from "next/headers.js";
import Image from "next/image";
import { getPayload } from "payload";
import React from "react";

import config from "@/payload.config";
import "./styles.css";
import ViableButton from "./_components/viable-button";
import EventsGallery from "./_components/events-gallery";
import Link from "next/link";

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });

  const externalDonateURL = process.env
    .NEXT_PUBLIC_EXTERNAL_DONATE_URL as string;

  const BannerBlock = () => {
    return Banner(externalDonateURL);
  };
  const GetInvolveBlock = () => {
    return GetInvolve(externalDonateURL);
  };

  return (
    <main>
      <BannerBlock />
      <Mission />
      <div className="flex justify-center my-6">
        <ViableButton title="Our work" href="/our-work" size="md" />
      </div>
      <GetInvolveBlock />
      <EventsGallery />
    </main>
  );
}

function Banner(externalDonateURL: string) {
  return (
    <div className="relative isolate bg-cover bg-[url('/banners/homepage.webp')] flex justify-center items-center">
      <div className="max-w-7xl mx-6 sm:mx-16 lg:mx-28 py-32 sm:py-48 lg:py-56 flex flex-1 justify-start items-start ">
        <div className="text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Welcome to your Viable Community
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            A Non-Profit organization building a future where people and nature
            live in harmony
          </p>
          <div className="mt-10 min-w-max">
            <ViableButton
              title="Donate"
              href={externalDonateURL}
              target="_blank"
              size="xl"
              variant="orange"
              icon="💚"
              data-testid="homepage-donate-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Mission() {
  return (
    <div className="flex justify-center items-center py-4 lg:py-8">
      <div className="max-w-7xl mx-6 sm:mx-16 flex flex-1 flex-col md:flex-row text-start justify-start items-start text-slate-600 bg-white">
        <div className="grid grid-cols-1 auto-rows-min md:grid-cols-2 flex-1">
          <div className="row-start-1 md:col-start-1 flex-col md:max-w-md max-w-max">
            <h2 className="font-bold">Our Mission</h2>
            <p className="text-xl my-6 ">
              Preserve and regenerate ecosystems through efficient resource
              allocation and community collaboration to identify, develop,
              organize, and implement initiatives that focus on co-ownership,
              co-working, knowledge sharing, and promoting sustainability.
            </p>
            <div className="flex justify-center mt-6">
              <ViableButton
                title="Find out more"
                href="/about-us"
                size="md"
                softGreen
              />
            </div>
          </div>

          <div className="col-start-1 md:col-start-2 md:row-span-2 flex flex-1 min-h-max justify-center md:justify-end md:items-end items-center">
            <div className="max-w-max min-w-80 my-2 flex flex-col items-center">
              <div className="flex justify-center items-center pr-12">
                <Link href="/our-work" className="hover:animate-pulse">
                  <Image
                    src="/graphics-from-the-brandbook/Protect.svg"
                    width={180}
                    height={180}
                    alt="protect"
                  />
                </Link>
              </div>
              <div className="flex justify-between w-full mt-0">
                <Link
                  href="/our-work/educational"
                  className="hover:animate-pulse"
                >
                  <Image
                    src="/graphics-from-the-brandbook/Educate.svg"
                    width={160}
                    height={160}
                    alt="educate"
                  />
                </Link>

                <Link
                  href="/our-work/extremadura"
                  className="hover:animate-pulse"
                >
                  <Image
                    src="/graphics-from-the-brandbook/Regenerate.svg"
                    width={170}
                    height={170}
                    alt="regenerate"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetInvolve(externalDonateURL: string) {
  const details = [
    {
      src: "/home/partnering.webp",
      alt: "Partnering",
      href: "/partner",
    },
    {
      src: "/home/volunteering.webp",
      alt: "Volunteering",
      href: "/volunteer",
    },
    {
      src: "/home/donating.webp",
      alt: "Donating",
      href: externalDonateURL,
    },
  ];

  return (
    <div className="relative isolate text-white">
      <div
        className="relative mx-auto flex items-center bg-[url('/banners/about-us.webp')] bg-center-top bg-repeat-x sm:bg-contain bg-cover bg-bottom
          xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:px-12 py-2 px-6 justify-center z-50 min-h-20"
      >
        <h2 className="font-bold min-w-max">Ways to Get Involved</h2>
      </div>
      <div className="relative top-[-16px] md:top-[-38px] text-white">
        <dl
          className="flex flex-1 flex-col md:flex-row items-center justify-center 
                       md:justify-around"
        >
          {details.map((item, idx) => {
            const bg_url = " bg-[url('" + item.src + "')]";
            return (
              <div
                className="flex flex-1 w-full border-[var(--orange-500-rgb)]
                                  border-r-0 md:border-r-[10px] md:border-b-0 border-b-[10px]"
                key={idx}
              >
                <div
                  className="flex flex-1 bg-no-repeat 
                             bg-cover bg-center 
                             aspect-square md:aspect-[6/7] 
                             justify-center items-center font-bold "
                  style={{ backgroundImage: `url(${item.src})` }}
                >
                  <Link href={`${item.href ?? "/"}`}>
                    <h2>{item.alt}</h2>
                  </Link>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
