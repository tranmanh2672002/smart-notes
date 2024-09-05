import discoverLike from "@/app/assets/icons/discover-like.svg";
import discoverGlobal from "@/app/assets/icons/discover-global.svg";
import discoverCollaboration from "@/app/assets/icons/discover-collaboration.svg";
import discoverIcon from "@/app/assets/icons/discover-icon.svg";
import discoverBranch from "@/app/assets/icons/discover-branch.svg";
import discoverFlag from "@/app/assets/icons/discover-flag.svg";
import Image from "next/image";

const cardData = [
  {
    title: "Cross-Platform Accessibility",
    description:
      "Whether you're on your desktop, tablet, or smartphone, SmartNotes is accessible across all devices. Work seamlessly on the go and never miss a beat.",
    icon: discoverLike,
  },
  {
    title: "Customizable Templates",
    description:
      "Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences.",
    icon: discoverGlobal,
  },
  {
    title: "Secure Cloud Storage",
    description:
      "Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data.",
    icon: discoverFlag,
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects.",
    icon: discoverCollaboration,
  },
  {
    title: "AI-Powered Organization",
    description:
      "Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it.",
    icon: discoverIcon,
  },
  {
    title: "Integrations",
    description:
      "Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration.c",
    icon: discoverBranch,
  },
];

function HomeDiscover() {
  return (
    <div className="py-[70px]">
      <div className="max-w-[560px] mx-auto  pb-[88px]">
        <div className="mx-5 text-center">
          <h1 className="font-semibold text-[30px] md:text-[46px] text-primary-1">
            Discover the Power of
          </h1>
          <h1 className="font-semibold text-[30px] md:text-[46px] text-gradient-primary">
            SmartNotes
          </h1>
          <p className="text-primary-2 text-sm md:text-base mt-4">
            SmartNotes is packed with innovative features designed to
            revolutionize the way you take notes, collaborate with others, and
            stay organized.
          </p>
        </div>
      </div>
      <DiscoverCard />
    </div>
  );
}

function DiscoverCard() {
  return (
    <div className="mx-auto max-w-[1300px]">
      <div className="lg:mx-[100px] md:mx-[40px] sm:mx-[40px] mx-[20px] grid lg:grid-cols-4 lg:grid-rows-5 md:grid-cols-2 md:grid-rows-4 grid-cols-1 grid-rows-6 gap-4 md:gap-6">
        <div className="border-[1px] border-primary p-6 md:p-8 rounded-xl lg:col-span-2 lg:row-span-2 ">
          <Image src={cardData[0].icon} alt="icon" width={32} height={32} />
          <h1 className="text-primary-1 font-semibold text-base sm:text-lg md:text-xl mt-6 mb-3 ">
            {cardData[0].title}
          </h1>
          <p className="text-primary-2 text-sm sm:text-base max-w-[500px]">
            {cardData[0].description}
          </p>
        </div>

        <div className="border-[1px] border-primary p-6 md:p-8 rounded-xl lg:col-span-2 lg:row-span-2 ">
          <Image src={cardData[1].icon} alt="icon" width={32} height={32} />
          <h1 className="text-primary-1 font-semibold text-base sm:text-lg md:text-xl mt-6 mb-3">
            {cardData[1].title}
          </h1>
          <p className="text-primary-2 text-sm sm:text-base max-w-[500px]">
            {cardData[1].description}
          </p>
        </div>

        <div className="border-[1px] border-primary p-6 md:p-8 rounded-xl lg:row-span-3 md:col-span-2 lg:col-span-1">
          <Image src={cardData[2].icon} alt="icon" width={32} height={32} />
          <h1 className="text-primary-1 font-semibold text-base sm:text-lg md:text-xl mt-6 mb-3">
            {cardData[2].title}
          </h1>
          <p className="text-primary-2 text-sm sm:text-base max-w-[500px] md:row-span-2">
            {cardData[2].description}
          </p>
        </div>

        <div className="border-[1px] border-primary p-6 md:p-8 rounded-xl lg:row-span-3">
          <Image src={cardData[3].icon} alt="icon" width={32} height={32} />
          <h1 className="text-primary-1 font-semibold text-base sm:text-lg md:text-xl mt-6 mb-3">
            {cardData[3].title}
          </h1>
          <p className="text-primary-2 text-sm sm:text-base max-w-[500px]">
            {cardData[3].description}
          </p>
        </div>

        <div className="border-[1px] border-primary p-6 md:p-8 rounded-xl lg:row-span-3">
          <Image src={cardData[4].icon} alt="icon" width={32} height={32} />
          <h1 className="text-primary-1 font-semibold text-base sm:text-lg md:text-xl mt-6 mb-3">
            {cardData[4].title}
          </h1>
          <p className="text-primary-2 text-sm sm:text-base max-w-[500px]">
            {cardData[4].description}
          </p>
        </div>

        <div className="border-[1px] border-primary p-6 md:p-8 rounded-xl  lg:row-span-3 md:col-span-2 lg:col-span-1">
          <Image src={cardData[5].icon} alt="icon" width={32} height={32} />
          <h1 className="text-primary-1 font-semibold text-base sm:text-lg md:text-xl mt-6 mb-3">
            {cardData[5].title}
          </h1>
          <p className="text-primary-2 text-sm sm:text-base max-w-[500px]">
            {cardData[5].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeDiscover;
