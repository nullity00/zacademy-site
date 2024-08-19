import { core } from "../Data/core";

export const generateUniqueRandoms = (n: number) => {
  let arr = Array.from({ length: n }, (_, i) => i + 1);

  for (let i = arr.length - 1; i > 0; i--) {
    // Instead of Math.random(), we'll use the current milliseconds to create randomness
    let j = new Date().getMilliseconds() % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  console.log("I'm being called");
  
  return arr;
};

export function Template({
  title,
  members,
}: {
  title: string;
  members: {
    name: string;
    twitter: string;
  }[];
}) {
  const randoms = generateUniqueRandoms(25);
  return (
    <div className="my-24">
      <h1 className="text-4xl mb-12 sm:text-center">{title}</h1>
      <ul
        role="list"
        className="grid lg:grid-cols-3 grid-cols-2 lg:gap-x-72 md:gap-x-32 gap-y-12"
      >
        {members.map((person, i) => (
          <li key={person.name}>
            <div className="flex flex-row sm:flex-col items-center gap-x-6">
              <img
                className="h-11 w-11 sm:h-9 sm:w-9 sm:mb-2 rounded-full items-center"
                src={randoms[i].toString() + ".png"}
                alt={person.name}
              />
              <div>
                <h3 className="sm:text-xs font-semibold text-gray-900 hover:underline">
                  <a href={person.twitter} target="_blank">
                    {person.name}
                  </a>
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Core() {
  return (
    <>
      <Template title={"Core"} members={core} />
    </>
  );
}
