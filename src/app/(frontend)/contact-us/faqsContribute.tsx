import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, MinusIcon } from "@heroicons/react/24/outline";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const contributions = [
  {
    question: "What can I do?",
    answer:
      "Here are some general steps you can take for biodiversity preservation and sustainable living:",
    points: [
      "Educate yourself: Stay informed about biodiversity, environmental issues, and sustainable living practices. Knowledge empowers you to make informed choices.",
      "Use VIA Tokens: Acquire Viable Community tokens to co-own biodiversity preservation projects. VIA tokens represent shares in these initiatives and enable you to buy goods and services from other users on the Viable Marketplace (instead of using FIAT currency, which unintentionally supports destructive practices).",
      "Practice Sustainable Living: Reduce your ecological footprint by adopting sustainable habits. Conserve energy, minimize waste, and make eco-friendly choices in your daily life.",
      "Support Local Conservation Initiatives: Contribute to local conservation projects or initiatives in your community. Engage in activities like tree planting, beach clean-ups, or wildlife habitat restoration.",
      "Advocate for the Environment: Use your voice to support policies that promote biodiversity conservation and sustainability. Advocate for change at the community and governmental levels.",
      "Choose Sustainable Products: Opt for products with eco-friendly certifications and minimal environmental impact. Support businesses committed to sustainability.",
    ],
    answer2:
      "Once you're ready for a deeper impact, consider joining Viable Community: Explore Volunteer Opportunities, Support Sustainable Projects, Participate in Restoration Efforts, Advocate with Viable, Educate and Inspire with Viable.",
  },
  {
    question: "Can I contribute in other ways than by donating money?",
    answer:
      "Absolutely! There are various ways you can contribute beyond monetary donations:",
    points: [
      "Volunteer: Explore our 'Volunteer' section to find opportunities aligned with your skills and interests. Actively participate in impactful projects related to biodiversity preservation.",
      "Share your expertise in areas such as marketing, design, or project management to support Viable Community initiatives. Your skills can make a significant difference.",
      "Follow, Like and share our social media channels.",
      "Spread Awareness: Help us raise awareness about biodiversity preservation and sustainability. Share our projects, initiatives and educational content with your network.",
      "Educational Initiatives: Contribute to educational programs and workshops. Inspire others to adopt sustainable living practices and become stewards of the environment.",
      "Networking and Partnerships: Connect Viable Community with potential partners, collaborators, or sponsors who share our commitment to environmental sustainability.",
      "Project Support: Offer support for specific projects, whether it's providing resources, tools, or equipment needed for successful implementation.",
    ],
    answer2:
      "By contributing your time, skills and passion, you play a crucial role in advancing our mission and creating a positive impact on the planet.",
  },
];

export default function Contribute() {
  return (
    <div id="ways-to-contribute-faq">
      <div className="px-2 md:pl-24 justify-around mt-2 bg-white">
        <div className="md:py-2 lg:px-4 lg:py-2 divide-y divide-gray-900/10">
          <dl className="mt-10 mb-10 space-y-6 divide-y divide-gray-900/10  ">
            <div id="ways-to-contribute-questions">
              {contributions.map((contribution, index) => (
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
                            {contribution.question}
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
                        <p className="text-base leading-7 ">
                          {contribution.answer}
                        </p>
                        <br></br>
                        {contribution.points && (
                          <ul>
                            {contribution.points.map(
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
                                  <li className="" key={index}>
                                    {" "}
                                    • {point}
                                  </li>
                                  <br></br>
                                </>
                              ),
                            )}
                          </ul>
                        )}
                        <p className="text-base leading-7 ">
                          {contribution.answer2}
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
