import Footer from "../modules/Footer";
import Core from "../modules/Members/Core";
import Residents from "../modules/Members/Residents"

export default function MembersPage() {
  return (
    <>
      <div className="mx-40 sm:mx-10 h-full relative">
        <Core />
        <Residents />
      </div>
      <Footer />
    </>
  );
}
