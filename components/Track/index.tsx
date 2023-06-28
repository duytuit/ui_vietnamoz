"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import PricingBox from "../Pricing/PricingBox";
import SearchLocation from "../Hero/search";

const Track = () => {

  return (
    <section className="relative pt-16 md:pt-20 lg:pt-28 mb-[120px]">
      <div className="container">
        <div className="mb-8 w-full md:mb-12 lg:mb-16 mt-20">
          <h1 className="bp-h1 black dark:text-white">Track Your Application</h1>
          <h1 className="bp-h1 bp-h1-grey flex justify-center">
          Applications made on weekends (Friday & Saturday) and public holidays may take longer to process.
          </h1>
        </div>
        <SearchLocation />
      </div>
    </section>
  );
};

export default Track;
