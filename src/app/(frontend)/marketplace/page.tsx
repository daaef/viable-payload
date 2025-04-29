import ContentSection from "./ContentSection";
import ContentSectionWrapper from "./ContentSectionWrapper";
import HeaderSection from "./HeaderSection";
import MarketplaceCard from "./MarketplaceCard";
import MarketplaceItems from "./MarketplaceItems";

export default function Marketplace() {
  return (
    <main>
      <HeaderSection title="Our Marketplace" />

      <ContentSection
        title="Introducing Our Community-Driven Marketplace: Empowering Sustainable Transactions"
        bgColor="bg-[var(--green-50-rgb)]"
      >
        <p>
          Our new marketplace is designed to empower our community members to
          engage in sustainable transactions aligned with our mission of nature
          preservation and regeneration.
        </p>
      </ContentSection>

      <ContentSectionWrapper
        title="What You Can Expect"
        sections={[
          {
            title: "Accessible and Inclusive",
            content: (
              <p>
                Our marketplace is open to everyone. Whether you have
                (eco-friendly) products, sustainable services, or unique skills
                to offer, you can publish them on our platform. While we
                encourage all listings, we will actively promote the most
                sustainable options to highlight eco-friendly choices.
              </p>
            ),
          },
          {
            title: "Seamless Transactions with VIA Tokens",
            content: (
              <p>
                Members can easily access the marketplace through our website
                and use VIA tokens for transactions. Whether you&apos;re buying
                or selling goods and services, our platform makes it easy to
                earn and utilize tokens within our community.
              </p>
            ),
          },
          {
            title: "Supporting Sustainability",
            content: (
              <p>
                We aim to provide an alternative to traditional monetary systems
                by emphasizing environmental stewardship and community
                engagement. VIA tokens can be used for various purposes, such as
                purchasing food, booking trips, attending workshops, and paying
                for eco-friendly products and services.
              </p>
            ),
          },
          {
            title: "Promoting the Best Sustainable Options",
            content: (
              <p>
                Our team is dedicated to curating and highlighting the most
                sustainable products and services. From eco-friendly household
                goods to ethically sourced clothing, we ensure our members have
                access to a range of sustainable choices.
              </p>
            ),
          },
          {
            title: "Partnering with Eco-Conscious Producers",
            content: (
              <p>
                We collaborate with sustainable producers and businesses to
                bring you high-quality, environmentally responsible choices. For
                example, our partnership with &apos;Imkerij Heiloo&apos; allows
                you to purchase honey products using VIA tokens. We offer
                incentives to businesses that accept VIA tokens, including
                instant conversion to fiat currency.
              </p>
            ),
          },
          {
            title: "Empowering Informed Decisions",
            content: (
              <p>
                We provide detailed product information, eco-certifications, and
                user reviews to help you make informed, sustainable choices. Our
                commitment to transparency ensures you can trust the products
                and services on our marketplace.
              </p>
            ),
          },
          {
            title: "Convenience and Safety",
            content: (
              <p>
                Our marketplace supports both online transactions and in-person
                pickups. We promote contactless payment methods, allowing you to
                use mobile devices or NFC technology for added convenience and
                safety.
              </p>
            ),
          },
          {
            title: "Building a Parallel Economy",
            content: (
              <p>
                Our marketplace is part of our vision to create a parallel
                economy that prioritizes sustainability and community
                well-being. While acknowledging existing monetary systems, we
                are dedicated to developing models that address environmental
                concerns and promote ethical consumption.
              </p>
            ),
          },
          {
            title: "Future Innovations",
            content: (
              <p>
                We have ambitious plans for the future, including microcredit
                lending, investment opportunities, and pioneering features for
                DAOs. We aim to offer personalized user experiences, seamless
                integration with external platforms, and expanded delivery
                options, including eco-friendly methods. Stay tuned as we
                develop this exciting new platform, and join us in making
                sustainable choices accessible to everyone!
              </p>
            ),
          },
        ]}
      />

      <ContentSection
        title="What You Can Find"
        bgColor="bg-[var(--green-50-rgb)]"
      >
        <MarketplaceItems
          items={[
            "Honey",
            "Chocolate (fair trade and eco certified)",
            "Plastic-free sunscreen (Naïf)",
            "Organic house cleaning package (biodegradable sponge)",
            "Green electricity, internet, and mobile provider (winddelen)",
            "Edible mushroom grow kits (Rotterzwam)",
            "Organic seeds (Bolster, Vreeken)",
            "Discounted yoga classes, electric airplane lessons, indoor plants/terraria, ...",
          ]}
        />
      </ContentSection>

      <div className="max-w-[1000px] mx-auto p-4">
        <MarketplaceCard />
      </div>
    </main>
  );
}
