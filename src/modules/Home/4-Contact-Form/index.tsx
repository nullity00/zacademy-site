
export default function PartnerUp() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 m-12 p-12 rounded-2xl bg-[#E8FFF8]" id="contactform">
        <div className="col-span-1 mr-12 bg-white rounded-2xl p-16 border-b border-gray-900/10">
          <h1 className="lg:text-4xl md:text-4xl sm:text-4xl font-bold">
            Contact Us
          </h1>
          <div className="pt-4">
            <h2 className="text-zinc-500 mb-2">Your name</h2>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className="w-full border-2 rounded-lg p-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Jane Smith"
            />
          </div>
          <div className="pt-4">
            <h2 className="text-zinc-500 mb-2">Your Telegram Handle</h2>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className="w-full border-2 rounded-lg p-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="@janesmith"
            />
          </div>
          <div className="col-span-full pt-4">
            <h2 className="text-zinc-500 mb-2">More deets please</h2>
            <textarea
              id="about"
              name="about"
              rows={4}
              placeholder="My project involves ..."
              className="w-full rounded-lg border-2 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
          <button type="submit" className="px-8 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
            Submit
          </button>
        </div>
        <div className="col-span-1 ml-4">
          <h1 className="py-8 md:leading-normal sm:leading-normal lg:leading-tight lg:text-6xl md:text-4xl sm:text-4xl text-center font-bold z-30">
            Partner up with <br /> a Protocol Audit
          </h1>
          <img src="/hands out of laptop.svg" className="h-[18rem] m-4" />
        </div>
      </div>
    </>
  );
}
