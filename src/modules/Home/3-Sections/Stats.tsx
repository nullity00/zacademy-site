export default function Stats() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 my-12">
        <div className="col-span-1 mr-12">
          <h1 className="lg:text-5xl font-bold lg:leading-normal">
           *Amazzzing* Stats
          </h1>
          <div className="lg:text-2xl mt-8 font-semibold">
            <h2>
              <span className="text-emeraldlight">100+</span> fellows
            </h2>
            <h2>
              <span className="text-emeraldlight">15</span> projects secured
            </h2>
            <h2>
              <span className="text-emeraldlight">6</span> fellowships completed
            </h2>
          </div>
          <p className="text-zinc-500 mb-8">
            <br />A significant number of our fellows elevate themselves to
            prominent positions within other firms or embark on independent
            ventures, generating a cascading wave of excellence.
          </p>
          <h2 className="text-emeraldlight text-xl hover:text-darkgreen hover:underline underline-offset-2 duration-700">
            View our reports
          </h2>
        </div>
        <div className="col-span-1 ml-20">
          <img src="/track record.svg" className="h-[20rem] mt-8" />
        </div>
      </div>
    </>
  );
}
