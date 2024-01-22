import Header from "@/components/common/header";
import { ContactForm } from "@/components/contact/contact_form";
import { Contact } from "lucide-react";
import React from "react";

export default function () {
  return (
    <div className="max-w-7xl w-full p-6 space-y-16 md:space-y-24 mx-auto mb-10 md:mb-24">
      <Header title="Contact Me" description="For any Project Knock Us" />
      <div className="w-full h-[0px] border border-neutral-400"></div>
      <div className="space-y-10 md:space-y-24">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2 text-white text-[64px] font-bold font-['Syne']">
            Get in Touch With Us
          </div>
          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>
        <img
          className="ratio-16x9 w-full rounded-2xl"
          src="https://via.placeholder.com/1920x1080"
        />
        <div className="w-full gap-[50px] inline-flex">
          <div className="w-[393px] text-center text-white text-2xl font-bold font-['Syne']">
            Turfbeg Farm, DD8 3XA
          </div>
          <div className="w-[276px] text-center text-white text-2xl font-bold font-['Syne']">
            +447538954884
          </div>
          <div className="w-[357px] text-center text-white text-2xl font-bold font-['Syne']">
            BengyBengyarthur@yahoo.co.uk{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
