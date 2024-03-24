import Footer from "../modules/Footer";
import Core from "../modules/Members/Core";
import Residents from "../modules/Members/Residents"
import Alumni from "../modules/Members/Alumni"
import Fellows from "../modules/Members/Fellows"
import April2023 from "../modules/Members/April2023"
import November2022 from "../modules/Members/November2022"
import June2022 from "../modules/Members/June2022"
import April2022 from "../modules/Members/April2022"
import October2021 from "../modules/Members/October2021"
export default function MembersPage() {
  return (
    <>
      <div className="mx-40 sm:mx-10 h-full relative">
        <Core />
        <Residents />
        <Alumni />
        <Fellows />
        <April2023 />
        <November2022 />
        <June2022 />
        <April2022 />
        <October2021 />
      </div>
      <Footer />
    </>
  );
}
