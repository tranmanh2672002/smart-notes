import Image from "next/image";
import image from "@/app/assets/img/video-bg.png";
import playIcon from "@/app/assets/icons/play-gradient.svg";

function HomeVideo() {
  return (
    <div className="max-w-[1200px] mx-auto sm:my-[64px] my-[32px] flex items-center">
      <div className="w-full h-full relative mx-5 sm:mx-[40px] lg:mx-[100px] overflow-hidden">
        <Image src={image} alt="video" objectFit="cover" />
        <div className="absolute top-0 left-0 bottom-0 w-full h-full bg-[#048C80] opacity-60 mix-blend-multiply "></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 md:w-[66px] md:h-[66px]  w-[44px] h-[44px] flex items-center justify-center bg-[#f7f7f7] rounded-full cursor-pointer select-none">
          <Image src={playIcon} alt="video" width={15} height={17} />
        </div>
      </div>
    </div>
  );
}

export default HomeVideo;
