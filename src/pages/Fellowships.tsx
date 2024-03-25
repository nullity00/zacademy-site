import Stats from "../modules/Fellowships/Stats";
import Footer from "../modules/Footer";
import Summary from "../modules/Fellowships/Mid";

export default function FellowshipsPage() {
  return (
    <>
      <div className="lg:mx-40 mx-6 h-full relative">
        <Stats />
        <Summary />
      </div>
      <Footer />
    </>
  );
}
