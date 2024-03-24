const fellows_april2022 = [
  { name: "alex lau", twitter: "" },
  { name: "bastien guyonnet", twitter: "" },
  { name: "eagle eyewatch", twitter: "" },
  { name: "j montenegro*", twitter: "" },
  { name: "oliver chalk", twitter: "" },
  { name: "peep*", twitter: "" },
  { name: "saran g parikh", twitter: "" },
  { name: "sjkelleyjr*", twitter: "" },
  { name: "smoothbot", twitter: "" },
  { name: "stermi", twitter: "" },
  { name: "zokunei", twitter: "" },


];

export default function April2022() {
  return (
    <div className="my-16">
      <h2 className="text-xl mb-8">Block 2 - April 2022</h2>

      <ul
        role="list"
        className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8"
      >
        {fellows_april2022.map((person) => (
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
