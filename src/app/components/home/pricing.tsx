import team from "@/app/assets/icons/team.svg";
import individual from "@/app/assets/icons/individual.svg";
import enterprise from "@/app/assets/icons/enterprise.svg";
import Image from "next/image";
import ButtonBase from "../base/button";
import arrow from "@/app/assets/icons/arrow.svg";
import arrowPrimary from "@/app/assets/icons/arrow-primary.svg";
import check from "@/app/assets/icons/check.svg";

const data = [
  {
    title: "Individual Plan",
    price: "$9.99",
    icon: individual,
    list: [
      "Real-time collaboration",
      "AI-powered organization",
      "Customizable templates",
      "5GB cloud storage",
      "Basic integrations",
    ],
  },
  {
    title: "Team Plan",
    price: "$19.99",
    icon: team,
    list: [
      "Everything in the Individual Plan",
      "Unlimited cloud storage",
      "Advanced integrations",
      "Team management and permissions",
      "Shared templates and note libraries",
    ],
  },
  {
    title: "Enterprise Plan",
    price: "$39.99",
    icon: enterprise,
    list: [
      "Everything in the Team Plan",
      "Dedicated account manager",
      "Enterprise-grade security",
      "Customized onboarding",
      "Advanced analytics",
    ],
  },
];

function HomePricing() {
  return (
    <div>
      <h1 className="font-semibold sm:text-[48px] text-[30px] text-primary-1 text-center">
        <span className="text-gradient-primary mr-4">Pricing</span>& Plans
      </h1>
      <div className="max-w-[426px] mx-auto mt-4">
        <p className="text-primary-2 text-center mx-5 text-sm sm:text-base">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="flex gap-[14px] items-center justify-center my-[43px]">
        <h2 className="sm:text-lg text-base text-primary-1">Monthly</h2>
        <div className="rounded-3xl p-[6px] bg-[#BABABA] w-[60px] border-[1px] border-primary cursor-pointer">
          <div className="bg-white w-5 h-5 rounded-full"></div>
        </div>
        <h2 className="sm:text-lg text-base text-primary-2">Yearly</h2>
        <div className="rounded-3xl bg-gradient-to-r from-[#55A6A2] to-[#AAD9D1] w-[94px] h-[26px] flex items-center justify-center text-sm text-secondary-1">
          Save 25%
        </div>
      </div>
      <div className="mx-5 flex lg:flex-row flex-col gap-10 lg:justify-center items-center lg:items-start">
        <CardSecondary item={data[0]} />
        <CardPrimary item={data[1]} />
        <CardSecondary item={data[2]} />
      </div>
    </div>
  );
}

function CardPrimary({ item }: { item: any }) {
  return (
    <div className="lg:w-[380px] sm:w-[470px] w-[320px]">
      <div className="bg-[--text-secondary-1] py-10 px-8 border-[2px] border-primary rounded-xl">
        <div className="flex items-center gap-2 mb-8">
          <Image src={item.icon} alt="icon" width={25} height={25} />
          <h3 className="text-sm text-[--secondary-color]">{item.title}</h3>
        </div>
        <h1 className="text-[48px] text-primary-1 font-semibold">
          {item.price}
          <span className="text-sm text-[--secondary-color]">/ month</span>
        </h1>
        <div className="text-primary-2 mt-4 py-8">
          {item?.list?.map((item: any, index: number) => (
            <div key={index} className="flex gap-3 mb-3">
              <Image src={check} alt="check" width={17} height={12} />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <ButtonBase
          variant="primary"
          label="Start Free Trial"
          appendIcon={arrow}
          width="100%"
        />
      </div>
    </div>
  );
}

function CardSecondary({ item }: { item: any }) {
  return (
    <div className="lg:w-[380px] sm:w-[470px] w-[320px]">
      <div className="bg-white py-10 px-8 border-[2px] border-primary rounded-xl">
        <div className="flex items-center gap-2 mb-8">
          <Image src={item.icon} alt="icon" width={25} height={25} />
          <h3 className="text-sm text-[--secondary-color]">{item.title}</h3>
        </div>
        <h1 className="text-[48px] text-secondary-1 font-semibold">
          {item.price}
          <span className="text-sm text-secondary-2">/ month</span>
        </h1>
        <div className="text-secondary-2 mt-4 py-8">
          {item?.list?.map((item: any, index: number) => (
            <div key={index} className="flex gap-3 mb-3">
              <Image src={check} alt="check" width={17} height={12} />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <ButtonBase
          variant="secondary"
          label="Start Free Trial"
          appendIcon={arrowPrimary}
          width="100%"
        />
      </div>
    </div>
  );
}

export default HomePricing;
