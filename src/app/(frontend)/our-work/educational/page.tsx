import GoBack from "../../_components/go-back";
import Image from "next/image";

export default function Educational() {
  return (
    <main>
      <div className="bg-white flex py-3 items-center sm:py-32 sm:bg-cover sm:bg-[center_52%] sm:bg-[url('/licensed-images/planting-for-the-future-2023-11-27-05-08-51-utc-min.webp')]">
        <h1 className="pl-6 font-semibold mx-auto sm:text-5xl md:text-[var(--green-50-rgb)] text-[var(--green-900-rgb)">
          Educational
        </h1>
        <Image
          className="inline sm:hidden"
          src="/graphics-from-the-brandbook/flower-viable-zwart.svg"
          alt="bijen wit"
          width={70}
          height={60}
        />
      </div>
      <div
        className="w-full text-[var(--green-800-rgb)]
                    xl:py-20 xl:px-24 lg:py-16 lg:px-20 md:py-12 md:px-16 sm:py-10 sm:px-12 py-4 px-6"
      >
        <h2 className="my-4">Project Educational Videos</h2>
        <p className="mt-2 mb-4">
          We&apos;re creating educational videos highlighting eco-friendly
          organizations and fascinating natural sites. Join us in promoting
          environmental awareness and inspiring positive change.
        </p>
        <h3 className="my-3">
          Exploring Sustainable Living Through Educational Videos
        </h3>
        <p className="my-2">
          We are excited to announce a new project dedicated to fostering
          environmental awareness and promoting sustainable practices. We are
          embarking on an initiative to create a series of educational videos
          that spotlight exemplary sustainable organizations and highlight
          captivating natural points of interest. Through these videos, we aim
          to inspire communities to adopt eco-friendly practices and appreciate
          the natural world around them.
        </p>

        <h4 className="my-2">Spotlight on Sustainable Organizations</h4>
        <p className="my-2">
          In our video series, we will feature a diverse range of sustainable
          organizations that are making significant contributions to
          environmental conservation and sustainability. Some examples include:
        </p>
        <ul className="list-disc ml-6 my-2">
          <li>
            <strong>Sustainable Coffee Shops:</strong> Showcasing coffee shops
            that prioritize ethical sourcing, fair trade, and eco-friendly
            practices.
          </li>
          <li>
            <strong>City Farms:</strong> Highlighting urban farms that bring
            agriculture into the heart of the city, providing fresh produce and
            promoting local food systems.
          </li>
          <li>
            <strong>Environmental NGOs:</strong> Featuring organizations
            dedicated to conservation, advocacy, and education, working
            tirelessly to protect our planet.
          </li>
        </ul>
        <p>
          These organizations serve as shining examples of how businesses and
          communities can operate sustainably while making a positive impact on
          the environment.
        </p>

        <h4 className="my-2">Exploring Natural Points of Interest</h4>
        <p className="my-2">
          Our videos will also take viewers on a journey to explore some of the
          most interesting and important natural sites. These points of interest
          include:
        </p>
        <ul className="list-disc ml-6 my-2">
          <li>
            <strong>The Hague&apos;s Dunes:</strong> Discover how the dunes in
            The Hague play a crucial role in providing the city with clean
            drinking water through natural filtration processes.
          </li>
          <li>
            <strong>Natural Reserves in the Netherlands:</strong> Explore the
            diverse flora and fauna in protected natural reserves, highlighting
            their importance for biodiversity and conservation.
          </li>
          <li>
            <strong>Protected Forestry:</strong> Learn about the efforts to
            preserve forests and the benefits they provide, from carbon
            sequestration to habitat protection.
          </li>
          <li>
            <strong>Recreational Parks:</strong> Visit parks designed for public
            enjoyment and recreation, emphasizing their role in promoting mental
            well-being and a connection to nature.
          </li>
        </ul>
        <p>
          Each video will be crafted to educate viewers about the importance of
          these natural sites, the challenges they face, and the efforts being
          made to protect and sustain them.
        </p>

        <h3 className="my-3">Join Us in Promoting Environmental Awareness</h3>
        <p className="my-2">
          We invite you to join us on this journey of exploration and learning.
          By shining a spotlight on sustainable organizations and natural points
          of interest, we hope to inspire individuals and communities to embrace
          sustainable practices and foster a deeper appreciation for the
          environment. Together, we can make a difference and work towards a
          more sustainable future.
        </p>
        <p>
          Stay tuned for the release of our educational video series, and be
          part of the movement to protect and cherish our planet.
        </p>
        <GoBack />
      </div>
    </main>
  );
}
