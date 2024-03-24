import { Link } from "react-router-dom";

function ZK() {
  return (
    <div id="zero-knowledge">
      <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-bold mb-8">
        Zero Knowledge Fellowship
      </h1>

      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-16 my-4">
        <div className="col-span-1 flex flex-col gap-8 justify-center">
          <div>
            <h2 className="text-semibold text-xl mb-4">
              Highlights
            </h2>
            <p className="text-zinc-500">
              <ul className="list-disc list-inside">
                <li>
                  The fellowship is 3-4 months, and will includes theory
                  sessions, code overview sessions, retreat sessions with
                  leading experts in the field, office hours with devs and/or
                  our residents, and ad-hoc sessions self-organized by groups of
                  fellows. There are usually also be some quizzes and puzzles
                  throughout.
                </li>
                <br />
                <li>
                  The fellowship leads up to an audit security review report (eg
                  [1] [2]) contributed to collaboratively by everyone involved:
                  fellows, residents, and mentors.
                </li>
                <br />
                <li>
                  No prior ZK knowledge is required, but proof of work else
                  where is.
                </li>
                <br />
                <li>
                  Before applying, please make sure you have read and understood
                  the general structure and guidelines of our programs.
                </li>
                <br />
                <li>
                  You can review our pilot ZK auditing fellowship to: Get a
                  sense of what the fellowship is like and Level up your
                  understanding of ZK tailored to give aspiring auditors the
                  minimum viable theory to get to the code.
                </li>
              </ul>
            </p>
          </div>
          <p>
            Before applying, please make sure you have read and understood the
            general structure and guidelines of our programs.
          </p>
          <Link to={"/fellowships"}>
            <button className="w-1/2 px-8 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Apply
            </button>
          </Link>
        </div>
        <div className="col-span-1 m-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="border col-span-1 rounded-xl p-4">
              <p className="text-xl font-semibold leading-6 text-gray-600">
                Duration
              </p>
              <p className="text-sm font-semibold leading-6 text-darkgreen">
                3-4 months
              </p>
            </div>
            <div className="border col-span-1 rounded-xl p-4">
              <p className="text-xl font-semibold leading-6 text-gray-600">
                Time Commitment
              </p>
              <p className="text-sm font-semibold leading-6 text-darkgreen">
                {">"} 20 hours/week
              </p>
            </div>
          </div>
          <img src="/rust-window.svg" className="py-4 h-[32rem]" />
        </div>
      </div>
    </div>
  );
}

export default ZK;
