import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, MinusIcon } from "@heroicons/react/20/solid";
import { RichText } from "@payloadcms/richtext-lexical/react";

export interface Faq {
  id?: number;
  subject?:
    | "donating"
    | "volunteering"
    | "problems"
    | "general"
    | "funding"
    | "contributions";
  question: string;
  answer: any;
  updatedAt?: string;
  createdAt?: string;
  paragrahps?: string[];
  points?: string[];
}

export default function Faqs({ faqsToDisplay }: { faqsToDisplay: Faq[] }) {
  return (
    <div className="px-2 md:pl-24 justify-around mt-2 bg-white">
      <div className="md:py-2 lg:px-4 lg:py-2 divide-y divide-gray-900/10">
        <dl className="mt-10 mb-10 space-y-6 divide-y divide-gray-900/10  ">
          <div id="general-questions">
            {faqsToDisplay.map((faq, index) => (
              <Disclosure
                key={index}
                as="div"
                className="py-4 pl-4 border border-gray-300 mt-4 pr-8 text-[var(--light-green-900-rgb)]"
              >
                <DisclosureButton className="group flex w-full items-start justify-between text-left">
                  <span className="text-base font-semibold leading-7">
                    {faq.question}
                  </span>
                  <ChevronDownIcon className="w-5 group-data-[open]:hidden" />
                  <MinusIcon className="w-5 group-data-[open]:block hidden" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 pr-12">
                  <RichText data={faq.answer} />
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
        </dl>
      </div>
    </div>
  );
}
