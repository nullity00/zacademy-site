import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";
import Image from "next/image";

export default function Fellows() {
  return (
    <>
      <div className="grid grid-cols-2 gap-16 sm:flex-col items-center my-8 justify-between sm:text-center">
        <div className="sm:hidden cols-span-1">
          <img
            alt=""
            src="./illustrations/hands on shield.svg"
            className="h-[20rem] justify-self-center"
          />
        </div>
        <div className="cols-span-1 flex flex-col sm:items-center">
          <HyperText
            className="lg:text-4xl text-3xl font-bold sm:text-center"
            text="Boosted Audits"
          />
          <img
            alt=""
            src="./illustrations/hands on shield.svg"
            className="h-[16rem] mt-8 lg:hidden md:hidden"
          />
          <p className="text-zinc-500 mb-8">
            <br />
            Get 50 additional eyes on your codebase by scheduling your audit
            during our highly competitive fellowships
          </p>
          <Link href={"/contact-us"}>
            <button className="px-8 py-3 rounded-xl sm:w-full text-md sm:text-sm text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Start your Audit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
