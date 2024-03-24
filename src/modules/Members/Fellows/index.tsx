const fellows = [
  { name: "Oxnagu", twitter: "https://github.com/thogiti" },
  { name: "Bahurum", twitter: "https://github.com/bahurum" },
  { name: "curiousapple", twitter: "https://github.com/abhishekvispute" },
  { name: "Chen Wen Kang", twitter: "https://github.com/cwkang1998" },
  { name: "Igor Line", twitter: "https://github.com/igorline" },
  { name: "lwltea", twitter: "https://github.com/lwltea" },
  { name: "nullity", twitter: "https://github.com/nullity00" },
  { name: "Oba", twitter: "https://github.com/obatirou" },
  { name: "Vincent Owen", twitter: "https://github.com/makluganteng" },
  { name: "parsley", twitter: "https://github.com/bbresearcher" },
  { name: "Rajesh", twitter: "https://github.com/RajeshRk18" },
  { name: "Pratyush Ranjan Tiwari", twitter: "https://github.com/PratyushRT" },
  { name: "Antonio Viggiano", twitter: "https://github.com/aviggiano" },
  { name: "whoismatthewmc", twitter: "https://github.com/whoismatthewmc1" },

];

export default function Fellows() {
  return (
    <div className="my-16">
      <h1 className="text-4xl mb-8">Fellows</h1>
      <h2 className="text-xl mb-8">ZK Block 1 - June 2023</h2>

      <ul
        role="list"
        className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8"
      >
        {fellows.map((person) => (
          <li key={person.name}>
            <div className="flex flex-row sm:flex-col items-center gap-x-6">
              <img
                className="h-11 w-11 sm:h-9 sm:w-9 sm:mb-2 rounded-full items-center"
                src={Math.floor(Math.random()*14).toString()+".png"}
                alt="Core"
              />
              <div>
                <h3 className="text-base sm:text-xs font-semibold leading-7 tracking-tight text-gray-900 hover:underline">
                  <a href={person.twitter}>{person.name}</a>
                </h3>
                {/* <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {person.role}
                </p> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
