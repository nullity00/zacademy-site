import HyperText from "@/components/ui/hyper-text";

export const About = () => {
  return (
    <div className="lg:mx-80 bg-white text-lg my-16">
      <HyperText className="lg:text-4xl text-3xl font-bold" text="About" />
      <div className="grid grid-cols-2 gap-8 text-zinc-700  mt-8">
        <div className="cols-span-1 ">
          <p className="">
            Electisec is focused on smart contracts and zero-knowledge security:{" "}
            <i className="font-semibold">
              auditing, research, and increasingly tooling.
            </i>
            <br />
            <br />
          </p>
          <p className="">
            Our core values are: <br />
            <br />
          </p>
          <ul className="list-disc list-inside font-semibold">
            <li>Rigour</li>

            <li>Meritocrarcy</li>

            <li>Labour is Equity</li>

            <li>Public goods are good</li>
          </ul>
          <br />
          <p>
            We launched late 2020 to help make DeFi more secure and have since
            then secured contracts holding billions in TVL. <br /> <br />
          </p>
        </div>
        <div className="cols-span-1">
          <p>
            In 2024, we expanded to zero-knowledge security and research with
            two :<br /> <br />
          </p>
          <ul className="list-disc list-inside text-zinc-500">
            <li>
              The proliferation of ZK-powered networks, dApps, and cross-chain
              middleware.
            </li>
            <li>
              The increasing role of ZK in hardening Web2 with primitives such
              as zkEmail and MP-TLS ("zkTLS").
            </li>
            <li>The SNARKification of the Ethereum protocol.</li>
          </ul>
          <br />
          {/* <p>
            In the past three years, we have <br />
            <br />
          </p> */}
          <p>
            Our expansion in ZK Security was accelerated by a grant from the{" "}
            <a
              className="hover:underline font-bold duration-700 text-darkgreen"
              href="https://x.com/electisec/status/1787559678026948811"
            >
              Ethereum Foundation
            </a>{" "}
            for which we are grateful.
          </p>
        </div>
      </div>
    </div>
  );
};
