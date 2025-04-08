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
const problems = [
  {
    question: "What's the problem Viable Community is solving?",
    answer:
      "Viable Community addresses the pressing challenge of environmental sustainability by creating a platform that connects individuals, businesses and organizations dedicated to positive change. Our community-driven approach fosters collaboration and enables collective action towards creating a more sustainable and equitable world. Whether through impactful projects, volunteering opportunities, or sustainable marketplace initiatives, Viable Community provides a space to contribute actively to the resolution of environmental and social challenges. Together, we work towards a viable and thriving future for all.",
  },
  {
    question: "How big is the problem?",
    answer:
      "Viable Community is addressing a pressing problem with concrete implications.",
    points: [
      "Displacement of Populations: By 2050, an estimated 187 million people could face displacement, especially in low-lying coastal areas, due to rising sea levels, posing a direct threat to homes, communities and livelihoods.",
      "Biodiversity Loss: The current trend of species extinction endangers ecosystems and biodiversity. One in four species could face extinction by 2050.",
      "Economic Impact: Biodiversity loss and environmental degradation may lead to a significant economic downturn, affecting industries and livelihoods worldwide.",
      "Food Security Threat: The decline in biodiversity jeopardizes global food security, impacting the availability and diversity of essential food sources.",
    ],
    answer2:
      "Viable Community is committed to reversing these trends, fostering a world where biodiversity thrives, communities are resilient and the quality of life is enhanced for all.",
  },
  {
    question: "What is desertification and why does it matter?",
    answer:
      "Desertification is a process where fertile land becomes increasingly arid and unproductive, typically due to various factors such as climate change, deforestation and unsustainable land management practices.",
    points: [
      "Loss of Productive Land: Desertification results in the transformation of once fertile and productive land into barren, desert-like terrain, rendering it unsuitable for agriculture or other forms of land use.",
      "Impacts on Livelihoods: Communities dependent on agriculture in affected regions face challenges as their primary source of livelihood becomes increasingly unviable, leading to economic hardships.",
      "Biodiversity Threat: Desertification contributes to the loss of biodiversity, as ecosystems struggle to adapt to the changing conditions, leading to the decline or extinction of plant and animal species.",
    ],
  },
  {
    question: "What is soil degradation, and why does it matter?",
    answer:
      "Soil degradation refers to the decline in the quality and health of soil, often caused by human activities such as deforestation, improper agricultural practices and industrial pollution.",
    points: [
      "Reduced Agricultural Productivity: Soil degradation diminishes the soil's ability to support healthy plant growth, leading to lower crop yields and compromising global food security.",
      "Erosion and Loss of Topsoil: Degraded soil is more susceptible to erosion, resulting in the loss of valuable topsoil. This not only affects agricultural productivity but also contributes to sedimentation in water bodies.",
      "Impacts on Water Quality: Soil degradation can lead to the contamination of water sources as pollutants from degraded soil are carried into rivers and streams, affecting aquatic ecosystems and human communities.",
      "Loss of Biodiversity: Healthy soil supports a diverse range of organisms crucial for ecosystem functioning. Soil degradation disrupts this balance, contributing to the decline of essential soil-dwelling organisms.",
      "Contribution to Climate Change: Degraded soil releases stored carbon into the atmosphere, contributing to greenhouse gas emissions and exacerbating climate change.",
    ],
    answer2:
      "Viable Community addresses soil degradation through sustainable agricultural practices, reforestation initiatives, and educational programs to promote responsible land use and preserve soil health.",
  },
];
export default function Problem() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  return (
    <div id="the-problem-faq">
      <div className="px-2 md:pl-24 justify-around mt-2 bg-white">
        <div className="md:py-2 lg:px-4 lg:py-2 divide-y divide-gray-900/10">
          <dl className="mt-10 mb-10 space-y-6 divide-y divide-gray-900/10  ">
            <div id="the-problem-questions">
              {problems.map((problem, index) => (
                <Disclosure
                  as="div"
                  key={index}
                  className="py-4 pl-4 border border-gray-300 mt-4 pr-8 text-[var(--light-green-900-rgb)]"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <DisclosureButton
                          onClick={() => setActiveSection("funding")}
                          className="flex w-full items-start justify-between text-left"
                        >
                          <span className="text-base font-semibold leading-7">
                            {problem.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusIcon
                                className="h-6 w-6 "
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
                        <p className="text-base leading-7 ">{problem.answer}</p>
                        <br></br>
                        {problem.points && (
                          <ul>
                            {problem.points.map(
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
                          {problem.answer2}
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
