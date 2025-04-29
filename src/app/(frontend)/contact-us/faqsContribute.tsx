import Faqs, {Faq} from "../_components/faq";
import {defaultFaqs} from "@/data/faqs";

interface ContributionFaqsProps {
  faqs: Faq[];
}

export default function Contribute({ faqs }: ContributionFaqsProps) {
  // Filter FAQs for general subject
  const faqsToDisplay = faqs?.filter((faq) => faq.subject === "contributions") ??
      defaultFaqs?.docs?.filter((faq) => faq.subject === "contributions");

  return (
    <div id="ways-to-contribute-faq">
      <Faqs faqsToDisplay={faqsToDisplay} />
    </div>
  );
}
