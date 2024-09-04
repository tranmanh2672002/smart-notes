"use client";
import Image from "next/image";
import ArrowIcon from "@/app/assets/icons/arrow.svg";
import MenuIcon from "@/app/assets/icons/menu.svg";
import CloseIcon from "@/app/assets/icons/close.svg";
import logo from "@/app/assets/icons/logo.svg";
import ButtonBase from "./base/button";
import Link from "next/link";
import FacebookIcon from "@/app/assets/icons/facebook.svg";
import LinkedinIcon from "@/app/assets/icons/linkedin.svg";
import TwitterIcon from "@/app/assets/icons/twitter.svg";
import YoutubeIcon from "@/app/assets/icons/youtube.svg";

import { useState } from "react";

const header = [
  {
    name: "Features",
  },
  {
    name: "Pricing",
  },
  {
    name: "Support",
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

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0  bg-[#080808] 
        sm:h-[86px] md:h-[90px] h-[76px] 
        border border-b-1 border-t-0 border-l-0 border-r-0 border-[#048C80]
        flex  items-center justify-between
        sm:px-[48px] md:px-[60px] lg:[96px] px-[20px]
        "
    >
      <div className="flex items-center gap-2">
        <div>
          <Image src={logo} alt="logo" width={38} height={38} />
        </div>
        <h1 className="text-white text-[24px]">SmartNotes</h1>
      </div>
      <div className="md:block hidden">
        {header.map((item, index) => (
          <Link
            key={index}
            className="text-white hover:text-gradient-primary mx-4"
            href="/"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="md:block hidden">
        <ButtonBase
          label="Get Started"
          variant="primary"
          appendIcon={ArrowIcon}
        />
      </div>
      <div className="md:hidden block cursor-pointer select-none">
        <Image
          src={MenuIcon}
          alt="logo"
          width={32}
          height={18}
          onClick={toggleMenu}
        />
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white 
            transition-transform duration-300 
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className="flex justify-between items-center sm:h-[86px] md:h-[90px] h-[76px]
            sm:px-[48px] md:px-[60px] lg:[96px] px-[20px]
            border border-b-1 border-t-0 border-l-0 border-r-0 border-[#048C80]
            "
        >
          <div className="flex items-center gap-2">
            <div className="w-[28px] h-[28px] sm:w-[38px] sm:h-[38px]">
              <Image src={logo} alt="logo" width={38} height={38} />
            </div>
            <h1 className="text-white text-[24px]">SmartNotes</h1>
          </div>
          <div className="cursor-pointer select-none">
            <Image
              src={CloseIcon}
              alt="logo"
              width={24}
              height={24}
              onClick={toggleMenu}
            />
          </div>
        </div>
        <nav className="mt-8 sm:px-[48px] md:px-[60px] lg:[96px] px-[20px]">
          <ul>
            {header.map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="hover:text-gradient-primary cursor-pointer select-none"
                >
                  {item.name}
                </Link>
                <div
                  className={`w-[300px] h-[1px] my-4 bg-white ${
                    index === header.length - 1 ? "hidden" : ""
                  }`}
                ></div>
              </li>
            ))}
          </ul>
          <div className="flex gap-5 mt-[116px]">
            {social.map((item, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
              >
                <Image src={item.icon} alt="icon" />
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
