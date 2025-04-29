import Image from "next/image";
import ViableButton from "../_components/viable-button";
import Testimony from "./testimony";

export default function Partner() {
  return (
    <main>
      <Banner />
      <div className="flex flex-1 flex-col text-start justify-center items-center space-y-16 text-slate-600 max-w-full">
        <Content />
        <Testimony />
        <ContactFormButton />
      </div>
    </main>
  );
}

function Banner() {
  return (
    <div className="sm:px-32 px-6 md:py-44 py-32 relative isolate bg-top bg-cover bg-[url('/banners/partner.webp')]">
      <h1 className="text-white text-bold">Partnership</h1>
      <h4 className="text-white pl-1 md:pl-2">
        &quot;If you want to go fast, go alone. If you want to go far, go
        together.&quot; - African Proverb.
      </h4>
    </div>
  );
}

function Content() {
  const BecomePartner = (order: number) => {
    return ContentTemplate(
      {
        title: "Become a Partner",
        sections: [
          {
            img: {
              src: "/licensed-images/daughter-helps-on-the-plantation-with-watering-agr-2023-11-27-05-17-20-utc-min.webp",
              alt: "Become Partner Image",
              width: 320,
              height: 481,
            },
            paragraphs: `
              <p>Beyond individual  involvement of volunteers, Viable empowers collaborative partnerships, enhancing global synergy.</p>
              <p>Working together towards a common goal of protecting and regenerating Nature makes us more successful than the sum of our efforts.</p>
              <p>We create <a href="https://docs.google.com/document/d/155dHxziGme5zSS9FANcR0Ffhl_N-ad3V5GtHx11WHAw/view" class="font-bold underline" target="_blank">Friendly partnership agreements</a> to capture the value, vision and spirit of our collaborations and enshrine the principles of partnership.</p>
            `,
          },
        ],
      },
      order,
    );
  };

  const Activities = (order: number) => {
    return ContentTemplate(
      {
        title: "Our Values",
        sections: [
          {
            img: {
              src: "/licensed-images/maintenance-engineer-at-solar-farm-looking-drawing-2023-11-27-05-19-47-utc-min.webp",
              alt: "Working together Image",
              width: 320,
              height: 481,
            },
            paragraphs: `
              <ul className="list-disc pl-6">
                <li>Trust in science!</li>
                <li>Seek learning.</li>
                <li>Uphold a culture of accountability.</li>
                <li>Commitment to transparency.</li>
                <li>Embrace self-management Collaboration and Community.</li>
                <li>Work together.</li>
                <li>Commitment to freedom.</li>
                <li>Empowering.</li>
                <li>Commitment to sustainability.</li>
              </ul>
            `,
          },
        ],
      },
      order,
    );
  };

  const Profit = (order: number) => {
    return ContentTemplate(
      {
        title: "Profit of Partnership",
        sections: [
          {
            img: {
              src: "/licensed-images/elephants-at-sunrise-in-thailand-2023-11-27-05-10-51-utc-min.webp",
              alt: "Profit of Partnership Image",
              width: 320,
              height: 481,
            },
            paragraphs: `
              <ul className="list-disc pl-6">
                <li>Knowledge sharing.</li>
                <li>Sharing customers.</li>
                <li>Accessing new markets.</li>
                <li>Expanding distribution channels.</li>
                <li>Exploring and developing innovative solutions.</li>
                <li>Leveraging each other's networks.</li>
                <li>Collaborating on research.</li>
                <li>Contributing to social and environmental causes.</li>
                <li>Joint marketing campaigns.</li>
                <li>Sharing risks and responsibilities.</li>
                <li>Enabling sustainable transitions for companies.</li>
                <li>Collaborating on advocacy efforts to influence policies.</li>
                <li>Providing education and training.</li>
                <li>Collaborating on consortiums for subsidies.</li>
              </ul>
              <p>Ultimately, driving system change and the global adoption of a value-backed currency that supports biodiversity</p>`,
          },
        ],
      },
      order,
    );
  };

  const TypeOfPartner = (order: number) => {
    return ContentTemplate(
      {
        title: "Type of Partnership",
        sections: [
          {
            img: {
              src: "/licensed-images/planting-for-the-future-2023-11-27-05-08-51-utc-min.webp",
              alt: "Type of Partnership Image",
              width: 320,
              height: 481,
            },
            subtitle: "Befriended Organizations:",
            paragraphs: `<p><b>Description:</b> Organizations with shared values and interests, fostering a supportive relationship.</p>
                         <p><b>Nature:</b> Informal collaboration, mutual promotion, and shared networks.</p>`,
          },
          {
            subtitle: "Business Partners:",
            paragraphs: `<p><b>Description:</b> Entities providing specific services within the project, compensated for their contributions.</p>
                         <p><b>Nature:</b> Formal contractual agreements, clear deliverables, and financial compensation.</p>`,
          },
          {
            subtitle: "Research Collaborators (Institutes and Universities):",
            paragraphs: `<p><b>Description:</b> Academic institutions engaged in joint research ventures.</p>
                         <p><b>Nature:</b> Collaborative projects, knowledge exchange, potential academic publications.</p>`,
          },
          {
            subtitle: "Applied Research Projects (Student Involvement):",
            paragraphs: `<p><b>Description:</b> Involvement of students in practical, applied research relevant to the project.</p>
                         <p><b>Nature:</b> Educational collaboration, hands-on experience, and tangible outcomes.</p>
                         <p><b>Organizational </b>Partners for Task Completion:</p>
                         <p><b>Description:</b> External organizations contributing specialized skills/resources to specific tasks.</p>
                         <p><b>Nature:</b> Task-specific partnerships, co-branding, and shared responsibilities.</p>`,
          },
        ],
      },
      order,
    );
  };

  const contents = [BecomePartner, Activities, Profit, TypeOfPartner];

  return (
    <div className="mx-6 sm:mx-16 max-w-7xl flex flex-1 flex-col justify-center text-slate-600">
      {contents.map((item, i) => {
        return <div key={i}>{item(i)}</div>;
      })}
    </div>
  );
}

