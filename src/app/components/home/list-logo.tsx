import logo1 from "@/app/assets/img/logo/logo1.svg";
import logo2 from "@/app/assets/img/logo/logo2.svg";
import logo3 from "@/app/assets/img/logo/logo3.svg";
import logo4 from "@/app/assets/img/logo/logo4.svg";
import logo5 from "@/app/assets/img/logo/logo5.svg";
import logo6 from "@/app/assets/img/logo/logo6.svg";
import logo7 from "@/app/assets/img/logo/logo7.svg";
import logo8 from "@/app/assets/img/logo/logo8.svg";
import overlay from "@/app/assets/img/overlay-logo.svg";
import Image from "next/image";

const logos = [
  {
    id: 1,
    src: logo1,
    alt: "logo1",
  },
  {
    id: 2,
    src: logo2,
    alt: "logo2",
  },
  {
    id: 3,
    src: logo3,
    alt: "logo3",
  },
  {
    id: 4,
    src: logo4,
    alt: "logo4",
  },
  {
    id: 5,
    src: logo5,
    alt: "logo5",
  },
  {
    id: 6,
    src: logo6,
    alt: "logo6",
  },
  {
    id: 7,
    src: logo7,
    alt: "logo7",
  },
  {
    id: 8,
    src: logo8,
    alt: "logo8",
  },
];

function HomeLogoList() {
  return (
    <div className="bg-[#080808] lg:py-10 md:py-8">
      <div className=" relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center pointer-events-none">
          <Image src={overlay} alt="overlay" fill objectFit="cover" />
        </div>
        <div className="md:mx-[96px] mx-[20px] overflow-x-auto scrollbar-hide">
          <div className="flex justify-center gap-5 max-w-full">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="md:min-w-[135px] md:min-h-[48px] min-w-[112px] min-h-[20px]"
              >
                <Image src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLogoList;
