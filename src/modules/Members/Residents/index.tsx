const resident_members = [
    { name: "engn33r", twitter: "https://twitter.com/bl4ckb1rd71" },
    { name: "Nibbler Express", twitter: "" },
    { name: "sjkelleyjr", twitter: "https://twitter.com/nullity00https://twitter.com/sjkelleyjr" },
    { name: "prady", twitter: "https://twitter.com/prady_v" },
    { name: "panda", twitter: "https://twitter.com/pandadfi" },
    { name: "spalen", twitter: "https://github.com/spalen0" }, 
    { name: "HHK", twitter: "https://twitter.com/HHK_ETH" },
    { name: "adriro", twitter: "https://twitter.com/adrianromero" },
    { name: "ljmanini", twitter: "https://twitter.com/ljmanini" },
    { name: "popular", twitter: "https://twitter.com/popular_12345/" },
  ];
  
  export default function Core() {
    return (
      <div className="my-16">
        <h1 className="text-4xl mb-8">Residents</h1>
        <ul
          role="list"
          className="grid grid-cols-3 md:grid-cols-3 gap-4 gap-y-8"
        >
          {resident_members.map((person) => (
            <li key={person.name}>
              <div className="flex flex-row sm:grid items-center gap-x-6">
                <img
                  className="h-11 w-13 rounded-full"
                  src={Math.floor(Math.random()*14).toString()+".png"}
                  alt="Core"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 hover:underline">
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
  