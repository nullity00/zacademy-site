/* eslint-disable @next/next/no-img-element */
import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";
import Image from "next/image";

export default function Residents() {
  return (
    <>
      <div className="flex flex-row sm:flex-col items-center my-16 justify-between sm:text-center">
        <div className="flex flex-col">
          <HyperText
            className="lg:text-4xl text-3xl font-bold sm:text-center"
            text="ZK & Smart Contract Expertise"
          />
          <img
            alt=""
            src="./illustrations/code.svg"
            className="h-[8rem] md:hidden lg:hidden"
          />
          <p className="text-zinc-500 mb-8 sm:text-justify">
            <br />
            Get your codebase audited by our top-tier resident auditors
            {/* <br />
            <br />
            → Get your codebase audited by our top-tier resident auditors
            <br />
            → Get your codebase audited by our top-tier resident auditors.
            <br />
            <br /> */}
          </p>
          <Link href={"/contact-us"}>
            <button className="px-8 py-3 sm:w-full rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Get an Audit
            </button>
          </Link>
        </div>
        <img
          alt=""
          src="./illustrations/hands out of laptop.svg"
          className="h-[14rem] sm:hidden"
        />
      </div>
    </>
  );
}
