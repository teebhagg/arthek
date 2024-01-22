// Import necessary libraries
import React from "react";
import NavLink from "./navlinks";
import { Drawer } from "./drawer";

// NavigationBar Component
export const NavigationBar: React.FC = () => {
  return (
    <div className="max-w-7xl w-full p-6 mx-auto flex items-center justify-between">
      {/* Navigation items */}
      <div id="logo" className="text-3xl text-white">
        Arthek
      </div>
      <div className="hidden md:flex">
        <NavLink />
      </div>
      <div className="flex md:hidden">
        <Drawer />
      </div>
    </div>
  );
};

// Export the NavigationBar Component
export default NavigationBar;
