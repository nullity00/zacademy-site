import Stats from "../modules/Fellowships/Stats";
import Footer from "../modules/Footer";
import Summary from "../modules/Fellowships/Mid";

export default function FellowshipsPage() {
  return (
    <>
      <div className="mx-40 sm:mx-10 h-full relative">
        <Stats />
        <Summary />
      </div>
      <Footer />
    </>
  );
}
