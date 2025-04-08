import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, MinusIcon } from "@heroicons/react/24/outline";

const donatingQuestions = [
  {
    question:
      "How can I make a donation to support biodiversity preservation? ",
    answer: "meet our team",
  },
  {
    question: "Are donations tax-deductible? - How to receive tax deduction?",
    answer: "meet our team",
  },
  {
    question:
      "Why should we support Viable and what makes Viable different from other initiatives?",
    answer: "meet our team",
  },
  {
    question: "Where do the donated funds go, and how are they utilized?",
    answer: "meet our team",
  },
];

export default function Donation(this: any) {
  return (
    <div>
      <div className="px-2 md:pl-24 justify-around mt-2 bg-white">
        <div className="md:py-2 lg:px-4 lg:py-2 divide-y divide-gray-900/10">
          <dl className="mt-10 mb-10 space-y-6 divide-y divide-gray-900/10  ">
            <div>
              {donatingQuestions.map((donatingQuestion, index) => (
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
                            {donatingQuestion.question}
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
                          {donatingQuestion.answer}
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
