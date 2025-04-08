"use client";

import React from "react";
import LongCard from "../_components/long-card";
import Link from "next/link";

export function EventsGallery() {
  const events = [
    {
      eventType: "Events",
      title: "Mix'n'Match event in The Hague!",
      href: "https://www.volunteerthehague.nl/o/Volunteer-The-Hague/opportunities/Mix--Match-Volunteer-Job-Fair/84914",
      date: "30 Nov, 11:00 - 15:30",
      subtitle: "Hoefkade 9, 2526 BN Den Haag, Nederland",
      imageSrc:
        "https://deedmob-prod.imgix.net/o-prod/6897/3073103_1728764564752@1040x545.jpeg",
      imageAlt: "Mix & Match Volunteer Job Fair",
      content:
        "Mix & mingle with fellow expats from The Hague region, as well as representatives from local NGOs and service organizations eager to work with internationals!",
    },
    {
      eventType: "Events",
      title: "Education Talk and Discussion",
      href: "https://www.eventbrite.com/e/learn-about-sustainable-land-management-practices-tickets-1056590102439?aff=ebdsoporgprofile",
      date: "Monday, November 11 · 7:00pm - 8:30pm CET",
      subtitle: "Learn About Sustainable Land Management Practices!",
      imageSrc:
        "/attribution-images/taking-care-earth-concept-illustration/11497112.webp",
      imageAlt:
        "Taking care of the earth concept illustration. Illustration by Freepik.com",
      content: `Come join us at Inner Senses Auyerveda & Yoga studio and learn how to shape a sustainable future for people and the planet! This event will provide valuable insights on how to restore ecosystems, grow food sustainably, and understand how your choices impact our planet.
      Meet like-minded individuals, engage in interactive workshop, and discover practical ways to make a positive impact through everyday choices. Let's work together to create a better world for current and future generations.
      Don't miss this opportunity to learn, connect, and inspire change. See you there!`,
    },
    {
      eventType: "Events",
      title: "Community Meetup",
      href: "https://denhaag.com/nl/clingendael",
      date: "May 2024",
      subtitle: "Viable's In-Person Volunteer Meet-up, Clingendael Park",
      imageSrc: "/home/MeetupViable2024.webp",
      imageAlt: "Viable volunteers at the meetup 2024 in The Hague",
      content: `🌧The rain couldn't dampen the spirits at our recent meetup! 
🎨The highlight of the event was the collaborative spirit! Our volunteers came together, stroke by stroke, to create a beautiful piece of canvas art. This vibrant masterpiece, filled with individual stories, truly embodies the fantastic energy of our community.
Thank you to all! Rain or shine, our recent volunteer meetup brought joy and connection! We enjoyed delicious food, created a vibrant collaborative art piece, and even got professional portraits taken.`,
    },
    {
      eventType: "Events",
      title: "Community Meetup",
      href: "https://villaockenburgh.nl/de-kas/",
      date: "June 2023",
      subtitle: "Viable's In-Person Volunteer Meet-up, De Kas, Villa Ockenburg",
      imageSrc: "/home/team-picture-september-2023.webp",
      imageAlt: "Viable volunteers at the meetup September 2023",
      content:
        "This is where we came together as a community of changemakers, shared stories, and made new friends who share our passion for making the world a better place!",
    },
    {
      eventType: "Events",
      title: "Community Meetup",
      date: "Spring 2023",
      subtitle: "Viable’s In-Person Volunteer Meet-up, Kijkduin Beach",
      imageSrc: "/home/team-picture-on-the-beach-spring-2023.webp",
      imageAlt: "Viable volunteers at the meetup spring 2023",
      content:
        "Viable hosted its inaugural in-person gathering at Kijkduin Beach. This occasion provided volunteers with an excellent chance to forge connections and acquaint themselves with one another in a relaxed setting.",
    },
    {
      eventType: "News",
      title: "Soilworks with Adenex",
      href: "https://www.adenex.org/index.php/actualidad/blog/actividades-plantabosques-2023",
      date: "January 2023",
      subtitle: "Extremadura, Spain",
      imageSrc: "/home/director-Adenex-Gustavo-and-Vin.webp",
      imageAlt: "Gustavo and Vincent planting trees",
      content:
        "Two of our board members, Gustavo and Vincent, were invited by Adenex, a long-standing nature conservation organization in the region, to participate in their jubilee tree planting event. Adenex had initiated this project two decades ago, and it was heartwarming to witness the fruition of their efforts while planting new indigenous trees on previously barren land. Adenex generously provided food, accommodation, and transportation for the volunteers over the weekend. This experience highlighted the profound impact of past initiatives and the ongoing commitment to preserving nature. For more information about Adenex's tree planting activities, visit their website.",
    },
    {
      eventType: "Events",
      title: "Networking Events",
      href: "https://www.humanityhub.net/",
      date: "October 2022",
      subtitle: "Mix & Match Volunteer Job Fair, Humanity Hub City Centre",
      imageSrc: "/home/edited-for-use.webp",
      imageAlt: "Viable volunteers at the mix and match event October 2022",
      content:
        "The Mix & Match events are a notable phenomenon in the realm of volunteering. These events allow organizations to showcase themselves to potential volunteers.",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-[var(--light-green-400-rgb)]">
      <div className="mx-6 sm:mx-16 max-w-7xl flex flex-1 flex-col py-10 space-y-6">
        <div className="font-sans font-bold text-[var(--green-700-rgb)] flex flex-1 justify-center items-center">
          <h2 id="events-and-news">Our Events and News</h2>
        </div>

        <div
          className="grid justify-center md:justify-start lg:pb-2"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 0.5fr))",
            rowGap: "36px",
          }}
        >
          {events.map((props, idx) => {
            return (
              <div key={idx}>
                {props.href ? (
                  <Link href={props.href ?? "/"} target="_blank">
                    <LongCard
                      eventType={props.eventType}
                      title={props.title}
                      subtitle={props.subtitle}
                      date={props.date}
                      imageSrc={props.imageSrc}
                      imageAlt={props.imageAlt}
                      content={props.content}
                      key={idx}
                    />
                  </Link>
                ) : (
                  <LongCard
                    eventType={props.eventType}
                    title={props.title}
                    subtitle={props.subtitle}
                    date={props.date}
                    imageSrc={props.imageSrc}
                    imageAlt={props.imageAlt}
                    content={props.content}
                    key={idx}
                  />
                )}
              </div>
            );
          })}
        </div>
        {/* <div className="h-min flex justify-center flex-row flex-1 pt-5 hidden">
          <Link
            href="/events"
            className="font-sans flex items-center justify-center space-x-2 py-1.5 h-9 bg-[var(--green-200-rgb)]
                        font-bold text-[var(--light-green-800-rgb)]"
          >
            See All Events
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default EventsGallery;
