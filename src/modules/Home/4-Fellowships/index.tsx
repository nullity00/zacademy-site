import { cn } from "@/lib/utils";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import HyperText from "@/components/ui/hyper-text";

const features = [
  {
    name: "Smart Contract Fellowship",
    description:
      "4-6 week program to audit pre-production or in-production codebases alongside our residents, guest auditors, and mentors",
    href: "/fellowships",
    cta: "Apply",
    className: "col-span-4 lg:col-span-2",
    background: (
      <>
        <img
          src="./illustrations/sc.svg"
          className="h-[10rem] absolute top-0 left-10 origin-top transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
  {
    name: "ZK Fellowship",
    description:
      "Duration depends on the codebase. Includes retreat sessions with leading experts in the field, office hours with devs and/or our residents.",
    href: "/fellowships",
    cta: "Apply",
    className: "col-span-4 lg:col-span-2",
    background: (
      <>
        <img
          src="./illustrations/rust-window.svg"
          className="h-[12rem] absolute left-0 top-0 origin-top transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
  {
    name: "Guest Auditor Program",
    description:
      "Seasoned experts deliver exhaustive architectural and code reviews",
    href: "/fellowships",
    cta: "Apply",
    className: "col-span-4 lg:col-span-1",
    background: (
      <>
        <img
          src="./illustrations/fist-bump.svg"
          className="h-[8rem] absolute left-0 top-0 origin-top transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
];

export default function Fellowships() {
  return (
    <div className="h-full flex flex-col my-32 md:my-16 sm:my-16 sm:mx-6 md:mx-6 lg:mx-48 ">
      <HyperText
        className="lg:text-5xl text-3xl font-bold mb-16 sm:text-center"
        text="Trial By Fire Fellowships"
      />
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
