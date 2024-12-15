"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState(0);

  const checkScrollPosition = () => {
    const h1Element = document.getElementById("content");
    if (!h1Element) return;

    const rect = h1Element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const position = Math.max(0, windowHeight - rect.top - windowHeight / 3);

    setPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);
  return (
    <>
      <div className="h-[2000px]">
        <div
          style={{ top: `calc(90px - ${position}px)` }}
          className="sticky top-[90px] z-[-10] background-banner h-screen w-full bg-slate-500 bg-bg-test1 md:bg-bg-test2  bg-center bg-cover"
        ></div>
        <div
          id="content"
          className="text-black h-[1000px] mt-[-20px] rounded-t-[20px] bg-red-300"
        >
          revert 1
        </div>
      </div>
    </>
  );
}
