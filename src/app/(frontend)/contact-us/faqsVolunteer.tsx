import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, MinusIcon } from "@heroicons/react/24/outline";
import React from "react";

const volunteerQuestions = [
  {
    question: "How can I join as a volunteer?",
    answer:
      'Explore our "Volunteer" section to find opportunities aligned with your skills and interests. Actively participate in impactful projects related to biodiversity preservation. ' +
      "Share your expertise in areas such as marketing, design, or project management to support Viable Community initiatives. Your skills can make a significant difference.",
  },
  // {
  //   question: "What types of biodiversity projects are currently available?",
  //   answer: "Meet our team",
  // },
  // {
  //   question: "Is there a minimum time commitment for volunteering?",
  //   answer: "meet our team",
  // },
  {
    question:
      "How can volunteers get involved in biodiversity preservation projects?",
    answer:
      'Volunteering with Viable Community in biodiversity preservation is simple and impactful. Visit our "Volunteer" section on this platform, where you can explore open volunteer opportunities. Sign up for any openings aligned with your interests and skills by following the link, and join us in making a positive impact on the environment. Together, we can contribute to the flourishing of diverse ecosystems.',
  },
];

export default function VolunteerFaqs() {
  return (
    <div id="volunteering-faq">
      <div className="px-2 md:pl-24 justify-around md:mt-2 bg-white">
        <div className="md:py-2 lg:px-4 lg:py-2 divide-y divide-gray-900/10">
          <dl className="mt-10 mb-10 space-y-6 divide-y divide-gray-900/10  ">
            <div id="volunteering-questions">
              {volunteerQuestions.map((volunteerQuestion, index) => (
                <Disclosure
                  as="div"
                  key={index}
                  className="py-4 pl-4 border border-gray-300 mt-4 pr-8 text-[var(--light-green-900-rgb)]"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <DisclosureButton className="flex w-full items-start justify-between text-left">
                          <span className="text-base font-semibold leading-7">
                            {volunteerQuestion.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <ChevronDownIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7">
                          {volunteerQuestion.answer}
                        </p>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
