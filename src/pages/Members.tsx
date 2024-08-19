import Footer from "../modules/Footer";
import Core from "../modules/Members/1-Core";
import {
  SmartContractResident,
  ResidentAlumni,
  ZKResident,
} from "../modules/Members/2-Residents";
import {
  Block1,
  Block2,
  Block3,
  Block4,
  Block5,
  Block6,
  ZBlock1,
  ZBlock2,
} from "../modules/Members/3-Fellows";

export default function MembersPage() {
  return (
    <>
      <div className="lg:mx-40 mx-6 h-full relative">
        <Core />
        <SmartContractResident />
        <ZKResident />
        <ResidentAlumni />
        <h1 className="text-4xl mb-8 sm:text-center">Fellows</h1>
        <div className="flex flex-row sm:flex-col items-center gap-x-6">
          <img
            className={
              "rounded-full items-center h-19 w-11 sm:h-8 sm:w-9 sm:mb-2"
            }
            src={"resident.png"}
            alt="resident"
          />
          <h3
            className={"sm:text-xs font-semibold text-gray-900 hover:underline"}
          >
            Promoted to Resident*
          </h3>
        </div>
        <ZBlock2 />
        <ZBlock1 />
        <Block6 />
        <Block5 />
        <Block4 />
        <Block3 />
        <Block2 />
        <Block1 />
      </div>
      <Footer />
    </>
  );
}
