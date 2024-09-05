import ButtonBase from "../base/button";
import ArrowIcon from "@/app/assets/icons/arrow.svg";
import BannerImg from "@/app/assets/img/banner.svg";
import Image from "next/image";

function HomeBanner() {
  return (
    <div className="flex items-center justify-center md:gap-[40px] lg:gap-[100px] md:px-[40px] px-5">
      <div className="py-[64px] md:py-[128px] ">
        <h1 className="max-w-[636px] font-bold text-[30px] md:text-[50px] lg:text-[60px] text-primary-1">
          <span className="text-gradient-primary mr-4">Intelligent</span>
          <span className="mr-4">cloud-based</span>
          <span className="text-gradient-primary mr-4">note-taking</span>
          and <br></br> collaboration tool
        </h1>
        <h2 className="text-primary-2 mb-10">
          Experience the power of smart note-taking and transform the way you
          work today.
        </h2>
        <div className="max-w-[434px] h-[68px] pl-[24px] pr-[6px] rounded-lg bg-[#EFECE6] border-primary border-[1px]  flex items-center justify-between">
          <span className="text-secondary-2">Enter your email</span>
          <ButtonBase
            label="Get Started"
            variant="primary"
            appendIcon={ArrowIcon}
          />
        </div>
      </div>
      <div
        className="lg:flex lg:items-center hidden w-[363px] h-[483px]"
        style={{
          background:
            "linear-gradient(180.04deg, #080808 0.04%, rgba(8, 8, 8, 0) 50%, #080808 99.96%)",
        }}
      >
        <Image src={BannerImg} alt="Banner" />
      </div>
    </div>
  );
}

export default HomeBanner;
