import Footer from "../modules/Footer";
import Core from "../modules/Members/1-Core";
import { Resident, ResidentAlumni } from "../modules/Members/2-Alumni";
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
      <div className="mx-40 sm:mx-10 h-full relative">
        <Core />
        <Resident />
        <ResidentAlumni />
        <h1 className="text-4xl mb-8">Fellows</h1>
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
