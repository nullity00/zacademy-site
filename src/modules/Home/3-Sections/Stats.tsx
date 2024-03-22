import { Link } from "react-router-dom";

const data = [
  { number: "100+", text: "Fellows" },
  { number: "15+", text: "Projects secured" },
  { number: "6", text: "Cohorts" },
];

export default function Stats() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 my-32 sm:my-16 sm:mx-6 sm:text-center">
        <div className="col-span-1 sm:col-span-3">
          <h1 className="lg:text-5xl sm:text-lg font-bold lg:leading-normal">
            Ama<span className="text-emeraldlight">zzz</span>ing Stats
          </h1>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 mt-12">
            {data.map((item) => {
              return (
                <div className="col-span-1">
                  <h3 className="text-5xl sm:text-3xl font-semibold leading-6">
                    {item.number}
                  </h3>
                  <p className="text-sm font-semibold text-darkgreen mt-3">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-zinc-500 mb-8">
            <br />A significant number of our fellows elevate themselves to
            prominent positions within other firms or embark on independent
            ventures, generating a cascading wave of excellence.
          </p>
          <a href="https://reports.zAcademy.dev/">
            <button className="px-8 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              View Reports
            </button>
          </a>
        </div>
        <div className="col-span-1 sm:col-span-3 ml-20 sm:ml-0">
          <img src="/track record.svg" className="h-[20rem] mt-8" />
        </div>
      </div>
    </>
  );
}
