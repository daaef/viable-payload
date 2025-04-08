import React from "react";
import Faqs, { Faq } from "../_components/faq";
import { defaultFaqs } from "@/data/faqs";

// Define the props type
interface GeneralFaqsProps {
  faqs: Faq[];
}
export default function GeneralFaqs({ faqs }: GeneralFaqsProps) {
  // Filter FAQs for general subject
  const generalFaqs =
    faqs?.filter((faq) => faq.subject === "general") ??
    defaultFaqs?.docs?.filter((faq) => faq.subject === "general");

  // If no FAQs from the API, use the hardcoded ones
  const faqsToDisplay = generalFaqs;

  return (
    <div id="general-faq">
      <Faqs faqsToDisplay={faqsToDisplay} />
    </div>
  );
}
