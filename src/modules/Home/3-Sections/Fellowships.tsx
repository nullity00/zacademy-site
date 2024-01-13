import { Container } from "./Integrations";

export default function Fellowships() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 my-12">

        <div className="col-span-1">
          <img src="/hands on shield.svg" className="h-[20rem] mt-4" />
        </div>
        <div className="col-span-1 mr-10">
          <h1 className="lg:text-3xl font-bold lg:leading-normal"> Our Fellowships: <br/> The Trial by Fire Saga </h1>
          <p className="text-zinc-500 mb-8">
          <br />
          Applicants flood in, seeking to join our ranks, 
          and those selected undergo a rigorous trial-by-fire auditing program, 
          shadowing alongside resident auditors, codebase developers, and esteemed guest auditors.
          <br /> <br />

          Each resident auditor originates from one of these fellowships, 
          solidifying a meritocracy that thrives on community involvement, 
          where auditors are cultivated rather than simply hired. 
          </p>
          <h2 className="text-emeraldlight text-xl hover:text-darkgreen hover:underline underline-offset-2 duration-700">
            Zero Knowledge Fellowship
          </h2>
          <h2 className="text-emeraldlight text-xl hover:text-darkgreen hover:underline underline-offset-2 duration-700">
            Smart Contract Fellowship
          </h2>
        </div>
      </div>
    </>
  );
}