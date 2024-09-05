import quote from "@/app/assets/icons/quote.svg";
import Image from "next/image";

function HomeIntro() {
  return (
    <div className="mx-auto max-w-[475px]">
      <div className="mx-5 py-[64px]">
        <Image src={quote} alt="quote" width={37} height={24} />
        <h1 className="font-bold text-[20px] md:text-[24px] text-primary-1 text-center">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h1>
        <div className="flex gap-4 mt-[32px] justify-center text-sm md:text-base">
          <h2 className="text-primary-1">Sarah Johnson</h2>
          <h2 className="text-primary-2">TechSavvy Solutions</h2>
        </div>
      </div>
    </div>
  );
}

export default HomeIntro;
