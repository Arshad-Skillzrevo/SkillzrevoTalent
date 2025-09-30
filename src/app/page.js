import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CompanyIntro from "./components/CompanyIntro";
import ServicesCards from "./components/ServicesCard";
// import IndustriesSlider from "./components/IndustriesTabs";
import IndustriesTabs from "./components/IndustriesTabs";
import WhyChooseUs from "./components/WhyChooseUs";
import ClientReviews from "./components/ClientReviews";
import FlexibleEngagement from "./components/FlexibleEngagement";
import HiringProcess from "./components/HiringProcess";
import FAQAccordion from "./components/FAQAccordion";
import Blog from "./components/Blog";
import CallToActionSection from "./components/CallToActionSection";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <CompanyIntro/>
    <ServicesCards/>
    <IndustriesTabs/>
    <WhyChooseUs/>
    <FlexibleEngagement/>
    <ClientReviews/>
    <HiringProcess/>
    <CallToActionSection/>
    <Blog/>
    <FAQAccordion/>
    </>
  );
}
