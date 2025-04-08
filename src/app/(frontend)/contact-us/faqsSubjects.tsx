"use client";

import { useState } from "react";
import GeneralFaqs from "./faqsGeneral";
import VolunteerFaqs from "./faqsVolunteer";
// import Donation from "./faqsDonation";
import Problem from "./faqsProblem";
import Contribute from "./faqsContribute";
// import Fund from "./faqsFund";

// Define the FAQ type
interface Faq {
  id: number;
  subject:
    | "donating"
    | "volunteering"
    | "problems"
    | "general"
    | "funding"
    | "contributions";
  question: string;
  answer: any; // Using any for richText content
  updatedAt: string;
  createdAt: string;
}

// Define the props type
interface FaqSubjectsProps {
  faqs: {
    docs: Faq[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
  };
}

export default function FaqSubjects({ faqs }: FaqSubjectsProps) {
  const [activeSection, setActiveSection] = useState<string>("general");

  // Extract the docs array from the faqs object
  const faqDocs = faqs?.docs || [];

  return (
    <div className="pl-4 md:pl-24 pt-16 md:pt-72">
      <h3 className="font-semibold">Frequently Asked Questions (FAQs)</h3>

      <h4 className="mt-6 font-semibold">Choose Your Subject</h4>

      <div className="justify-center md:justify-around mt-6">
        <button
          onClick={() => setActiveSection("general")}
          className={`py-2 px-8 md:mr-2 md:mb-1 mr-4 mb-2 focus:outline-none focus:bg-green md:active:bg-green focus:text-white rounded-full border border-gray-200 hover:bg-green hover:text-white dark:hover:text-white ${
            activeSection === "general"
              ? "bg-green text-white"
              : "bg-lightGreen"
          }`}
        >
          General
        </button>

        <button
          onClick={() => setActiveSection("volunteer")}
          className={`py-2 px-12 md:mr-2 md:mb-1 mr-4 mb-2 focus:outline-none focus:bg-green focus:text-white rounded-full border border-gray-200 hover:bg-green hover:text-white dark:hover:text-white ${
            activeSection === "volunteer"
              ? "bg-green text-white"
              : "bg-lightGreen"
          }`}
        >
          Volunteering
        </button>

        {/* <button
          onClick={() => setActiveSection("donation")}
          className={`py-2 px-12 md:mr-2 md:mb-1 mr-4 mb-2 focus:outline-none focus:bg-green focus:text-white rounded-full border border-gray-200 hover:bg-green hover:text-white dark:hover:text-white ${
            activeSection === "donation"
              ? "bg-green text-white"
              : "bg-lightGreen"
          }`}
        >
          Donation
        </button> */}

        <button
          onClick={() => setActiveSection("problem")}
          className={`py-2 px-12 md:mr-2 md:mb-1 mr-4 mb-2 focus:outline-none focus:bg-green focus:text-white rounded-full border border-gray-200 hover:bg-green hover:text-white dark:hover:text-white ${
            activeSection === "problem"
              ? "bg-green text-white"
              : "bg-lightGreen"
          }`}
        >
          The Problem
        </button>

        <button
          onClick={() => setActiveSection("contribute")}
          className={`py-2 px-12 md:mr-2 md:mb-1 mr-4 mb-2 focus:outline-none focus:bg-green focus:text-white rounded-full border border-gray-200 hover:bg-green hover:text-white dark:hover:text-white ${
            activeSection === "contribute"
              ? "bg-green text-white"
              : "bg-lightGreen"
          }`}
        >
          Ways to Contribute
        </button>

        {/* <button
          onClick={() => setActiveSection("funding")}
          className={`py-2 px-12 md:mr-2 md:mb-1 mr-4 mb-2 focus:outline-none focus:bg-green focus:text-white rounded-full border border-gray-200 hover:bg-green hover:text-white dark:hover:text-white ${
            activeSection === "funding"
              ? "bg-green text-white focus:bg-green"
              : "bg-lightGreen"
          }`}
        >
          Crowdfunding
        </button> */}
      </div>
      <hr className="mt-12 md:h-1 bg-gray-100 border-0 rounded" />
      <div
        className="text-left md:text-left md:pt-2 md:pr-24 w-full"
        id="faq-sections"
      >
        {activeSection === "general" && <GeneralFaqs faqs={faqDocs} />}
        {activeSection === "volunteer" && <VolunteerFaqs faqs={faqDocs} />}
        {/* {activeSection === "donation" && <Donation />} */}
        {activeSection === "problem" && <Problem faqs={faqDocs} />}
        {activeSection === "contribute" && <Contribute faqs={faqDocs} />}
        {/* {activeSection === "funding" && <Fund />} */}
      </div>
    </div>
  );
}
