import Stats from "../modules/Fellowships/Stats";
import Footer from "../modules/Footer";
import Summary from "../modules/Fellowships/Mid";
import SmartContracts from "../modules/Fellowships/SC";

export default function FellowshipsPage() {
  return (
    <>
      <div className="mx-40 h-full relative">
        <Stats />
        <Summary />
        {/* <SmartContracts /> */}
      </div>
      <Footer />
    </>
  );
}
