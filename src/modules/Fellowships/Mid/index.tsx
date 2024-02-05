export default function Summary() {
  return (
    <div className="my-16 grid grid-cols-5">
      <div className="col-span-3">
        <h2 className="text-4xl font-bold mb-8">Choose your hard</h2>
        <ul className="text-darkgreen text-2xl flex flex-col gap-4 list-disc list-inside">
          <li className="hover:text-emeraldlight hover:cursor-pointer duration-700">
            Smart Contract Fellowship
          </li>
          <li className="hover:text-emeraldlight hover:cursor-pointer duration-700">
            Zero Knowledge Fellowship
          </li>
          <li className="hover:text-emeraldlight hover:cursor-pointer duration-700">
            Guest Auditor Program
          </li>

        </ul>
      </div>
      <div className="col-span-2 flex flex-row gap-8 p-8 items-center rounded-2xl bg-[#E8FFF8]">
        <img src="/bulb.svg" className="h-[8rem]" />
        <p className="text-darkgreen text-sm">
          If you think our program is too advanced for you now, fear not, you
          can still join after going through an introductory program such as
          Secureum. If you prefer to fly solo, you can bootstrap yourself and
          hunt for bounties on Immunefi. Then, come back and apply, we would
          love to boost your progress to an advanced level.
        </p>
      </div>
    </div>
  );
}
