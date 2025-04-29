import Image from "next/image";
import Link from "next/link";

export default function OurWorkPage() {
  return (
    <main>
      <div className="bg-white flex py-3 items-center sm:py-32 sm:bg-cover sm:bg-[center_52%] sm:bg-[url('/licensed-images/the-handsome-father-and-his-little-son-planting-a-2023-11-27-04-57-46-utc-min.webp')]">
        <h1 className="pl-6 font-semibold mx-auto sm:text-5xl sm:text-white font-sans">
          Our Work
        </h1>
        <Image
          className="inline sm:hidden"
          src="/graphics-from-the-brandbook/bijen-viable-wit.svg"
          alt="bijen wit"
          width={70}
          height={60}
        />
      </div>

      <div className="lg:mt-4 pt-4 flex justify-center items-center">
        <Image
          src="/icons/Educate_protect_regenerate.webp"
          width={400}
          height={205}
          alt="Educate = bulb icon, protect = shield icon, regenerate = sprout icon"
          className="relative lg:block"
        />
      </div>

      <div
        className="w-full text-[var(--green-800-rgb)]
              xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:py-10 sm:px-12 py-4 px-6"
      >
        <p>
          During our development as a new NGO, our volunteers have been focusing
          on the skills, funding, partnerships, and tools we need to ensure that
          we have an attainable and transparent vision for our sustainable
          future projects:
        </p>
        <p className="mt-4">
          <span className="font-bold">Protect:</span> Activities focused on
          environmental conservation, sustainable land use, and safeguarding
          natural resources from immediate anthropogenic and natural threats.
          Currently, Viable Community is looking at land acquisition and
          ownership. Once acquired, Viable Community is dedicated to
          facilitating projects by establishing the necessary financial and
          legal frameworks. Even though we collaborate with other stakeholders
          in land ownership, we remain the principal organizers of these
          efforts.
        </p>
        <p className="mt-4">
          <span className="font-bold">Rescuing Endangered Lands:</span> Our
          focus extends to the rescue and restoration of endangered natural
          habitats.
        </p>
        <p className="mt-4">
          <span className="font-bold">Biodiversity Preservation:</span> We are
          committed to the preservation of biodiversity and the protection of
          varied ecosystems.
        </p>
        <p className="mt-4">
          <span className="font-bold">Environmental Impact Mitigation:</span> In
          all our endeavors, we prioritize environmental responsibility by
          conducting rigorous risk assessments with the involvement of external
          agencies to ensure minimal harm to the ecosystem.
        </p>
        <p className="mt-4">
          <span className="font-bold">Regenerate:</span> Initiatives aimed at
          restoring ecosystem services and establishing nature-based solutions
          for future generations.
        </p>
        <p className="mt-4">
          <span className="font-bold">
            Combating Desertification with Agri-Voltaics:
          </span>{" "}
          We&apos;re actively engaged in projects that aim to combat
          desertification through the integration of sustainable agricultural
          practices, such as soil regeneration and regenerative agriculture, in
          photovoltaic farms.
        </p>
        <p className="mt-4">
          <span className="font-bold">
            Sustaining Lush Natural Environments:
          </span>{" "}
          We work diligently to ensure the continued maintenance of thriving
          natural environments.
        </p>
        <p className="mt-4">
          <span className="font-bold">Community:</span> Establish
          multifunctional landscape designs which integrate principles of
          cultural ecosystem services together with regenerative farming
          practices for sustainable income and food security, embraced by the
          local community.
        </p>
        <p className="mt-4">
          <span className="font-bold">Educate:</span> Raise awareness,
          disseminate practical knowledge, and foster understanding of
          environmental issues. We are creating{" "}
          <Link
            href="/our-work/educational"
            className="hover:bg-lightGreen hover:text-green underline"
          >
            educational
          </Link>{" "}
          videos highlighting eco-friendly organizations and fascinating natural
          sites.{" "}
          <Link
            href="https://www.youtube.com/@viablecommunity"
            target="_blank"
            className="hover:bg-lightGreen hover:text-green underline"
          >
            In our video series
          </Link>
          , we will feature a diverse range of sustainable organizations that
          are making significant contributions to environmental conservation and
          sustainability.{" "}
          <Link
            href="/volunteer"
            className="hover:bg-lightGreen hover:text-green underline"
          >
            Join us
          </Link>{" "}
          in promoting environmental awareness and inspiring positive change.
        </p>
        <p className="mt-2">
          In October 2024, we will be hosting monthly{" "}
          <Link
            href="/our-work/educational"
            className="hover:bg-lightGreen hover:text-green underline"
          >
            educational
          </Link>{" "}
          talks to raise environmental awareness on solutions such as designing
          a landscape with agri-voltaics and how to restore degraded landscapes
          through regenerative agriculture, re-wilding, and agroforestry
          combined. Watch{" "}
          <Link
            href="https://www.linkedin.com/company/viable-community/posts/?feedView=all"
            className="hover:bg-lightGreen hover:text-green underline"
            target="_blank"
          >
            this space
          </Link>{" "}
          for more information.
        </p>
      </div>

      <div
        className="w-full text-[var(--green-800-rgb)]
              xl:py-16 xl:px-24 lg:py-12 lg:px-20 md:py-8 md:px-16 sm:py-6 sm:px-12 py-4 px-6"
      >
        <h2 className="text-center">
          Our projects exhibit a wide range of scope and approaches.
        </h2>
        <div
          className="grid grid-cols-1 lg:grid-cols-2
        xl:py-16 xl:px-24 lg:py-12 lg:px-20 md:py-8 md:px-16 sm:py-6 sm:px-12 py-4 px-6 md:gap-8"
        >
          <div className="relative">
            <Image
              src="/licensed-images/aerial-view-of-solar-power-plant-on-green-field-2023-11-27-05-27-42-utc-min.webp"
              width={693}
              height={475}
              alt="Aerial view of solar panels"
            />
          </div>
          <div className="px-8">
            <ul className="list-disc pl-8 pb-6">
              <li>
                Biodiversity Preservation: We are committed to the preservation
                of biodiversity and the protection of varied ecosystems.
              </li>
              <li>
                Land Acquisition and Ownership: Viable Community is dedicated to
                facilitating these projects by establishing the necessary
                financial and legal frameworks. Even though we collaborate with
                other stakeholders in land ownership, we remain the principal
                organizers of these efforts.
              </li>
              <li>
                Rescuing Endangered Lands: Our focus extends to the rescue and
                restoration of endangered natural habitats.
              </li>
              <li>
                Combating Desertification with Agri-Voltaics: We&apos;re
                actively engaged in projects that aim to combat desertification
                through the integration of sustainable agricultural practices
                (such as soil regeneration and regenerative agriculture) in
                photovoltaic farms.
              </li>
              <li>
                Sustaining Lush Natural Environments: We work diligently to
                ensure the continued maintenance of thriving natural environment
              </li>
            </ul>
            <p>
              Environmental Impact Mitigation: In all our endeavors, we
              prioritize environmental responsibility by conducting rigorous
              risk assessments with the involvement of external agencies to
              ensure minimal harm to the ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full text-[var(--green-800-rgb)]
              xl:pb-16 xl:px-24 lg:pb-12 lg:px-20 md:pb-8 md:px-16 sm:pb-6 sm:px-12 pb-4 px-6"
      >
        <h2 className="text-center">How Are We Funded?</h2>
        <div className="p-4">
          <section className="mb-8">
            <p className="mb-4">
              The non-profit’s operations and activities are funded by the
              surplus profits remaining after all financial commitments are met.
              Added to this are donations and subsidies for nature restoration
              and preservation.
            </p>
            <p className="mb-4">
              Currently, our project in{" "}
              <Link
                href="/our-work/extremadura"
                className="hover:bg-lightGreen hover:text-green underline"
              >
                Extremadura
              </Link>{" "}
              is being developed through a Dutch registered BV (Besloten
              Vennootschap), operating under a steward-ownership model in
              collaboration with the Viable Community Foundation. This SPV is
              dedicated to our envisioned{" "}
              <Link
                href="/our-work/extremadura"
                className="hover:bg-lightGreen hover:text-green underline"
              >
                Extremadura
              </Link>{" "}
              project, which is in its conceptual phase and aims to not only
              create positive environmental impacts but also financially reward
              our backers for their support. We believe in making a tangible
              financial impact alongside environmental stewardship.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="font-bold text-xl mb-4">Funding Sources</h2>
            <h3 className="font-semibold text-lg mb-2">
              Traditional Sources of Funding:
            </h3>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Business Loans: We are exploring opportunities with financial
                institutions to secure business loans that provide capital for
                operational and project-specific needs.
              </li>
              <li>
                Investors: Private investors who align with our mission and
                values are crucial in supporting sustainable and impactful
                ventures.
              </li>
              <li>
                Grants and Subsidies: Actively pursuing grants, including EU
                funds and governmental subsidies, to fuel our initiatives in
                nature restoration and preservation.
              </li>
            </ul>
            <h3 className="font-semibold text-lg mb-2">
              Additional Sources of Funding:
            </h3>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Bonds: Debt securities play a role in our financing strategy,
                providing additional capital as needed.
              </li>
              <li>
                Equity: Funds raised through VIA token sales, managed by our
                holding company, contribute to our operational and project
                funding.
              </li>
            </ul>
            <h3 className="font-semibold text-lg mb-2">Non-Profit Funding:</h3>
            <p className="mb-4">
              The non-profit aspect of our organization, facilitated through the
              Viable Community Foundation, operates under an ANBI status
              (Algemeen Nut Beogende Instelling). This setup also allows us to
              leverage surplus profits from our projects, reinvesting them to
              support further environmental and community initiatives.
              Additionally, donations, gifts, and the generous contributions of
              local volunteers are pivotal in funding the regenerative aspects
              of our projects in{" "}
              <Link
                href="/our-work/extremadura"
                className="hover:bg-lightGreen hover:text-green underline"
              >
                Extremadura
              </Link>{" "}
              and beyond.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="font-bold text-xl mb-4">Rewarding Impact</h2>
            <p>
              We believe in the power of doing good and ensuring it is
              financially rewarding for our backers. Our{" "}
              <Link
                href="/our-work/extremadura"
                className="hover:bg-lightGreen hover:text-green underline"
              >
                Extremadura
              </Link>{" "}
              project, currently in the conceptual phase, is designed to not
              only deliver environmental benefits but also provide tangible
              financial returns to those who support our mission.
            </p>
            <p className="mt-4">
              By diversifying our funding sources and engaging with stakeholders
              who share our commitment to sustainability, we are paving the way
              for continued growth and impact in the communities we serve.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
