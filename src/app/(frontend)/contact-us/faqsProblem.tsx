import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, MinusIcon } from "@heroicons/react/24/outline";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import Faqs, { Faq } from "../_components/faq";
import { defaultFaqs } from "@/data/faqs";

interface ProblemFaqsProps {
  faqs: Faq[];
}

export default function Problem({ faqs }: ProblemFaqsProps) {
  // Filter FAQs for general subject
  const generalFaqs =
    faqs?.filter((faq) => faq.subject === "problems") ??
    defaultFaqs?.docs?.filter((faq) => faq.subject === "problems");

  const faqsToDisplay = generalFaqs;
  return (
    <div id="the-problem-faq">
      <Faqs faqsToDisplay={faqsToDisplay} />
    </div>
  );
}
