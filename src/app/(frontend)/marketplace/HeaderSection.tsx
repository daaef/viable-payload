export default function HeaderSection({ title }: { title: string }) {
  return (
    <div className="bg-[var(--green-800-rgb)] py-16 flex justify-center items-center text-white">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center px-4">
        {title}
      </h1>
    </div>
  );
}
