import HyperText from "@/components/ui/hyper-text";

const data = [
  { number: "100+", text: "Fellows" },
  { number: "15+", text: "Projects secured" },
  { number: "8", text: "Cohorts" },
];

export default function DueDiligence() {
  return (
    <>
      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-4 my-32 md:my-16 sm:my-16 mx-6 text-justify sm:text-center sm:flex sm:flex-col sm:align-center">
        <div className="col-span-1 sm:flex sm:flex-col sm:align-center">
          <HyperText
            className="lg:text-5xl text-3xl font-bold sm:text-center"
            text="Due Diligence Report"
          />
          {/* <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 mt-12">
            {data.map((item) => {
              return (
                <div className="col-span-1" key={item.number}>
                  <h3 className="lg:text-5xl text-3xl font-semibold leading-6">
                    {item.number}
                  </h3>
                  <p className="text-sm font-semibold text-darkgreen mt-3">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div> */}

          <img
            src="./illustrations/code.svg"
            className="h-[12rem] mt-8 sm:ml-0 lg:hidden md:hidden"
          />
          <p className="text-zinc-500 text-justify mb-8">
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
          <a href="https://reports.electisec.dev/" target="_blank">
            <button className="px-8 py-3 rounded-xl sm:w-full text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Enquire Now
            </button>
          </a>
        </div>
        <div className="col-span-1 ml-20 sm:hidden">
          <img src="./illustrations/code.svg" className="h-[20rem] mt-8" />
        </div>
      </div>
    </>
  );
}
