import Image from "next/image";

export default function OurStory() {
  return (
    <main>
      <div
        className="mx-auto flex items-center bg-[url('/banners/about-us.webp')] bg-center-top bg-repeat-x lg:bg-contain bg-cover 
          xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:py-10 sm:px-12 py-4 px-6"
      >
        <Image
          className=""
          src="/graphics-from-the-brandbook/plantje-3-viable-wit.svg"
          alt=""
          width={52}
          height={59}
        />
        <div className="w-full flex-auto ml-4">
          <h1 className="tracking-tight text-[var(--green-50-rgb)] font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl">
            The Story
          </h1>
        </div>
      </div>
      <div className="xl:pt-20 xl:px-24 lg:pt-16 lg:px-20 md:pt-12 md:px-16 sm:pt-10 sm:px-12 pt-4 px-6">
        <h2 className="text-black xl:text-2xl lg:text-xl md:text-lg font-bold">
          About the Founders
        </h2>
        <div className="w-7/12 py-8 pb-24">
          <p>
            In 2022, a group of three international visionaries, each possessing
            distinct skills and expertise in sustainability, construction,
            mobility, health, and NGO management, founded the organization in
            the Netherlands.
          </p>
          <p>
            One of our founders is a seasoned entrepreneur with years of
            experience in the health industry, while another boasts over 15
            years of entrepreneurial success and a wealth of knowledge in
            managing and coaching NGOs. Our third founding member has dedicated
            years to studying sustainable energy, technologies, and management
            at prestigious international universities.
          </p>
          <br></br>
          <p>
            Together, our founders bring more than three decades of combined
            experience to the table. Their expertise is only matched by their
            unwavering commitment to creating a better world for all.
          </p>
          <br></br>
          <p>
            Back in the 80s, Vincent Adrichem, the founder of Viable Community,
            found the seeds of his passion for nature while exploring the
            untouched beauty of a Dutch island. The canvas of Nature became the
            backdrop for his childhood adventures, setting the stage for a
            lifelong commitment to environmental preservation.
          </p>
          <br></br>
          <p>
            In the early 90s, Vincent&apos;s enthusiasm for organizing and
            bringing people together sprouted. Organizing a dance party for over
            300 people at the age of 13 marked the beginning of his journey into
            event management. However, his ambitions extended beyond the dance
            floors, as he was drawn to envisioning future scenarios and
            implementing new technologies. The preservation of nature and the
            creation of sustainable communities became a deep-seated calling.
          </p>
          <br></br>
          <p>
            The late 90s brought Vincent to Rotterdam, working on the
            &#39;AVL-Ville&#39; project with Atelier van Lieshout. Here, the
            seeds of an idea for a digital currency backed by co-owned nature
            were planted, setting the stage for the concepts that would evolve
            over the years.
          </p>
          <br></br>
          <p>
            Becoming a father in the early 00s marked a transformative period
            where Vincent seamlessly blended parenting with entrepreneurial
            endeavors. Managing construction projects, creating mobility
            services, building movie sets, teaching, and tending to bees all
            played a part in shaping his diverse experiences.
          </p>
          <br></br>
          <p>
            In the mid-2010s, a pivotal moment occurred. After a two-year
            construction project left unpaid, Vincent found solace in nature,
            leading him to shift his focus from purely profitable endeavors.
            Entering the non-profit space, he envisioned a global community
            where individuals could become co-owners of nature, investing in its
            protection and preservation. This vision extended to the creation of
            a currency challenging destructive economic systems.
          </p>
          <br></br>
          <p>
            During the late 2010s, Vincent&apos;s experiences with startups,
            partnerships, and collaborations with international non-profits
            highlighted the inefficiencies in traditional approaches to
            environmental preservation. The need for an inclusive, efficient,
            and impactful approach became clear. The Corona crisis further
            emphasized the power of collective creativity, reigniting
            Vincent&apos;s project.
          </p>
          <p>
            Establishing &#39;BT Equity&#39; marked the end of the 2010s,
            providing a foundation for future ventures. Vincent, along with
            companions Matt and Gustavo, recognized a growing demand for
            sustainable projects. Their shared vision led to the birth of
            &#34;Viable Community,&#34; a non-profit organization committed to
            co-ownership, shared decision-making, organic growth, and
            participation over competition.
          </p>
          <br></br>
          <p>
            The name &#39;Viable&#39; resonated, symbolizing the
            organization&#39;s mission and purpose. Today, with over 70
            international volunteers, Viable Community works towards protecting
            nature, creating investment opportunities, and channeling funds to
            community-developed projects. The Extremadura region serves as the
            focal point for countering desertification, aiming to enable
            everyone to contribute to the protection of nature.
          </p>
          <br></br>
          <p>
            As of September 2023, Viable Community has entered its second phase,
            kickstarting its online presence and engaging in various activities,
            including the Extremadura development, La Garrotxa pilot project,
            website revamping, installing ambassadors, and launching marketing
            campaigns. The journey of Viable Community continues, distinguished
            by a new currency that represents the true value of the planet, with
            the ultimate goal of accessibility to people worldwide, especially
            those in less privileged areas.
          </p>
        </div>
      </div>
    </main>
  );
}
