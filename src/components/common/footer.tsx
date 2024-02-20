import React from "react";

// Footer
const Footer: React.FC = () => {
  return (
    <div className="w-full bg-[#131313]">
      <div className="max-w-7xl w-full text-center p-6 mx-auto space-y-24 relative">
        <div className="text-center text-orange-400 text-2xl font-bold font-syne">
          Get in Touch With Us
        </div>
        <div className="space-y-5">
          <a
            href="mailto:bengyarthur@yahoo.co.uk"
            className="text-center text-white text-xl md:2xl lg:text-3xl xl:text-5xl font-bold font-syne underline">
            Bengyarthur@yahoo.co.uk
          </a>
          <div className="text-white text-2xl font-bold font-syne">
            Turfbeg Farm, DD8 3XA
          </div>
          <div className="text-white text-2xl font-bold font-syne">
            +447538954884
          </div>
        </div>
        <div className="">
          <div className=""></div>
        </div>
        <div className="border border-neutral-400"></div>
        <div className="text-center text-white text-2xl pb-24 font-bold font-syne">
          © 2023. Ideapeel. All rights reserved.{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
