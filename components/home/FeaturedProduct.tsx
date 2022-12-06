import Image from "next/image";
import React from "react";
import featuredProducts from "../../dummy-data";
import AvatarStack from "./AvatarStack";
import { SlArrowRightCircle } from "react-icons/sl";
import Link from "next/link";

export default function FeaturedProduct() {
  return (
    <section className="w-full px-20">
      <div className="border-b border-light py-5">
        <h1 className="font-bold font-satoshi text-[1.85rem] mt-20 text-light">
          Featured Product
        </h1>
      </div>

      {featuredProducts.map((product, index) => (
        <div
          key={product.id}
          className={`w-full py-10 flex gap-10 justify-between item-start border-b border-light ${
            index % 2 !== 0 ? "flex-row-reverse" : null
          } ${index === featuredProducts.length - 1 ? "border-none" : null}`}
        >
          {/* image */}
          <div
            className={`w-1/2 flex ${index % 2 !== 0 ? "justify-end" : null}`}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={550}
              height={275}
              priority
            />
          </div>

          {/* details */}
          <div className="w-1/2">
            <h1 className="font-semibold text-light font-clashDisplay text-[1.65rem]">
              {product.title}
            </h1>

            <p className="font-satoshi font-light text-[1.15rem] my-6 foont-normal">
              {product.desc}
            </p>

            <div className="w-full flex justify-between items-center mt-5">
              <div className="w-1/3">
                <AvatarStack />
              </div>

              <div className="w-1/3 flex justify-center">
                <p className="font-satoshi font-light text-[1.3rem] my-6 foont-nmedium">
                  64 Major Creators
                </p>
              </div>

              <div className="w-1/3 flex justify-end">
                <Link href={product.link}>
                  <SlArrowRightCircle size={40} color="#333333" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
