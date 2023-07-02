import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact/old_index";
import Features from "@/components/Features";
import Emblem from "@/components/Footer/emblem";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchLocation from "@/components/Hero/search";
import Order from "@/components/Order";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <SearchLocation />
      <Pricing />
      <Emblem/>
    </>
  );
}
