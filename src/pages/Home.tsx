import HeroSection from "../modules/Home/1-Hero-Section";
import Sections from "../modules/Home/3-Sections";
import PartnerUp from "../modules/Home/5-Contact-Us";
import Footer from "../modules/Footer";
import Partners from "../modules/Home/2-Clients";
import Feedback from "../modules/Home/4-Feedback";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Partners />
      <Sections />
      <Feedback />
      <PartnerUp />
      <Footer />
    </>
  );
}
