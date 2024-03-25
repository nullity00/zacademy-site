import Footer from "../modules/Footer";
import Core from "../modules/Members/1-Core";
import { Resident, ResidentAlumni } from "../modules/Members/2-Residents";
import {
  Block1,
  Block2,
  Block3,
  Block4,
  Block5,
  ZBlock1,
} from "../modules/Members/3-Fellows";

export default function MembersPage() {
  return (
    <>
      <div className="lg:mx-40 mx-6 h-full relative">
        <Core />
        <Resident />
        <ResidentAlumni />
        <h1 className="text-4xl mb-8 sm:text-center">Fellows</h1>
        <ZBlock1 />
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
