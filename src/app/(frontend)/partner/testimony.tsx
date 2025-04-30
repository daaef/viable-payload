"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface TestimonyContent {
  author: string;
  title: string;
  content?: string;
  avatar?: ImageProps;
  imgs?: ImageProps[];
}

export default function Testimony() {
  const maxLines = 6;

  const [idx, setidx] = useState(0);

  const [isClamped, setIsClamped] = useState(false);
  const textRef: any=
    useRef<HTMLParagraphElement>(null);

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const contents = [
    {
      author: "Jannes Herman Mostert",
      title: "The Tree Party Foundation (NL)",
      content: `<p>&quot;Doing Green = Human Work</p>
        <p>Our first notion of Viable was through the enthusiastic Vincent Adrichem known from previous tree plantings, and other environmental activities.</p><p>Of course we would work together! As a \'deal\' Vincent promised to plant a tree.  We had a good laugh, resulting in a wonderful fig tree (ficus carica) and a beau-ti-ful almond tree (prunus dulcis).</p>
        <p>Looking for more tree planting, preserving and tree related activities together! Great to connect, and to plant together. Leaving -who knows?- a green trace of joy for the future...&quot;</p> <br/> <a href="https://www.linkedin.com/posts/viable-community_read-what-our-partner-from-the-treeparty-activity-7204769199963914240-NhXl?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">Read more...</a>`,
      imgs: [
        {
          src: "/partner/1000032145.webp",
          alt: "Jannes Herman Mostert holding shovel",
          width: 456,
          height: 317,
        },
        {
          src: "/partner/1000032131.webp",
          alt: "Jannes Herman Mostert drilling ground",
          width: 456,
          height: 317,
        },
      ],
    },
    {
      author: "Aleyda Santos",
      title: "Terra Foundation",
      avatar: {
        src: "/partner/aleyda.png",
        alt: "Aleyda Santos Avatar",
        width: 40,
        height: 40,
      },
      content: `<p><center>&#127807 	&#10024 Reflecting on a Journey of Collaboration and Shared Passion 	&#10024 &#127807</center></p>
        <p>It is a pleasure for me to take a moment to express my deepest gratitude and appreciation for my friend and business partner, Vincent, from Viable Community. Our journey together began 3-4 years ago when we were both volunteers for an environmental NGO. Though our paths diverged after, our shared passion for the environment continued to inspire us. </p>
        <p>Together, we envisioned a future where we could make a tangible difference in Nature conservation and sustainability. This vision led to the creation of TERRA Foundation and Viable Community. Today, both of us are managing our projects, driven by our commitment to our volunteers and the environment. </p>
        <p>Vincent's strategic advice and unwavering support have been invaluable to me. They have helped shape TERRA Foundation's strategic direction and grow as a non-profit. Beyond his professional contributions, Vincent's friendship and encouragement have been a constant source of motivation. </p>
        <p>We both deeply appreciate Nature and have a strong desire to preserve it for present and future generations. Our shared vision amplifies our impact and reaffirms the power of collaboration. I look forward to many more years of partnership, growth, and environmental stewardship with Viable Community and TERRA Foundation. Together, let's continue making a difference! &#127758	&#128154</p>
        <p>#SDG17Partnership #TERRAFoundation #ViableCommunity #Sustainability #EnvironmentConservation #FutureGenerations </p>`,
    },
  ];

  useEffect(() => {
    if (textRef.current) {
      const computedStyle = window.getComputedStyle(textRef.current);
      const lineHeight = parseInt(computedStyle.lineHeight);
      const maxHeight = maxLines * lineHeight;

      if (textRef.current.scrollHeight > maxHeight) {
        setIsClamped(true);
      }
    }
  }, [maxLines]);

  const displayImgs = (imgs: ImageProps[]) => {
    return (
      <div className="flex flex-col md:flex-row flex-1 py-16 md:justify-between md:space-x-12 space-y-16 md:space-y-0">
        {imgs.map((item, idx) => {
          return (
            <div className="flex flex-1" key={idx.toString()}>
              <Image
                className="relative"
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                style={{
                  width: item.width,
                  height: item.height,
                  objectFit: "cover",
                  aspectRatio: 3 / 2,
                }}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const shiftTestimony = (contents: TestimonyContent[]) => {
    const nPages = contents.length;
    const content = idx >= 0 && idx < nPages ? contents[idx] : null;

    const display = (content: TestimonyContent) => {
      const text = content?.content || "";

      return (
        <>
          <blockquote className="sm:text-lg leading-8">
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </blockquote>
          <div className="flex gap-2 items-center mt-4">
            {content?.avatar && (
              <Image
                className="relative rounded-full"
                src={content.avatar.src}
                alt={content.avatar.alt}
                width={content.avatar.width}
                height={content.avatar.height}
                style={{
                  width: content.avatar.width,
                  height: content.avatar.height,
                }}
              />
            )}
            <div className="text-base text-[var(--green-300-rgb)]">
              <div className="font-semibold">{content.author}</div>
              <div className="mt-1 text-gray-100">{content.title}</div>
            </div>
          </div>
          {content.imgs && displayImgs(content.imgs)}
        </>
      );
    };

    return (
      <div className="flex flex-1 flex-row justify-between items-center sm:space-x-4">
        <div>
          <ChevronLeftIcon
            className="h-12 w-12 stroke-[3px] text-[var(--green-100-rgb)]"
            onClick={() => {
              if (idx > 0) setidx((idx) => idx - 1);
            }}          />
        </div>
        <div className="flex w-full flex-col">
          <div
            className="text-justify text-[var(--green-100-rgb)]"
            style={{
              overflow: isClamped ? "hidden" : "visible",
              display: "inline-block",
              WebkitLineClamp: maxLines,
              WebkitBoxOrient: "vertical",
              maxHeight: isClamped ? `${maxLines * 1.25}em` : `none`,
              whiteSpace: "pre-line",
            }}
            ref={textRef}
          >
            {content && display(content)}
          </div>
          <div className="flex mt-4 justify-end text-[var(--orange-300-rgb)]">
            <button
              data-testid="toggle-testimonial-content"
              onClick={toggleClamp}
            >
              {isClamped ? "More..." : "Less"}
            </button>
          </div>
        </div>
        <div>
          <ChevronRightIcon
            className="h-12 w-12 stroke-[3px] text-[var(--green-100-rgb)]"
            onClick={() => {
              if (idx < nPages - 1) setidx((idx) => idx + 1);
            }}
          />
        </div>
      </div>
    );
  };

  const toggleClamp = () => {
    setIsClamped(!isClamped);
  };

  return (
    <div className="mx-6 sm:mx-16 max-w-7xl flex flex-1 justify-start items-start text-slate-600 min-w-80">
      <div className="flex flex-1 flex-col min-w-full pt-8 pb-16 space-y-8 bg-[var(--orange-900-rgb)] rounded-lg">
        <div className="font-bold min-w-full flex flex-1 justify-center">
          <div className="py-1 px-2 md:px-8">
            <h2 className="min-w-max text-[var(--green-300-rgb)]">
              Testimonials
            </h2>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">{shiftTestimony(contents)}</div>
        </div>
      </div>
    </div>
  );
}
