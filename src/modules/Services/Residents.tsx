import { Link } from "react-router-dom";

export default function Residents() {
  return (
    <>
      <div className="grid grid-cols-2 sm:flex sm:flex-col sm:align-center gap-4 lg:my-32 my-16 mx-6 text-justify sm:text-center">
        <div className="col-span-1 mr-10 sm:mr-0 sm:flex sm:flex-col">
          <h1 className="lg:text-5xl text-3xl font-bold lg:leading-normal">
            Audit By Residents
          </h1>
          <img
            src="./illustrations/code.svg"
            className="h-[10rem] mt-8 md:hidden lg:hidden"
          />
          <p className="text-zinc-500 mb-8 sm:text-justify">
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            consequuntur impedit fugiat quo vitae? Doloremque dolores delectus
            aperiam eaque odio placeat ipsa officia, error cum. Ad aspernatur
            accusamus quae molestias?
            <br />
          </p>
          <Link to={"/contact-us"}>
            <button className="px-8 py-3 sm:w-full rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Get a Quote
            </button>
          </Link>
        </div>
        <img
          src="./illustrations/hands out of laptop.svg"
          className="h-[15rem] col-span-1 mt-8 sm:hidden"
        />
      </div>
    </>
  );
}
