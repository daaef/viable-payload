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
} from "react";

const fundingQuestions = [
  {
    question:
      "What will be the effect? What are the deliverables (tangible results) of the crowd-funding campaign?",
    answer: "Meet the team",
    points: [
      "What will be the effect? What are the deliverables (tangible results) of the crowd-funding campaign?",
    ],
    answer2:
      "If we want to compare our impact, we can look at our KPI’s. How many tons of CO2 are stored on our land and in our forests? On average, a privately owned, Northern European forest stores 192.5 tons of CO2 per hectare. We can connect this to the market value of carbon credits to see how much impact one euro of your contribution will have compared to one euro in CO2 credits.",
    answer3:
      "For example, in Extremadura, the terrain is 1000 hectares, with 800 hectares of forest and 200 hectares of solar panels.The cost of the land is 4, 800€ per hectare for a total of 4, 800,000€ for the whole terrain.The forest stores 192.5 metric tons of CO2 per hectare, and one carbon credit is worth 33€, which means that 800 hectares of forest can generate 5,081.60€ per hectare or 4,065, 280€ for the entire project.The solar panels generate 40, 243 tons of CO2 per year, which amounts to 1, 328€ per hectare in carbon credit value.Therefore, the total revenue generated per hectare is 6, 409.60€, which is 1.33 times the value of carbon credits per euro.",
  },
];
export default function Fund() {
  return (
    <div>
      <div className="px-2 md:pl-24 justify-around mt-2 bg-white">
        <div className="md:py-2 lg:px-4 lg:py-2 divide-y divide-gray-900/10">
          <dl className="mt-10 mb-10 space-y-6 divide-y divide-gray-900/10  ">
            <div>
              {fundingQuestions.map((fundingQuestion, index) => (
                <Disclosure
                  as="div"
                  key={index}
                  className="py-4 pl-4 border border-gray-300 mt-4 pr-8 text-[var(--light-green-900-rgb)]"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {fundingQuestion.question}
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
                        <p className="text-base leading-7 text-gray-600">
                          {fundingQuestion.answer}
                        </p>
                        <br></br>
                        {fundingQuestion.points && (
                          <ul>
                            {fundingQuestion.points.map(
                              (
                                point:
                                  | string
                                  | number
                                  | boolean
                                  | ReactElement<
                                      any,
                                      string | JSXElementConstructor<any>
                                    >
                                  | Iterable<ReactNode>
                                  | ReactPortal
                                  | null
                                  | undefined,
                                index: Key | null | undefined,
                              ) => (
                                <>
                                  <li className="text-gray-600" key={index}>
                                    {" "}
                                    • {point}
                                  </li>
                                  <br></br>
                                </>
                              ),
                            )}
                          </ul>
                        )}
                        <p className="text-base leading-7 text-gray-600">
                          ○ {fundingQuestion.answer2}
                        </p>
                        <br></br>
                        <p className="text-base leading-7 text-gray-600">
                          {fundingQuestion.answer3}
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
