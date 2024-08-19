export default function Research() {
  return (
    <>
      <div className="grid grid-cols-2 sm:flex sm:flex-col sm:align-center gap-4 lg:my-32 my-16 mx-6 text-justify sm:text-center">
        <img src="/code.svg" className="h-[15rem] col-span-1 mt-8 sm:hidden" />
        <div className="col-span-1 mr-10 sm:mr-0 sm:flex sm:flex-col">
          <h1 className="lg:text-5xl text-3xl font-bold lg:leading-normal">
            What's more ? <br /> Research
          </h1>
          <img src="/code.svg" className="h-[10rem] mt-8 md:hidden lg:hidden" />
          <p className="text-zinc-500 mb-8 sm:text-justify">
            <br />
            In the realm of Innovation, we take pride in our forward-thinking
            approach, evident in our incubation of novel programs such as the ZK
            auditing fellowship, following the successful model of our smart
            contract fellowship.
            <br />
          </p>
          <a target="_blank" href="https://blog.yacademy.dev/">
            <button className="px-8 py-3 sm:w-full rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Read Our Blogs
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
