import React from "react";

// Testimonials Component
const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl w-full p-6 space-y-10 mx-auto relative">
      <div className="flex justify-between items-end">
        <div className="text-white text-[64px] font-bold font-syne">
          Testimonials
        </div>
        <div className="rotate-180 text-[288px] font-extrabold font-syne">
          “
        </div>
      </div>
      <div className="w-[70%] text-neutral-400 text-lg font-normal font-rubik">
        “Aaronn was fantastic to work with from start to finish. We were looking
        for a simple, stand-out logo and he delivered. I tried designing the
        logo myself thinking I wouldn’t need to pay the money for a professional
        graphic designer but I was very wrong. Working with Aaronn was worth
        every penny and was surprisingly affordable! I remember him saying
        simplicity is key to a successful logo and boy he was right. I can’t
        thank Aaronn enough for his effort and professionalism. I would
        recommend him to anyone looking for a design!”
      </div>
      <div className="w-[193.57px] h-[38.72px] left-[5px] top-[381px] text-white text-2xl font-bold font-syne">
        -Martin lee
      </div>
    </div>
  );
};

export default Testimonials;
