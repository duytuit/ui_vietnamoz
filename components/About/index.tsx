"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import PricingBox from "../Pricing/PricingBox";

const About = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="mb-8 w-full md:mb-12 lg:mb-16">
          <h1 className="bp-h1 black">About VietNamvisa.com</h1>
          <h1 className="bp-h1 bp-h1-grey">
          Our mission is to build the future of Travel & Toursim.
          </h1>
          <div className="flex justify-center">
            <div className="default-content-line"></div>
          </div>
        </div>
        <div className="mb-8 w-full md:mb-12 lg:mb-16">
          <p className="paragraph">
            Fast, secure and transparent - we’ll take care of your visas needs.
            Using a unique combination of cutting edge technology and visa
            experts, travellers can be sure they are getting the best experience
            with us. Whether you’re applying for the first-time, reapplying or
            simply renewing, we are here for you - it’s no surprise that 4 out
            of 5 people are unhappy with traditional travel agencies. <br />
            We’ll be with you every step of the way, when you apply with us.
            You’ll have a dedicated team of experts who will keep you updated
            with the progress of your application from start to finish, and will
            always be on the end of the phone or live chat to answer your
            questions.
            <br />
            We’re a group of designers, engineers and travel experts with a
            really big idea.VietNamvisa.com is the first step towards the journey
            of your best holiday experience in not only VietNam but the
            world-over.
            <br />
            We are registered here in VietNam since 2009 initially as online
            service provider under the name of BLOX Communications LLC. Now that
            we have serviced over half a million customers worldwide we think
            its about time to expand our services towards other Travel and
            Tourism related services (watch this space). <br />
            VietNamvisa.com is part of World Tours LLC. and are we building the
            future of travel and tourism. <br />‍<br />
            Were here to help make your holidays more meaningful and more
            enjoyable. Have a question?
            <a
              className="bp-link"
              href="mailto:support@VietNamvisa.com"
              target="blank"
            >
              Write to us
            </a>
            wed love to hear from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
