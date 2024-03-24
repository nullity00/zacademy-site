const fellows_october2021 = [
  { name: "Amanusk", twitter: "" },
  { name: "bebis", twitter: "" },
  { name: "Bob the Builder", twitter: "" },
  { name: "Carl Farterson", twitter: "" },
  { name: "Dhurv", twitter: "" },
  { name: "Goober", twitter: "" },
  { name: "Invader*", twitter: "" },
  { name: "Nibbler*", twitter: "" },
  { name: "Redbeard", twitter: "" },


];

export default function October2021() {
  return (
    <div className="my-16">
      <h2 className="text-xl mb-8">Block 1 - October 2021</h2>

      <ul
        role="list"
        className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8"
      >
        {fellows_october2021.map((person) => (
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
      <p className="mt-10">*promoted to resident</p>
    </div>
  );
}
