import { cn } from "@/lib/utils";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import HyperText from "@/components/ui/hyper-text";

const features = [
  {
    name: "Audit by Residents",
    description:
      "Trio of Top-tier blockchain security specialists who don't just find vulnerabilities—they predict them before they're born",
    href: "/services",
    cta: "Learn more",
    className: "col-span-4 lg:col-span-2",
    background: (
      <>
        <img
          src="./illustrations/hands out of laptop.svg"
          className="h-[10rem] absolute top-0 left-12 origin-top transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />{" "}
      </>
    ),
  },
  {
    name: "Audit by Fellows",
    description:
      "Squad of 25 rising cybersecurity talents brings fresh perspectives and innovative approaches to blockchain security",
    href: "/services",
    cta: "Learn more",
    className: "col-span-4 lg:col-span-2",
    background: (
      <>
        <img
          src="./illustrations/hands on shield.svg"
          className="h-[12rem] absolute left-24 top-0 origin-top transition-all  ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
  {
    name: "Due Diligence report",
    description:
      "Seasoned experts deliver exhaustive architectural and code reviews",
    href: "/services",
    cta: "Learn more",
    className: "col-span-4 lg:col-span-1",
    background: (
      <>
        <img
          src="./illustrations/code.svg"
          className="h-[8rem] absolute left-10 top-10 origin-top transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
];

export default function Services() {
  return (
    <div className="h-full flex flex-col my-32 md:my-16 sm:my-16 sm:mx-6 md:mx-6 lg:mx-48 ">
      <HyperText
        className="lg:text-5xl text-3xl font-bold mb-16 sm:text-center"
        text="Auditing Services"
      />
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
