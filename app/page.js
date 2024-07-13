import Image from "next/image";
import Services from "./components/Services";
import Ads from "./components/Ads";
import ServicesSection from "./components/ServicesSection";
import Honeymoon from "./components/Honeymoon";
import ResortBooking from "./components/ResortBooking";

export default function Home() {
  return (
    <div>
      <Services />
      <Ads />
      <ServicesSection />
      <Honeymoon />
      <ResortBooking />
    </div>
  );
}
