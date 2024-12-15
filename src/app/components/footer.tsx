import Image from "next/image";
import logo from "@/app/assets/icons/logo.svg";
import arrow from "@/app/assets/icons/arrow-primary.svg";
import ButtonBase from "./base/button";
import Link from "next/link";
import FacebookIcon from "@/app/assets/icons/facebook.svg";
import LinkedinIcon from "@/app/assets/icons/linkedin.svg";
import TwitterIcon from "@/app/assets/icons/twitter.svg";
import YoutubeIcon from "@/app/assets/icons/youtube.svg";

const footer = [
  {
    title: "Product",
    links: ["About", "Features", "Pricing", "Integrations", "FAQs"],
  },
  {
    title: "Company",
    links: ["Our Story", "Team", "Careers", "Press", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Webinars", "Case Studies", "Templates", "Help Center "],
  },
  {
    title: "Legal",
    links: [
      "Terms of Service",
      "Privacy Policy",
      "Cookie Policy",
      "Acceptable Use",
      "Refund Policy",
    ],
  },
];

const social = [
  {
    icon: FacebookIcon,
  },
  {
    icon: LinkedinIcon,
  },
  {
    icon: TwitterIcon,
  },
  {
    icon: YoutubeIcon,
  },
];

function Footer() {
  return (
    <div>
      <div
        className="md:px-[60px] sm:px-[48px] px-[20px]    
        sm:pt-[80px] pt-[56px] md:pb-[80px] pb-[56px]  
        bg-[#080808] 
        flex lg:flex-row flex-col xl:gap-[200px] lg:gap-[100px] gap-[30px] lg:items-center lg:justify-center
        border-t-[1px] border-primary"
      >
        <div className="min-w-[233px]">
          <div className="flex gap-2 mb-[32px] lg:mb-[64px]">
            <Image src={logo} alt="logo" width={38} height={38} />
            <h1 className="text-white text-[24px]">SmartNotes</h1>
          </div>
          <ButtonBase
            variant="secondary"
            label="email@smartnote.io"
            appendIcon={arrow}
          />
        </div>
        <div className="flex gap-[94px] lg:flex-nowrap flex-wrap">
          {footer.map((item, index) => (
            <div key={index}>
              <h1 className="text-white text-[18px] font-semibold mb-[12px]">
                {item.title}
              </h1>
              <div className="flex flex-col  gap-4">
                {item.links.map((link, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="text-[#B0B0B0] text-[14px] text-nowrap overflow-ellipsis hover:text-gradient-primary "
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#048C80] flex md:flex-row gap-4 flex-col-reverse md:items-center justify-between py-5 sm:px-[48px] md:px-[144px] px-4">
        <span className="text-sm">
          @2024 SmartNotesI. All Rights Reserved. @iamhervewabo
        </span>
        <div className="flex gap-5">
          {social.map((item, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full bg-[#017373] flex items-center justify-center"
            >
              <Image src={item.icon} alt="icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
