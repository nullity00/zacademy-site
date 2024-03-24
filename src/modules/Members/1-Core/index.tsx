import { core } from "../Data/core";

export const generateUniqueRandoms = (n: number) => {
  const arr = [];
  while(arr.length < n){
    const r = Math.floor(Math.random() * n) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

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
    <div className="my-16">
      <h1 className="text-4xl mb-8">{title}</h1>
      <ul
        role="list"
        className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8"
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
                <h3 className="text-base sm:text-xs font-semibold leading-7 tracking-tight text-gray-900 hover:underline">
                  <a href={person.twitter} target="_blank">{person.name}</a>
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
