export default function MarketplaceItems({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-8 space-y-2 text-lg">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
