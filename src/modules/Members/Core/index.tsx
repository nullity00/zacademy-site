const core_members = [
  { name: "Ali Atiia", twitter: "https://twitter.com/0xAlizk" },
  { name: "engn33r", twitter: "https://twitter.com/bl4ckb1rd71" },
  { name: "invader", twitter: "https://twitter.com/nullity00" },
  { name: "nullity", twitter: "https://twitter.com/nullity00" },
];

export default function Core() {
  return (
    <div className="my-16">
      <h1 className="text-4xl mb-8">Core</h1>
      <ul
        role="list"
        className="grid grid-cols-3 md:grid-cols-3 gap-4 gap-y-8"
      >
        {core_members.map((person) => (
          <li key={person.name}>
            <div className="flex flex-row sm:grid items-center gap-x-6">
              <img
                className="h-11 w-11 rounded-full"
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
