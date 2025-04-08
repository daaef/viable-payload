import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, MinusIcon } from "@heroicons/react/24/outline";
import { RichText } from "@payloadcms/richtext-lexical/react";

// Define the FAQ type
interface Faq {
  id?: number;
  subject?:
    | "donating"
    | "volunteering"
    | "problems"
    | "general"
    | "funding"
    | "contributions";
  question: string;
  answer: any; // Using any for richText content
  updatedAt?: string;
  createdAt?: string;
  paragrahps?: string[];
  points?: string[];
}

// Define the props type
interface GeneralFaqsProps {
  faqs: Faq[];
}

const generalQuestions = [
  {
    question: "Is Viable Community an NGO?",
    answer:
      "Yes, Viable Community is a non-governmental organization (NGO) dedicated to creating positive environmental and social impact.",
  },
  {
    question: "What is the mission of this NGO?",
    paragrahps: [
      "Preserve and Regenerate Ecosystems through efficient resource allocation and community collaboration to identify, develop, organize, and implement initiatives that focus on co-ownership, co-working, knowledge sharing, and promoting sustainability.",
      "Our mission is multifold, as we passionately believe in fostering a balanced relationship between humanity and nature, and our journey involves identifying, developing, organizing, and implementing initiatives that stand on the pillars of co-ownership, co-working, knowledge sharing, and an unwavering commitment to promoting sustainability.",
      "At Viable, we recognize the profound impact of resource efficiency. Our approach to allocation involves strategically channeling resources towards initiatives that promise not only high impact but also sustainable outcomes. This ensures that every contribution, big or small, becomes a meaningful force in the preservation and regeneration of ecosystems.",
      "The essence of our mission lies in the active engagement of communities. We cultivate collaboration, bringing together diverse voices, perspectives, and expertise from all over the world. This collaborative spirit is the driving force behind our initiatives, ensuring a collective effort towards our shared goal of preserving and regenerating ecosystems.",
      "We believe in Co-Ownership and Co-Working, this goes beyond traditional approaches by instilling a profound sense of belonging among our community members. This shared responsibility empowers individuals to actively contribute to the preservation and regeneration of ecosystems. Collaboration is not just a principle; it's a dynamic practice that enhances our collective impact, turning ideas into tangible results.",
      "In our community, knowledge is a powerful currency. We promote an environment where insights, experiences, and expertise flow freely. Through vibrant knowledge sharing, we empower individuals and communities to make informed decisions that contribute significantly to the sustainability of our actions.",
      "Sustainability is not merely a goal; it's a way of life at Viable Community. Our initiatives are designed with a visionary outlook, ensuring that the impact we create today reverberates positively for generations to come. We actively promote and integrate sustainable practices that form the bedrock of our mission, fostering a holistic and enduring commitment to environmental well-being.",
    ],
  },
  {
    question: "What does Viable Community do?",
    answer:
      "We manage a global community, organize sustainable projects and enable an innovative way of funding.",
  },
  {
    question: "Why is it important to support Viable Community?",
    answer:
      "Viable Community combines all the information, technology and resources available to deliver the most efficient solution. Unsustainable economic growth has had devastating consequences for ecosystems that are under threat from climate change, species extinction and water insecurity. And now it's time for a re-think of our relationship with nature. We're in transition: peace with the past, power in the present, faith in the future.",
  },
  {
    question: "What measures are we taking to preserve and regenerate nature?",
    answer: "Our projects exhibit a wide range of scope and approaches.",
    points: [
      "Combating Climate Change with Agri-Voltaics: We're actively engaged in projects that aim to combat climate change through the integration of sustainable agricultural practices combined with photovoltaics.",
      "Reducing Desertification, Preventing and Reversing Soil Degradation: We are focused on areas with serious risk of desertification, implementing soil regeneration and regenerative agricultural techniques, reintroducing native species, implementing cover cropping practices and promoting biodiversity.",
      "Bio-diversity Preservation: We are committed to the preservation of bio-diversity and the protection of varied ecosystems.",
      "Land Acquisition and Ownership: Viable Community is dedicated to facilitating these projects by establishing the necessary financial and legal frameworks. Even though we collaborate with other stakeholders in land ownership, we remain the principal organizers of these efforts.",
      "Rescuing Endangered Lands: Our focus extends to the rescue and restoration of endangered natural habitats.",
      "Sustaining Lush Natural Environments: We work diligently to ensure the continued maintenance of thriving natural environment.",
      "Environmental Impact Mitigation: In all our endeavors, we prioritize environmental responsibility by conducting rigorous risk assessments with the involvement of external agencies to ensure minimal harm to the ecosystem.",
    ],
  },
  {
    question: "What is 'REgeneration'?",
    answer:
      "'REgeneration' is the process of restoring, renewing, and replenishing natural systems. Basically; leaving nature alone to recover itself.  It involves proactive efforts to enhance the health and balance of ecosystems, ensuring sustainable practices to support and revive the existing environment. In essence, it's about fostering the ongoing vitality of our planet.",
  },
];

export default function GeneralFaqs({ faqs }: GeneralFaqsProps) {
  // Filter FAQs for general subject
  const generalFaqs = faqs?.filter((faq) => faq.subject === "general") || [];

  // If no FAQs from the API, use the hardcoded ones
  const faqsToDisplay = generalFaqs.length > 0 ? generalFaqs : generalQuestions;

  return (
    <div id="general-faq">
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
    </div>
  );
}
