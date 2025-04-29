import React from "react";
import Faqs, {Faq} from "../_components/faq";
import {defaultFaqs} from "@/data/faqs";

// Define the props type
interface GeneralFaqsProps {
  faqs: Faq[];
}
export default function GeneralFaqs({ faqs }: GeneralFaqsProps) {
  // Filter FAQs for general subject
  // If no FAQs from the API, use the hardcoded ones
  const faqsToDisplay = faqs?.filter((faq) => faq.subject === "general") ??
      defaultFaqs?.docs?.filter((faq) => faq.subject === "general");

  return (
    <div id="general-faq">
      <Faqs faqsToDisplay={faqsToDisplay} />
    </div>
  );
}
