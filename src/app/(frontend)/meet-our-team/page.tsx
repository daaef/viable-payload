"use client";
import Image from "next/image";
import { useState } from "react";
import { circles, teamMembers } from "./team-members-data";

export default function MeetOurTeam() {
  const [activeCircle, setActiveCircle] = useState({
    name: "",
    description: "",
  });
  const [circleTeamMembers, setCircleTeamMembers] = useState<any[]>([]);

  function handleCircleSelection(event: {
    preventDefault: () => void;
    currentTarget: { value: any };
  }) {
    const chosenCircle = event.currentTarget.value;

    circles.forEach((circle) => {
      if (circle.name == chosenCircle) {
        setActiveCircle({
          ...activeCircle,
          name: circle.name,
          description: circle.description,
        });
      }
    });

    const newCircleTeamMembers: any[] = [];
    teamMembers.forEach((member) => {
      if (member.circle == chosenCircle) {
        newCircleTeamMembers.push(member);
      }
      setCircleTeamMembers(newCircleTeamMembers);
    });
  }

  return (
    <main>
      <h1 className="lg:text-5xl text-4xl text-[var(--green-500-rgb)] font-bold text-center md:my-10 my-4">
        Meet our team
      </h1>

      <div
        id="circles-selector"
        className="bg-white flex flex-wrap justify-center items-center xl:py-20 xl:px-24"
      >
        {circles.map((circle) => (
          <button
            className="appearance-none m-2 flex lg:size-56 md:size-40 size-32 text-sm md:text-lg lg:text-2xl rounded-full justify-center items-center hover:bg-[var(--light-green-700-rgb)] transition-colors bg-gray-300"
            type="button"
            value={circle.name}
            key={circle.name}
            onClick={handleCircleSelection}
          >
            <span>{circle.name}</span>
          </button>
        ))}
      </div>

      <div id="circle-members-list" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          {activeCircle.name.length > 0 && (
            <div className="mx-auto max-w-2xl">
              <h2 className="text-34l text-balance font-semibold tracking-tight text-[var(--green-500-rgb)] sm:text-5xl">
                {activeCircle.name + " circle"}
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                {activeCircle.description}
              </p>
            </div>
          )}

          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {circleTeamMembers.map((person) => (
              <li
                key={person.firstName + person.lastName}
                data-testid={person.firstName + person.lastName}
              >
                <Image
                  alt={"profile photo of " + person.firstName}
                  src={person.imageSrc}
                  className="mx-auto size-44 rounded-full"
                  width={200}
                  height={200}
                />
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                  {person.firstName + " " + person.lastName}
                </h3>
                <p className="text-sm/6 text-gray-600">{person.title}</p>
                <div className="mt-2 flex justify-center">
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
