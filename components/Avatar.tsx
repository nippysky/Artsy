import React from "react";

type Props = {
  src: string;
};

export default function Avatar({ src }: Props) {
  return (
    <div className=" w-[40px] h-[40px] overflow-hidden rounded-full border-avatarBorder border hover:animate-bounce">
      <img className="object-cover" src={src} width={100} height={100} />
    </div>
  );
}
