import Image from "next/image";
import Hero from "@/app/components/Home/Hero";
import ServicesPreview from "@/app/components/Home/ServicesPreview";
import WhyChooseUs from "@/app/components/Home/WhyChooseUs";
import Contact from "@/app/components/Home/Contact";

export default function Home() {
  return (
    <>
    <Hero />
    <ServicesPreview />
    <WhyChooseUs />
    <Contact />
    </>
  );
}
