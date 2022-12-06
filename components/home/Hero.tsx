import React from "react";
import { headFont } from "../../public/fonts";
import heroPic from "../../public/brand/heroPic.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen">
      <div className="flex flex-col justify-center items-center px-80 my-14">
        <h1
          className={`font-sans ${headFont} font-clashDisplay font-extrabold text-[3rem]  text-text text-center `}
        >
          Photography is poetry & beautiful untold stories
        </h1>

        <p className="font-satoshi font-medium text-[1.35rem] text-center mt-6">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>

      {/* Hero Pic */}
      <Image
        src={heroPic}
        alt="Hero Slide Pic"
        height={30}
        width={1500}
        priority
      />
    </section>
  );
}
