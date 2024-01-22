import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

interface HeroSectionProps {
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = (props: HeroSectionProps) => {
  const { title } = props;
  return (
    <div className="max-w-7xl w-full p-6 mx-auto flex flex-col items-center justify-center space-y-16">
      {/* Main title */}
      <div className="text-center text-white text-7xl font-bold font-['Syne'] relative">
        <p>
          {title}
        </p>
        <div className="w-52 h-52 z-[-25px] backdrop-blur-sm bg-white opacity-20 absolute rounded-full top-[-30px] right-[-30px] animate-bounce animate-duration-[3000ms]" >
        </div>
      </div>
      <Button className="p-7 bg-orange-400 hover:bg-transparent border-2 border-transparent hover:border-orange-400 rounded-full space-x-5 mx-auto">
        <p className="text-white font-light">Explore works</p>
        <ArrowRightIcon className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default HeroSection;
