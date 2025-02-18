import Image from "next/image";
import React from "react";
import { Images } from "../../../public/exporter";
import { bebasNeue } from "@/font/font";

const AboutSection = () => {
  return (
    <section className="w-full px-20 py-[124px] flex items-center">
      <div className="relative w-1/2">
        <Image
          src={Images.AboutSection}
          alt="about-image"
          className=" h-[656px] rounded-[4px_4px_4px_80px] "
        />
      </div>
      <div className="py-10 px-6 absolute right-0 rounded shadow-aboutBox w-[48%] bg-background mr-20 flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-4">
          <h1 className={`${bebasNeue.className} text-text_48`}>ABOUT</h1>
          <p className="text-text_20 ">Our team specializes in many aspects of real estate, from buying and selling to developing and marketing properties. With over 20 years of combined experience and knowledge, we can help provide you with a stress-free experience and get your home sold for top dollars within the best amount of time.</p>
          <p className="text-text_20 -mt-1">Our team specializes in many aspects of real estate, from buying and selling to developing and marketing properties. With over 20 years of combined experience and knowledge, we can help provide you with a stress-free experience and get your home sold for top dollars within the best amount of time.</p>
        </div>
        <div>
          <button className="text-primary border border-primary rounded py-4 px-12">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
