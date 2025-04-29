import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

enum PublicationType {
  ANNUAL_REPORT = "Annual Report",
  ARTICLE = "Article",
  DOCUMENT = "Document",
}
interface PublicationLink {
  title: string;
  href: string;
  target: string;
}

interface PublicationData {
  title: string;
  type: PublicationType;
  date: Date;
  link: PublicationLink;
  imageSrc: string;
  keywords?: string[];
}

const publicationsList: PublicationData[] = [
  {
    title: "Impact Report 2023",
    type: PublicationType.ANNUAL_REPORT,
    date: new Date("2024-01-01"),
    link: {
      title: "View",
      href: "https://drive.google.com/file/d/1chfkNyYT-ENzt_zut6KsEBX80ppSoAFw/view?usp=drive_link",
      target: "_blank",
    },
    imageSrc:
      "/licensed-images/growing-it-from-the-ground-out-2023-11-27-05-32-41-utc-min.webp",
    keywords: ["impact report", "2023"],
  },

  {
    title: "Code of Conduct",
    type: PublicationType.DOCUMENT,
    date: new Date("2025-01-01"),
    link: {
      title: "View",
      href: "https://drive.google.com/file/d/1NQUeeC-p5Njw6gCrgVCgagHRm08251vY/view?usp=drive_link",
      target: "_blank",
    },
    imageSrc:
      "/licensed-images/planting-for-the-future-2023-11-27-05-08-51-utc-min.webp",
    keywords: ["code of conduct"],
  },
  {
    title: "Core Values",
    type: PublicationType.DOCUMENT,
    date: new Date("2023-01-01"),
    link: {
      title: "View",
      href: "https://drive.google.com/file/d/11yRCSOPXcPAeKy5I8gf-s1Pv_7pAr92V/view?usp=drive_link",
      target: "_blank",
    },
    imageSrc:
      "/licensed-images/planting-for-the-future-2023-11-27-05-08-51-utc-min.webp",
    keywords: ["core values"],
  },
  {
    title: "Financial Statement 2022",
    type: PublicationType.ANNUAL_REPORT,
    date: new Date("2023-01-01"),
    link: {
      title: "View",
      href: "https://drive.google.com/file/d/1i4FwnJUqreuiGD_N-RVKolwfJaHWcBNp/view?usp=drive_link",
      target: "_blank",
    },
    imageSrc:
      "/licensed-images/growing-it-from-the-ground-out-2023-11-27-05-32-41-utc-min.webp",
    keywords: ["financial statement", "2022"],
  },
  {
    title: "Financial Statement 2023",
    type: PublicationType.ANNUAL_REPORT,
    date: new Date("2024-01-01"),
    link: {
      title: "View",
      href: "https://drive.google.com/file/d/172lhwN5Heb3_x9pfsuITNCkHV_dYGVz-/view?usp=drive_link",
      target: "_blank",
    },
    imageSrc:
      "/licensed-images/planting-for-the-future-2023-11-27-05-08-51-utc-min.webp",
    keywords: ["financial statement", "2023"],
  },
  {
    title: "Manifesto",
    type: PublicationType.DOCUMENT,
    date: new Date("2023-01-01"),
    link: {
      title: "View",
      href: "https://drive.google.com/file/d/1-i67B-QVw6oaicRchFno5vkL9wPBMWWF/view?usp=drive_link",
      target: "_blank",
    },
    imageSrc:
      "/licensed-images/growing-it-from-the-ground-out-2023-11-27-05-32-41-utc-min.webp",
    keywords: ["manifesto"],
  },
  {
    title: "Policy Plan",
    type: PublicationType.DOCUMENT,
    date: new Date("2023-01-01"),
    link: {
      title: "View",
      href: "https://drive.google.com/file/d/1eZ25yvW8WBNUxGkNKWwFbc4_3s-CHKKg/view?usp=drive_link",
      target: "_blank",
    },
    imageSrc:
      "/licensed-images/planting-for-the-future-2023-11-27-05-08-51-utc-min.webp",
    keywords: ["policy plan"],
  },
];

export default function PublicationsPage() {
  return (
    <main>
      <div className="sm:px-32 px-6 md:py-44 py-32 bg-cover bg-fixed bg-bottom bg-no-repeat bg-[url('/licensed-images/planting-for-the-future-2023-11-27-05-08-51-utc-min.webp')]">
        <h1 className="text-white text-bold">Publications</h1>
        <h4 className="text-white pl-1 md:pl-2 text-bold">
          We love to be transparent with you.
        </h4>
        <h4 className="text-white pl-1 md:pl-2 text-bold">
          We want to share our annual reports and documents to show how your
          support makes our work possible.
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 mx-12 my-12 md:mx-24 md:my-12">
        {publicationsList.map((publication, i) => {
          return (
            <div key={i}>
              <h3>{publication.type}</h3>
              <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 bg-[#F3F3EC]">
                <Image
                  src={publication.imageSrc}
                  alt={publication.title}
                  width={400}
                  height={400}
                  className="w-full"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {publication.title}
                  </div>
                  <div className="flex items-center space-x-2">
                    <EyeIcon
                        className="w-[20px] h-[20px] inline mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      {publication.date.toDateString()}
                    </span>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {publication.keywords?.map((keyword, i) => {
                    return (
                      <span
                        key={i}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        #{keyword}
                      </span>
                    );
                  })}
                </div>
                <div className="relative text-sm pt-2 mb-4">
                  <div className="absolute bottom-0 right-0 flex items-center space-x-2 text-left">
                    <Link
                      href={publication.link.href ?? "/"}
                      target={publication.link.target}
                      className="text-green"
                    >
                      {publication.link.title} &nbsp;
                      <EyeIcon
                          className="w-[20px] h-[20px] inline mr-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
