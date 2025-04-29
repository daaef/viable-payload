export default function ContentSection({
  title,
  children,
  bgColor,
}: {
  title: string;
  children: React.ReactNode;
  bgColor: string;
}) {
  return (
    <section className={`${bgColor} py-12 px-6 sm:px-12 lg:px-24`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--green-900-rgb)]">
          {title}
        </h2>
        <div className="text-lg leading-relaxed text-[var(--green-900-rgb)]">
          {children}
        </div>
      </div>
    </section>
  );
}
