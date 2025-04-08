import Image from "next/image";

export interface LongCardProps {
  isHovered?: boolean;
  eventType: string;
  title: string;
  date: string;
  imageSrc: string;
  imageAlt?: string;
  subtitle: string;
  content: string;
}

const LongCard: React.FC<LongCardProps> = ({
  eventType,
  title,
  date,
  imageSrc,
  imageAlt = "",
  subtitle,
  content,
}) => {
  return (
    <div
      className="w-72 h-[685px] relative rounded-lg mx-1 font-sans 
                    bg-[var(--light-green-50-rgb)] hover:bg-[var(--light-green-300-rgb)]
                    shadow-lg"
    >
      <div className="flex flex-1 flex-col pt-0 space-y-3 p-6">
        <div className="h-16 py-2 pt-6">
          <div className="h-min flex justify-center flex-row flex-1">
            <button
              className="font-sans flex items-center justify-center w-28 space-x-2 py-2 h-9 
                         cursor-not-allowed pointer-events-none rounded"
              style={
                eventType === "Events"
                  ? {
                      backgroundColor: "var(--orange-100-rgb)",
                      color: "var(--orange-600-rgb)",
                    }
                  : {
                      backgroundColor: "var(--green-100-rgb)",
                      color: "var(--green-900-rgb)",
                    }
              }
            >
              <Image
                src={
                  eventType === "Events"
                    ? "/graphics-from-the-brandbook/bijen-viable-oranje.svg"
                    : "/graphics-from-the-brandbook/bijen-viable-zwart.svg"
                }
                className="h-6 mr-1 fill-current"
                style={{
                  transform: eventType === "Events" ? "scaleX(-1)" : "",
                }}
                width={40}
                height={40}
                alt="Bijen Zwart"
              />
              <span className="text-center font-bold">{eventType}</span>
            </button>
          </div>
        </div>

        <div
          className="flex py-0 flex-col"
          style={{
            color:
              eventType === "Events"
                ? "var(--orange-600-rgb)"
                : "var(--green-500-rgb)",
          }}
        >
          <h4 className="text-2xl font-bold">{title}</h4>
          <p className="text-xl">{date}</p>
        </div>

        <div
          className={`w-full h-48 bg-cover bg-center bg-no-repeat`}
          style={{ backgroundImage: `url("${imageSrc}")` }}
          aria-label={imageAlt}
        ></div>
        <div
          className="space-y-5 justify-center"
          style={{ color: "var(--green-800-rgb)" }}
        >
          <p className="text-xl line-clamp-2">{subtitle}</p>
          <div className="overflow-auto line-clamp-5">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default LongCard;
