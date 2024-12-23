import HeroSection from "../modules/Home/1-Hero-Section";
import Sections from "../modules/Services";
import PartnerUp from "../modules/Home/7-Contact-Us";
import Footer from "../modules/Footer";
import Partners from "../modules/Home/2-Clients";
import Feedback from "../modules/Home/6-Feedback";
import Services from "@/modules/Home/3-Services";
import Fellowships from "@/modules/Home/4-Fellowships";
import Research from "@/modules/Home/5-Research";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Partners />
      <Services />
      <Fellowships />
      <Research />
      <Feedback />
      {/* <PartnerUp /> */}
      <Footer />
    </>
  );
}
