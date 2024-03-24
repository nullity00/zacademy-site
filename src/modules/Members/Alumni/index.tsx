const alumni_members = [
  { name: "devtooligan", twitter: "https://twitter.com/devtooligan" },
  { name: "stermi", twitter: "https://twitter.com/StErMi" },
  { name: "peep", twitter: "https://twitter.com/XianganH" },
  { name: "B Samuels", twitter: "https://twitter.com/thebensams" },
  { name: "Usmann", twitter: "https://twitter.com/usmannk" },
  { name: "blockdev", twitter: "https://twitter.com/blockdeveth" },

];

export default function Alumni() {
  return (
    <div className="my-16">
      <h1 className="text-4xl mb-8">Alumni Residents</h1>
      <ul
        role="list"
        className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8"
      >
        {alumni_members.map((person) => (
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