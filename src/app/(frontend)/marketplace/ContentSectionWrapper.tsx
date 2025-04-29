import ContentSection from "./ContentSection";

export default function ContentSectionWrapper({
  title,
  sections,
}: {
  title: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
}) {
  return (
    <section className="bg-[var(--green-50-rgb)] py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--green-900-rgb)]">
          {title}
        </h2>
        <div className="space-y-12">
          {sections.map((section, index) => (
            <ContentSection
              key={index}
              title={section.title}
              bgColor={
                index % 2 === 0
                  ? "bg-[var(--green-100-rgb)]"
                  : "bg-[var(--green-50-rgb)]"
              }
            >
              {section.content}
            </ContentSection>
          ))}
        </div>
      </div>
    </section>
  );
}
