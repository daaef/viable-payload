import Image from "next/image";
import ViableButton from "../_components/viable-button";

export default function AboutUs() {
  const externalDonateURL = process.env
    .NEXT_PUBLIC_EXTERNAL_DONATE_URL as string;
  return (
    <main>
      <div className="relative isolate bg-[var(--light-green-100-rgb)]">
        <div
          className="mx-auto flex items-center bg-[url('/banners/about-us.webp')] bg-center-top bg-repeat-x lg:bg-contain bg-cover 
          xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:py-10 sm:px-12 py-4 px-6"
        >
          <Image
            className=""
            src="/graphics-from-the-brandbook/plantje-3-viable-wit.svg"
            alt="Plant drawing"
            width={52}
            height={59}
          />
          <div className="w-full flex-auto ml-4">
            <h1 className="tracking-tight text-[var(--green-50-rgb)] font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl">
              Welcome to your Viable Community
            </h1>
            <h3 className="text-[var(--green-50-rgb)] xl:text-2xl lg:text-xl md:text-lg text-base">
              Embrace (bio)diversity
            </h3>
          </div>
        </div>
        <div
          className="mx-auto
          xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:py-10 sm:px-12 py-4 px-6"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="font-semibold">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Image
                    src="/graphics-from-the-brandbook/flower-viable-groen.svg"
                    height={44}
                    width={45}
                    alt="Flower"
                  />
                </div>
                <h4>viable</h4>
              </dt>
              <dd className="mt-2">
                {/* /ˈvʌɪəbl/ adjective */}

                <ul className="list-disc">
                  <li>
                    capable of working successfully; feasible.<br></br>&#34;the
                    proposed investment was economically viable&#34;
                  </li>
                </ul>
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="font-semibold leading-8 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Image
                    src="/graphics-from-the-brandbook/flower-viable-groen.svg"
                    height={44}
                    width={45}
                    alt="Flower"
                  />
                </div>
                <h4>community</h4>
              </dt>
              <dd className="mt-2 leading-7 text-gray-600">
                {/* /kəˈmjuːnɪti/ noun */}

                <ul className="list-disc">
                  <li>
                    a group of people having a particular characteristic in
                    common.
                  </li>
                  <li>
                    the condition of sharing or having certain attitudes and
                    interests in common.
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div
          className="mx-auto bg-[var(--light-green-700-rgb)] text-white
          xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:py-10 sm:px-12 py-4 px-6"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="font-semibold">
                <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl">
                  Viable Community
                </h2>
              </dt>
              <dd className="mt-2">
                <ul className="list-disc">
                  <li>
                    a group of people working successfully together, sharing
                    common attitudes, and interests to achieve shared goals and
                    foster sustainable practices
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Image
              src="/photos/Team Photo.webp"
              width={720}
              height={930}
              alt="Team photo"
              className="w-full"
            />
            <div
              className="w-full text-[var(--green-800-rgb)]
              xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:py-10 sm:px-12 py-4 px-6"
            >
              <h2>Who are we?</h2>
              <p className="xl:pt-10 lg:pt-8 md:pt-6 sm:pt-5 pt-4">
                We are a non-profit organization headquartered in the European
                Union, passionately dedicated to the preservation and
                regeneration of nature since 2021. Our upcoming projects are
                centered on establishing community-management for both the
                preservation and restoration of ecosystems.
              </p>
              <p className="xl:pt-10 lg:pt-8 md:pt-6 sm:pt-5 pt-4">
                At Viable, we firmly believe in active community involvement and
                promoting collaboration with a wide range of stakeholders and
                partners to drive transformative change. Our commitment goes
                beyond geographical boundaries, resonating globally as we work
                collectively to safeguard the Earth&apos;s natural beauty,
                maintain ecological balance, and preserve valuable resources. As
                stewards of the environment, we engage in restoration and
                remediation efforts while also fostering conservation and
                preservation.
              </p>
              <p className="xl:pt-10 lg:pt-8 md:pt-6 sm:pt-5 pt-4">
                We believe in co-ownership of our living environment, protecting
                and improving biodiversity, and expanding educational efforts to
                enhance preservation practices.
              </p>
              <div className="flex justify-center mt-12 lg:mt-20 md:mt-10 sm:mt-8 pt-4">
                <div className="max-w-[200px] w-full">
                  <ViableButton
                    title="Meet the team"
                    href="/meet-our-team"
                    size="md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
              className="w-full lg:text-[var(--green-800-rgb)] lg:bg-[var(--green-50-rgb)]
              bg-[var(--green-500-rgb)] text-[var(--green-50-rgb)]
              xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:py-10 sm:px-12 py-4 px-6"
            >
              <h2>Our Mission</h2>
              <p className="xl:pt-10 lg:pt-8 md:pt-6 sm:pt-5 pt-4">
                Preserve and regenerate ecosystems by efficiently allocating
                resources and collaborating with the community. Identify,
                develop, organize, and implement initiatives that emphasize
                co-ownership, co-working, knowledge sharing, and the promotion
                of sustainability.
              </p>
            </div>
            <Image
              src="/licensed-images/the-handsome-father-and-his-little-son-planting-a-2023-11-27-04-57-46-utc-min.webp"
              width={749}
              height={451}
              alt="Father and son planting a tree"
              className="w-full hidden lg:block"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Image
              src="/licensed-images/daughter-helps-on-the-plantation-with-watering-agr-2023-11-27-05-17-20-utc-min.webp"
              width={815}
              height={451}
              alt="Girl watering crops"
              className="w-full hidden lg:block"
            />
            <div
              className="w-full lg:text-[var(--green-800-rgb)] lg:bg-[var(--green-50-rgb)]
              bg-[var(--green-500-rgb)] text-[var(--green-50-rgb)]
              xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:py-10 sm:px-12 py-4 px-6"
            >
              <h2>Our Vision</h2>
              <p className="xl:pt-10 lg:pt-8 md:pt-6 sm:pt-5 pt-4">
                Safeguard Earth&apos;s beauty and vital ecosystems for a
                sustainable future. We believe in the transformative power of
                active community participation and collaboration with a diverse
                range of stakeholders who share our vision.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
              className="w-full text-[var(--green-800-rgb)]
              xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:py-10 sm:px-12 py-4 px-6"
            >
              <h2>What do we do?</h2>
              <p className="xl:pt-10 lg:pt-8 md:pt-6 sm:pt-5 pt-4">
                We invest significant resources to ensure the effective
                execution of our projects. This involves mobilizing volunteers,
                forging partnerships, and establishing strong financial and
                legal structures.
              </p>
              <p className="xl:pt-6 lg:pt-5 md:pt-4 sm:pt-3 pt-2">
                We are committed to involving individuals, businesses, and
                government bodies in redirecting their efforts towards the
                betterment of the natural world.
              </p>
              <ul className="list-disc pl-8 pt-6">
                <li>Empower community organization</li>
                <li>Identify and design projects from inception</li>
                <li>Enable innovative funding models</li>
              </ul>
              <div className="flex justify-center mt-12 lg:mt-20 md:mt-10 sm:mt-8 pt-4">
                <div className="max-w-[200px] w-full">
                  <ViableButton title="Our work" href="/our-work" size="lg" />
                </div>
              </div>
            </div>
            <div
              className="w-full bg-[var(--green-500-rgb)] text-[var(--green-50-rgb)]
              xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:py-10 sm:px-12 py-4 px-6"
            >
              <h2>How do we do it?</h2>
              <p className="xl:pt-10 lg:pt-8 md:pt-6 sm:pt-5 pt-4">
                Viable Community is established as a legal entity in the
                European Union to obtain community owned nature and as a legal
                foundation for our restoration activities.
              </p>
              <p className="xl:pt-10 lg:pt-8 md:pt-6 sm:pt-5 pt-4">
                We work with a multi-pronged approach that includes land
                acquisition, restoration activities (fencing, cleaning,
                planting), animal reintroduction, and ongoing monitoring. We
                also develop sustainable financial and legal structures, foster
                collaboration with volunteers and partners, and ensure
                responsible access to the land.
              </p>
              <p className="xl:pt-10 lg:pt-8 md:pt-6 sm:pt-5 pt-4">
                Additionally, we actively educate individuals, businesses, and
                government agencies about responsible environmental practices
                and empower them to contribute to the conservation of nature.
              </p>
            </div>
          </div>
          <Image
            src="/licensed-images/farm-workers-carry-lots-of-freshly-picked-up-flowe-2023-11-27-05-31-41-utc-min.webp"
            width={1437}
            height={673}
            alt="People carrying flowers and white dog behind"
            className="hidden lg:block w-full"
          />

          <div
            className="bg-[var(--orange-800-rgb)] text-[var(--light-green-50-rgb)] 
              xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:py-10 sm:px-12 px-6 hidden lg:block"
          >
            <div className="flex justify-center items-center">
              <div className="w-1/5 hidden lg:block" dir="rtl">
                <Image
                  src="/graphics-from-the-brandbook/plantje-2-viable-wit.svg"
                  width={130}
                  height={99}
                  alt="Plant flipped"
                  className="transform -scale-x-100"
                />
              </div>
              <div
                className="
                w-3/5 hidden lg:block"
                dir="rtl"
              >
                <h2 className="text-center xl:text-4xl lg:text-3xl md:text-2xl text-xl">
                  Building a future where people and nature live in harmony
                </h2>
              </div>
              <div className="w-1/5 hidden lg:block" dir="rtl">
                <Image
                  src="/graphics-from-the-brandbook/plantje-2-viable-wit.svg"
                  width={130}
                  height={99}
                  alt="Plant"
                />
              </div>
            </div>
            <div
              className="bg-[var(--orange-800-rgb)] text-[var(--light-green-50-rgb)]
              xl:pt-20 xl:px-24 lg:pt-16 lg:px-20 md:pt-12 md:px-16 sm:pt-10 sm:px-12 pt-4 px-6"
            >
              <div className="flex justify-center">
                <ViableButton
                  title="Donate"
                  href={externalDonateURL ?? "/"}
                  target="_blank"
                  size="lg"
                  variant="orange"
                  icon="🤍"
                  data-testid="about-us-donate-button"
                />
              </div>
            </div>
          </div>
          <div className="text-center lg:hidden py-4 sm:w-full md:pl-2 sm:pl-2 md:mt-20 sm:mt-10 align-middle px-4  w-full text-white">
            <a
              href={externalDonateURL ?? "/"}
              target="_blank"
              className="inline-flex items-center justify-center px-16 py-4 rounded-lg 
    bg-[var(--orange-600-rgb)] text-[var(--orange-50-rgb)] hover:text-[var(--orange-100-rgb)] hover:bg-[var(--orange-500-rgb)]"
              data-testid="about-us-donate-button"
            >
              <span className="w-full px-20 ">Donate</span>
              <Image
                src="/icons/new-heart.webp"
                alt="White heart"
                width={31}
                height={31}
                className="pl-4"
              />
            </a>
          </div>

          <div>
            <div
              className="w-full text-[var(--green-800-rgb)]
             "
            >
              <div className="flex flex-col lg:flex-row justify-between items-start ">
                <div className="order-1 lg:order-2 relative w-full lg:w-1/2 h-64 lg:h-screen">
                  <Image
                    src="/licensed-images/sultan-butterfly-on-plant-danaus-chrysippus-butt-2023-12-02-04-45-34-utc-min.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    alt="Sultan butterfly on plant"
                    className=" inset-0 w-full h-993"
                  />
                </div>

                <div className="order-2 lg:order-1 xl:pt-20 xl:px-24 lg:pt-16 lg:px-20 md:pt-12 md:px-16 sm:pt-10 sm:px-12 px-8 pb-4">
                  <h2>Why do we do it</h2>

                  <ul className="list-disc pl-4 pt-6">
                    <li>
                      The global average temperature has risen by approximately
                      1.2 degrees Celsius since the late 19th century.
                    </li>
                    <li>
                      The frequency of extreme weather events, such as
                      hurricanes and heatwaves, has increased by 35% over the
                      past few decades.
                    </li>
                    <li>
                      An estimated 1 million plant and animal species are at
                      risk of extinction, according to the Intergovernmental
                      Science-Policy Platform on Biodiversity and Ecosystem
                      Services (IPBES).
                    </li>
                    <li>
                      Human activities have led to a 68% decline in global
                      wildlife populations since 1970, according to the World
                      Wildlife Fund (WWF).
                    </li>
                    <li>
                      The Earth&apos;s climate is warming at an alarming rate,
                      with the last decade being the warmest on record.
                    </li>
                    <li>
                      Global sea levels have risen about 8 inches in the last
                      century, with the rate nearly doubling in the last two
                      decades.
                    </li>
                    <li>
                      Species are disappearing at an unprecedented rate, with
                      the current rate of extinction being 1,000 times higher
                      than the natural background rate.
                    </li>
                    <li>
                      The world loses an estimated 18.7 million acres of forests
                      annually, equivalent to more than 10 million soccer fields
                      (about 27 soccer fields every minute).
                    </li>
                    <li>
                      This loss of habitat threatens countless plant and animal
                      species, pushing them towards extinction.
                    </li>
                    <li>
                      Over 700 million people still live in extreme poverty,
                      struggling to meet their basic needs.
                    </li>
                    <li>
                      Inequalities in access to education, healthcare, and
                      resources persist, exacerbating social and environmental
                      challenges.
                    </li>
                  </ul>
                  <div className="flex justify-center mt-12 lg:mt-20 md:mt-10 sm:mt-8 pt-4">
                    <div className="max-w-[200px] w-full">
                      <ViableButton
                        title="Know our story"
                        href="/our-story"
                        size="lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-[var(--green-800-rgb)] ">
            <div>
              <div className="xl:pt-20 xl:px-24 lg:pt-16 lg:px-20 md:pt-12 md:px-16 sm:pt-10 sm:px-12 px-8 pb-4">
                <h2>Why do we do it</h2>
                <p>
                  Our Values form the cornerstone of Viable Community&apos;s
                  identity and serve as a guiding light in our mission to
                  preserve and regenerate nature.
                </p>
              </div>
              <div className="flex flex-wrap w-full h-full">
                <div className="flex-1 bg-green200 p-6 shadow-md sm:px-8 md:px-10 lg:px-12 mb-4">
                  <div className="flex justify-center items-start py-6">
                    <Image
                      src="/icons/klein-sterretje-viable-wit.webp"
                      width={52}
                      height={47}
                      alt="klein sterretje"
                      className=""
                    />
                  </div>
                  <h4 className="font-bold">Knowledge and Innovation</h4>
                  <p className="pt-10">
                    We trust in science! We listen to what scientists say to
                    make decisions. We seek learning! Viable Community is a
                    learning organization. We are dedicated to the continuous
                    pursuit of knowledge and personal growth.
                  </p>
                </div>
                <div className="flex-1 bg-green300 p-6 shadow-md sm:px-8 md:px-10 lg:px-12 mb-4">
                  <div className="flex justify-center items-start py-6">
                    <Image
                      src="/icons/klein-sterretje-viable-wit.webp"
                      width={52}
                      height={47}
                      alt="klein sterretje"
                      className=""
                    />
                  </div>
                  <h4 className="font-bold">
                    Organizational Culture and Management
                  </h4>
                  <p className="pt-10">
                    We uphold a culture of accountability! Each member takes
                    responsibility for their actions and decisions.We are
                    committed to transparency! Openly sharing information and
                    decision-making processes ensures honesty and integrity,
                    which define our organizational conduct.We embrace
                    self-management! Striving beyond traditional hierarchical
                    structures, we have embraced self-management.
                  </p>
                </div>
                <div className="flex-1 bg-green400 p-6 shadow-md sm:px-8 md:px-10 lg:px-12 mb-4">
                  <div className="flex justify-center items-start py-6">
                    <Image
                      src="/icons/klein-sterretje-viable-wit.webp"
                      width={52}
                      height={47}
                      alt="klein sterretje"
                      className=""
                    />
                  </div>
                  <h4 className="font-bold">Collaboration and Community</h4>
                  <p className="pt-10">
                    We work together! Collaboration is at the heart of our
                    mission. We are committed to freedom! We champion a culture
                    that respects and values the freedom of every member. We
                    empower! We enable individuals to take initiative, make
                    decisions, and grow both personally and professionally.
                  </p>
                </div>
                <div className="flex-1 bg-green200 p-6 shadow-md sm:px-8 md:px-10 lg:px-12 mb-4">
                  <div className="flex justify-center items-start py-6">
                    <Image
                      src="/icons/klein-sterretje-viable-wit.webp"
                      width={52}
                      height={47}
                      alt="klein sterretje"
                      className=""
                    />
                  </div>
                  <h4 className="font-bold">
                    Ethical and Sustainable Interactions
                  </h4>
                  <p className="pt-10">
                    We are committed to sustainability! Our commitment to
                    environmental stewardship is ingrained in every decision we
                    make.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="
    xl:pt-20 xl:px-24 lg:pt-16 lg:px-20 md:pt-12 md:px-16 sm:pt-10 sm:px-12 px-6"
          >
            <h2>Which SGDs are we working towards and how?</h2>
            <p className="py-4">
              Our activities support the United Nations Sustainable Development
              Goals, with a focus on:
            </p>
            <div className="flex flex-col lg:flex-row lg:space-x-4  lg:space-y-0">
              <div className="flex-1 bg-green50 p-4 h-auto lg:h-80">
                <div className="flex flex-col items-center lg:flex-row lg:items-start h-full">
                  <div className="flex justify-center">
                    <Image
                      src="/icons/E_SDG_PRINT-15-1.webp"
                      width={131}
                      height={131}
                      alt="Life on Land"
                      className=""
                    />
                  </div>
                  <div className="mx-6 flex-1 text-center lg:text-left">
                    <h4>15 Life on Land</h4>
                    <p>
                      Our planned projects directly focus on protecting and
                      sustainably managing terrestrial ecosystems, halting land
                      degradation, and halting biodiversity loss. By efficiently
                      allocating resources and applying sustainable practices,
                      we help combat desertification, regenerate soil, and
                      enhance biodiversity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-green50 p-4 h-auto lg:h-80">
                <div className="flex flex-col items-center lg:flex-row lg:items-start h-full">
                  <div className="flex justify-center">
                    <Image
                      src="/icons/E_SDG_PRINT-13-1.webp"
                      width={131}
                      height={131}
                      alt="13 Climate Action"
                      className=""
                    />
                  </div>
                  <div className="mx-6 flex-1 text-center lg:text-left">
                    <h4>13 Climate Action</h4>
                    <p>
                      We are on the front line fighting climate change. Our
                      counter desertification projects sequester carbon and
                      implement climate-smart practices. We help mitigate
                      climate change effects by reducing greenhouse gas
                      emissions and with our agrivolataics we are adapting to
                      changing climate conditions. Making a viable farm possible
                      in otherwise impossible circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="
              xl:pt-20 xl:px-24 lg:pt-16 lg:px-20 md:pt-12 md:px-16 sm:pt-10 sm:px-12 pt-4 px-6 mb-0 "
          >
            <p className="pb-8">Aligned with</p>
            <div className="flex w-full flex-wrap ">
              <div className="flex-1 bg-green100 px-6 py-6 flex flex-col items-center mb-4 lg:mb-0">
                <div className="flex flex-col">
                  <Image
                    src="/icons/E_SDG_PRINT-07 1.webp"
                    width={136}
                    height={136}
                    alt="7 renewable energy"
                    className="py-4"
                  />
                </div>
                <p className="w-full max-w-[136px] text-start">
                  Our project generates a huge amount of renewable energy
                </p>
              </div>
              <div className="flex-1 px-6 py-6 flex flex-col items-center mb-4 lg:mb-0">
                <div className="flex flex-col">
                  <Image
                    src="/icons/E_SDG_PRINT-08 1.webp"
                    width={136}
                    height={136}
                    alt="8 economic growth"
                    className="py-4"
                  />
                </div>
                <p className="w-full max-w-[136px] text-start">
                  We create direct job opportunities for the people in the
                  communities
                </p>
              </div>
              <div className="flex-1 bg-green100 px-6 py-6 flex flex-col items-center mb-4 lg:mb-0">
                <div className="flex flex-col">
                  <Image
                    src="/icons/E_SDG_PRINT-11 1.webp"
                    width={136}
                    height={136}
                    alt="sustainable living"
                    className="py-4"
                  />
                </div>
                <p className="w-full max-w-[136px] text-start">
                  We engage local communities and work toward sustainable living
                </p>
              </div>
              <div className="flex-1 px-6 py-6 flex flex-col items-center mb-4 lg:mb-0">
                <div className="flex flex-col">
                  <Image
                    src="/icons/E_SDG_PRINT-12-1.webp"
                    width={136}
                    height={136}
                    alt="system integration"
                    className="py-4"
                  />
                </div>
                <p className="w-full max-w-[136px] text-start">
                  Our Agrivoltaic system integrates technology with regenerative
                  agriculture for sustainable food production
                </p>
              </div>
              <div className="flex-1 bg-green100 px-6 py-6 flex flex-col items-center mb-4 lg:mb-0">
                <div className="flex flex-col">
                  <Image
                    src="/icons/E_SDG_PRINT-14-1.webp"
                    width={136}
                    height={136}
                    alt="contribution"
                    className="py-4"
                  />
                </div>
                <p className="w-full max-w-[136px] text-start">
                  Our organization indirectly contributes to SDG 14. We will
                  suggest expanding our initiatives when we have sufficient
                  funds because we understand the importance of a clean ocean
                  for all life on Earth.
                </p>
              </div>
              <div className="flex-1 px-6 py-6 flex flex-col items-center mb-4 lg:mb-0">
                <div className="flex flex-col">
                  <Image
                    src="/icons/E_SDG_PRINT-17-1.webp"
                    width={136}
                    height={136}
                    alt="collaborating"
                    className="py-4"
                  />
                </div>
                <p className="w-full max-w-[136px] text-start">
                  We are constantly collaborating with local communities, NGOs,
                  educational institutions, and other stakeholders, emphasizing
                  the importance of global partnerships to achieve sustainable
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
