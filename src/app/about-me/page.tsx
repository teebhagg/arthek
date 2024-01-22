import Header from "@/components/common/header";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-7xl w-full p-6 space-y-16 md:space-y-24 mx-auto">
      <Header title="About Me" description="Little Brief About Myself" />
      <div className="w-full h-[0px] border border-neutral-400"></div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2 left-[42px] top-0 text-white text-[80px] font-bold font-['Syne'] leading-[84px]">
          My mission is to make design easier.
        </div>
        <div className="md:w-1/2 left-[612px] top-[18px] text-neutral-400 text-[21px] font-semibold font-['Open Sans'] leading-[39px]">
          Create custom Designs with AARONN that converts more visitors than any
          website. With lots of unique design, you can easily select a logo
          without hassle. Create custom landing logos with AARONN that converts
          more visitors than any website. With lots of revisions, you can easily
          build a logo without porbolem.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <div className="min-h-[300px] max-h-[800px] ratio-4x3 max-w-[1167px] relative">
          <Image
            className="w-full h-full object-cover"
            src="/images/about-me.png"
            alt="about-me"
            width={1167}
            height={977}
          />
          <div className="w-[55px] h-[178px] left-[-27.5px] top-0 absolute rounded-[30px] border border-orange-400" />
        </div>
        <div className="min-h-[300px] max-h-[800px] ratio-4x3 max-w-[1167px] relative">
          <Image
            className="w-full h-full object-cover"
            src="/images/about-me.png"
            alt="about-me"
            width={1167}
            height={977}
          />
          <div className="w-[178px] h-[55px] right-0 bottom-[-27.5px] absolute rounded-[30px] border border-orange-400" />
        </div>
      </div>
    </div>
  );
}
