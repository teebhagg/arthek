import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { title, description } = props;
  return (
    <div className="max-w-7xl w-full py-6 mx-auto relative">
      <div className="flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="text-white text-7xl font-bold font-['Syne']">
          {title}
        </div>
        <div className="text-neutral-400 text-lg font-medium font-['Rubik']">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Header;