interface ContentProps {
  title: string;
  sections: SectionProps[];
}

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SectionProps {
  img?: ImageProps;
  subtitle?: string;
  paragraphs: string;
}

function ContentTemplate(props: ContentProps, index: number) {
  const order = index % 2;

  return (
    <>
      <div className="flex-1 items-start flex-col hidden md:flex py-6">
        <div
          className={
            "flex flex-col justify-center space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-between min-w-full pt-8 md:space-x-[5%]" +
            (order ? " md:space-x-reverse" : "")
          }
        >
          <div
            className="md:w-1/3 flex flex-col flex-1 space-y-12 md:py-2"
            style={{ order: order }}
          >
            {props.sections.map((sec, index) => {
              const img = sec.img;
              return (
                img && (
                  <Image
                    key={index.toString()}
                    className="relative rounded-xl image-shadow-neutral-600"
                    src={img.src}
                    alt={img.alt || ""}
                    width={1200}
                    height={1200}
                    style={{
                      width: "auto",
                      height: "auto",
                      objectFit: "cover",
                      aspectRatio: 2 / 3,
                    }}
                    priority
                  />
                )
              );
            })}
          </div>
          <div
            className="flex flex-col space-y-4 md:w-2/3 text-justify text-l text-[var(--green-800-rgb)]"
            style={{ flex: "2" }}
          >
            <div className="font-bold flex flex-1 justify-center min-w-full">
              <h2 className="min-w-max py-12 text-[var(--orange-700-rgb)]">
                {props.title}
              </h2>
            </div>
            {props.sections.map((sec, index) => {
              return (
                <>
                  {sec.subtitle && (
                    <h3
                      key={index}
                      className="font-bold py-2 text-start text-[var(--green-500-rgb)]"
                    >
                      {sec.subtitle}
                    </h3>
                  )}
                  <div dangerouslySetInnerHTML={{ __html: sec.paragraphs }} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      {ContentTemplateMobile(props)}
    </>
  );
}

function ContentTemplateMobile(props: ContentProps) {
  const setImg = (img: ImageProps) => {
    return (
      <div className="flex flex-col flex-1 space-y-6">
        <Image
          className="relative rounded-xl image-shadow-neutral-600"
          src={img.src}
          alt={img.alt || ""}
          width={1200}
          height={1200}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </div>
    );
  };

  const setSection = (sec: SectionProps) => {
    return (
      <>
        {sec.subtitle && (
          <h4 className="font-bold py-2 text-start text-[var(--green-900-rgb)]">
            {sec.subtitle}
          </h4>
        )}
        <div dangerouslySetInnerHTML={{ __html: sec.paragraphs }} />
      </>
    );
  };

  return (
    <div className="max-w-7xl flex flex-1  justify-between items-start flex-col text-slate-600 md:hidden text-[var(--green-800-rgb)] py-8">
      <div className="font-bold flex flex-1 justify-center md:justify-start min-w-full md:pl-[33%]">
        <h2 className="min-w-max text-[var(--orange-700-rgb)]">
          {props.title}
        </h2>
      </div>
      {props.sections.map((sec, index) => {
        const image = sec.img;

        return (
          <div
            className="flex flex-col justify-center space-y-6 min-w-full pt-6"
            key={index.toString()}
          >
            {image && setImg(image)}
            <div
              className="flex flex-col pace-y-4 text-justify text-base"
              style={{ flex: "2" }}
            >
              {setSection(sec)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ContactFormButton() {
  return (
    <div className="pb-8">
      <ViableButton title="Contact Form" href="/contact-us" size="xl" />
    </div>
  );
}
