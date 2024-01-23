// AboutHighlights.tsx
import Image from "next/image";
import React from "react";
import { urlFor } from "../../../sanity/client";
import { Button } from "../ui/button";

interface AboutHighlightsProps {
  title: string;
  description: string;
  avatar: any;
}

const AboutHighlights: React.FC<AboutHighlightsProps> = (
  props: AboutHighlightsProps
) => {
  const { title, description, avatar } = props;
  return (
    <div className="max-w-7xl w-full p-6 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="w-full md:w-1/2 space-y-16 text-center md:text-left">
        <div className="text-white text-[56px] font-bold font-syne">
          <div className="relative">
            <p>{title}</p>
            <div className="w-52 h-52 z-[-25px] backdrop-blur-sm bg-white opacity-20 absolute rounded-full top-[-30px] left-[-30px] animate-shake animate-infinite animate-ease-linear animate-duration-[3000ms]"></div>
          </div>
        </div>
        <div className="text-neutral-400 text-lg font-normal font-rubik leading-7 tracking-wide">
          {description}
        </div>
        <Button className="p-7 bg-orange-400 border-2 border-transparent hover:border-orange-400 hover:bg-transparent rounded-full">
          Discover More About Me
        </Button>
      </div>
      {/* Avatar */}
      <div className="w-full md:w-1/2 ratio-4x3 h-[506px] relative">
        <Image
          className="w-full h-[506px] md:left-[39px] top-[17px] absolute rounded-lg object-cover"
          src={urlFor(avatar).url()}
          alt="avatar"
          width={506}
          height={506}
        />
        <div className="w-[55px] h-[178px] left-[-25px] md:left-0 bottom-0 absolute rounded-full border border-orange-400" />
        <div className="w-[110px] h-[34px] right-0 top-0 absolute rounded-full border border-orange-400" />
      </div>
    </div>
  );
};

export default AboutHighlights;
