import Image from "next/image";

export default function MarketplaceCard() {
  return (
    <Image
      src="/marketplace/marketplace-coming-soon.png"
      alt="Marketplace Coming Soon"
      layout="intrinsic"
      width={1000}
      height={555}
    />
  );
}
