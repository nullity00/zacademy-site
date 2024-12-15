import HyperText from "@/components/ui/hyper-text";
import { Link } from "react-router-dom";

export default function Fellows() {
  return (
    <>
      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-4 my-32 md:my-16 sm:my-16 sm:mx-6 md:mx-6 text-justify">
        <div className="col-span-1 sm:hidden">
          <img
            src="./illustrations/hands on shield.svg"
            className="h-[24rem] md:h-[20rem] mt-8"
          />
        </div>
        <div className="col-span-1 sm:flex sm:flex-col sm:align-center">
          <HyperText
            className="lg:text-5xl text-3xl font-bold sm:text-center"
            text="Audit By Fellows"
          />
          <img
            src="./illustrations/hands on shield.svg"
            className="h-[24rem] sm:h-[16rem] mt-8 lg:hidden md:hidden"
          />
          <p className="text-zinc-500 mb-8">
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            inventore rerum aspernatur corporis, deserunt, itaque optio quis
            beatae numquam aperiam enim suscipit laboriosam sit, unde quas!
            <br />
            <br />
            Quas, porro. Ex, deserunt! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quasi et eius tempore alias quae temporibus modi,
            ipsam voluptates, ducimus labore, doloremque cum minus maiores ipsa.
            Corporis accusantium rerum beatae necessitatibus.
          </p>
          <Link to={"/contact-us"}>
            <button className="px-8 py-3 rounded-xl sm:w-full text-md sm:text-sm text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Start your Audit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
