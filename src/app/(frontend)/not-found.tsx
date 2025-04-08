import Image from "next/image";
import ViableButton from "./_components/viable-button";
import "./not-found.css";

export default function NotFound() {
  return (
    <div
      id="not-found-page"
      className="max-w-sm mx-auto py-24 rounded-xl overflow-hidden md:max-w-fit"
    >
      <div className="md:flex">
        <div className="flex items-center justify-center mt-10">
          <Image
            src="/CV-Brandmark-Green.svg"
            alt="Viable small logo"
            width={75}
            height={77}
            className="block md:hidden"
          />
        </div>
        <div className="md:shrink-0">
          <Image
            className="h-full w-full object-cover"
            src="/not-found-404.png"
            alt="Page not found yeti with phone"
            width={380}
            height={456}
            data-testid="not-found-image"
          />
        </div>
        <div className="p-8">
          <h1 className="hidden md:block">OOPS!</h1>
          <h2 className="hidden md:block">
            Looks like big foot has broken the link
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ViableButton
              title="Back to homepage"
              href="/"
              size="xl"
              data-testid="back-to-homepage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
