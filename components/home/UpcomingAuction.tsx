import Link from "next/link";
import React from "react";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export default function UpcomingAuction() {
  return (
    <section className="w-full py-10 px-20 bg-gradient-to-r from-[#79C2D2] via-[#4693ED] to-[#C05609] my-20">
      <div className="w-[50%] border-b border-white pb-6">
        <h3 className="w-full font-satoshi text-[1.85rem] font-medium text-white">
          See Upcoming Auctions and Exhibitions
        </h3>
      </div>

      {/* Image Background */}
      <div
        className="w-full h-[500px] my-7 bg-cover flex flex-col justify-end py-10 px-10"
        style={{
          backgroundImage: "url('/featured/UpcomingEvents.svg')",
        }}
      >
        <div className="flex gap-20 justify-between items-center w-full">
          {/* number and heading */}
          <div className="flex gap-5 justify-start items-center w-1/2">
            {/* number */}
            <h1 className="font-black font-clashDisplay text-3xl text-white">
              01
            </h1>

            {/* heading */}
            <div>
              <h1 className="font-normal font-satoshi text-[1.2rem] text-white">
                MONALISA REDEFINED IN STYLE.
              </h1>

              <small className="font-satoshi font-bold text-white my-5">
                Start on : 08:00 GTS . Monday{" "}
              </small>

              <p className="font-normal font-satoshi text-white text-[0.75rem] my-2">
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="w-1/2 flex gap-10 justify-end items-center">
            {/* see more */}
            <div>
              <Link href={"/"}>
                <span className="text-white font-satoshi font-bold border-b border-white">
                  See more
                </span>
              </Link>
            </div>

            {/* set reminder */}
            <button className="text-white bg-transparent border border-white rounded-md px-5 py-2 hover:bg-white hover:text-text">
              Set a reminder
            </button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full flex justify-end items-center">
        <div className="flex gap-5">
          {/* prev */}
          <div className="flex justify-center items-center w-[35px] h-[35px] bg-transparent shadow-xl rounded-full border cursor-pointer hover:bg-white hover:text-black text-white">
            <AiOutlineLeft size={13} />
          </div>

          {/* next */}
          <div className="flex justify-center items-center w-[35px] h-[35px] bg-transparent shadow-xl rounded-full border cursor-pointer hover:bg-white hover:text-black text-white">
            <AiOutlineRight size={13} />
          </div>
        </div>
      </div>
    </section>
  );
}
