"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Image from "next/image";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="mb-8 w-full md:mb-12 lg:mb-16">
          <h1 className="bp-h1 black">
            {" "}
            Apply for VietNam Visa with a peace of mind
          </h1>
          <h1 className="bp-h1 bp-h1-grey">
            Application in minutes with 24/7 live customer support
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mb-20">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <div className="card-icon">
              <Image
                src="/images/contact/confirm-icon.7f2f60e032261b7afbaf.svg"
                alt="video image"
                width={80}
                height={80}
                className="mb-8"
              />
              <h1 className="card-header">
                Apply Online <br />
                with Most Secure System
              </h1>
              <div className="card-line"></div>
              <p className="card-para">
                We make it super simple and extra secure to apply for your VN
                visa online. Taking your privacy seriously, the data processing
                is encrypted with industry-leading 256-bit encryption.
              </p>
            </div>
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <div className="card-icon">
              <Image
                src="/images/contact/happy-icon.0f6529da98c8e54b1542.svg"
                alt="video image"
                width={80}
                height={80}
                className="mb-8"
              />
              <h1 className="card-header">
                Exceptional Customer Care
                <br />
                24x7
              </h1>
              <div className="card-line"></div>
              <p className="card-para">
                Our team is always available online to assist with all your
                questions related to VN visa services. You will be guided on
                every single step of your VietNam Visa application.
              </p>
            </div>
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <div className="card-icon">
              <Image
                src="/images/footer/clock-icon.71394ced1664e54940d7.svg"
                alt="video image"
                width={80}
                height={80}
                className="mb-8"
              />
              <h1 className="card-header">
                Express Service
                <br />
                within 12 hours
              </h1>
              <div className="card-line"></div>
              <p className="card-para">
                Forgot to apply for your visa? Worry no more, just apply your
                VietNam visa application with our Express Service and get the
                approval in the next 12 hours*
              </p>
            </div>
          </PricingBox>
        </div>
      </div>
      <div className="bp-text bp-text-centered">* Exclusions apply: Applications made on weekends (Saturday &amp; Sunday) and public holidays may take longer to process.</div>
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
