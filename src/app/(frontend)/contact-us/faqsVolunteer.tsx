import React from "react";
import Faqs, { Faq } from "../_components/faq";
import { defaultFaqs } from "@/data/faqs";

interface VolunteerFaqsProps {
  faqs: Faq[];
}
export default function VolunteerFaqs({ faqs }: VolunteerFaqsProps) {
  // Filter FAQs for general subject
  const generalFaqs =
    faqs?.filter((faq) => faq.subject === "volunteering") ??
    defaultFaqs?.docs?.filter((faq) => faq.subject === "volunteering");

  const faqsToDisplay = generalFaqs;
  return (
    <div id="volunteering-faq">
      <Faqs faqsToDisplay={faqsToDisplay} />
    </div>
  );
}
