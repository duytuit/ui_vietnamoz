"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import PricingBox from "../Pricing/PricingBox";

const Contact = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="mb-8 w-full md:mb-12 lg:mb-16">
          <h1 className="bp-h1 black">
            Get in touch
          </h1>
          <h1 className="bp-h1 bp-h1-grey">
          Reach out to our multilingual and friendly team.
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
              Frequently asked
 <br />
 questions
              </h1>
              <div className="card-line"></div>
              <p className="card-para">
              Advice and answers
from our team
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
                src="/images/contact/email.d27937b9e11001e7dbed.svg"
                alt="video image"
                width={80}
                height={80}
                className="mb-8"
              />
              <h1 className="card-header">
              Email

                <br />
                us
              </h1>
              <div className="card-line"></div>
              <p className="card-para">
              Sales and support
related queries
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
                src="/images/contact/whatsapp-pink.db009cf7a1ce27478844.svg"
                alt="video image"
                width={80}
                height={80}
                className="mb-8"
              />
              <h1 className="card-header">
              connect with

                <br />
                whatsapp
              </h1>
              <div className="card-line"></div>
              <p className="card-para">
              Send us a message
now
              </p>
            </div>
          </PricingBox>
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <div className="card-icon">
              <Image
                src="/images/contact/chat.25b919d9b323a86f4833.svg"
                alt="video image"
                width={80}
                height={80}
                className="mb-8"
              />
              <h1 className="card-header">
              Live
<br />
Chat 
              </h1>
              <div className="card-line"></div>
              <p className="card-para">
              Start a live chat
with our team
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
                src="/images/contact/phone-in-talk.49fa2cbddb261e9f0a94.svg"
                alt="video image"
                width={80}
                height={80}
                className="mb-8"
              />
              <h1 className="card-header">
              Call us

                <br />
                directly
              </h1>
              <div className="card-line"></div>
              <p className="card-para">
              +971 55 4773230
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
                src="/images/contact/deal.58fe5b67cefa7359b3fb.svg"
                alt="video image"
                width={80}
                height={80}
                className="mb-8"
              />
              <h1 className="card-header">
              Travel agents

                <br />
                and corporate
              </h1>
              <div className="card-line"></div>
              <p className="card-para">
              +971 55 4773230
              </p>
              <a href="mailto:sales@VietNamvisa.com">sales@VietNamvisa.com</a>
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
                src="/images/contact/place.ead9787c5ece806ae621.svg"
                alt="video image"
                width={80}
                height={80}
                className="mb-8"
              />
              <h1 className="card-header">
              Offices
                <br />
                Address
              </h1>
              <div className="card-line"></div>
              <p className="card-para">
              501 VietNam Insurance Building
Al Rigga Road
              </p>
            </div>
          </PricingBox>
        </div>
      </div>
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

export default Contact;
