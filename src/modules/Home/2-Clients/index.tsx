import HyperText from "@/components/ui/hyper-text";
import OrbitingCircles from "../../../components/ui/orbiting-circles";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const clients = [
  { name: "Exit10", logo: "exit10.png", website: "https://exit10.com/" },
  { name: "Vmex", logo: "vmex.png", website: "https://vmex.finance/" },
  {
    name: "Timeless Finance",
    logo: "timelessfi.svg",
    website: "https://timelessfi.com/",
  },
  {
    name: "Manifold Finance",
    logo: "manifold.svg",
    website: "https://manifoldfinance.com/",
  },
  { name: "Rage Trade", logo: "rage.svg", website: "https://ragetrade.io/" },
  { name: "Strike", logo: "strike.svg", website: "https://www.strike.org/" },
  { name: "Inverse", logo: "inverse.svg", website: "https://inverse.finance/" },
  { name: "Ramses", logo: "ramses.svg", website: "https://ramses.exchange/" },
  { name: "vfat", logo: "vfat.svg", website: "https://vfat.io/" },
  { name: "TLX", logo: "tlx.svg", website: "https://tlx.fi/" },
  { name: "Peapods", logo: "peapods.svg", website: "https://peapods.finance/" },
  { name: "Cove", logo: "cove.svg", website: "https://cove.finance/" },
  { name: "Rysk", logo: "rysk.svg", website: "https://www.rysk.finance/" },
  {
    name: "Superfluid",
    logo: "superfluid.svg",
    website: "https://www.superfluid.finance/",
  },
  {
    name: "Get Protocol",
    logo: "get-protocol.svg",
    website: "https://www.get-protocol.io/",
  },
  {
    name: "Llama Pay",
    logo: "llamapay.svg",
    website: "https://llamapay.io/",
  },
  {
    name: "Lamalend",
    logo: "llamalend.svg",
    website: "https://llamalendnft.com/",
  },
  { name: "Temple", logo: "templedao.svg", website: "https://templedao.link/" },

  { name: "Curve", logo: "curve.svg", website: "https://curve.fi/" },
  { name: "Euler", logo: "euler.svg", website: "https://www.euler.finance/" },
  {
    name: "Asymmetry",
    logo: "asymetry.svg",
    website: "https://www.asymmetry.finance/",
  },

  {
    name: "Personae Lab",
    logo: "personaelab.png",
    website: "https://www.personaelabs.xyz/",
  },
  {
    name: "Privacy & Scaling Explorations",
    logo: "pse.png",
    website: "https://pse.dev/en",
  },
  {
    name: "Olumpus DAO",
    logo: "olympus.svg",
    website: "https://www.olympusdao.finance/",
  },
  {
    name: "Nouns DAO",
    logo: "nouns.svg",
    website: "https://nouns.wtf/",
  },
  { name: "Yearn", logo: "yearn.svg", website: "https://yearn.fi/" },
];

export default function ClientSection() {
  return (
    <section className="bg-white m-6">
      <div className="lg:mx-40">
        <HyperText
          className="lg:text-5xl text-3xl font-bold mb-16 sm:text-center"
          text="Clients"
        />
        <OrbitingCirclesDemo />
      </div>
    </section>
  );
}

function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[100vh] flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <TooltipProvider>
        {clients.slice(0, 4).map((client, i) => (
          <OrbitingCircles
            className={
              "size-[30px] border-none bg-transparent hover:cursor-pointer"
            }
            duration={40}
            delay={10 * i}
            radius={50}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={client.website}
                  aria-label={client.name}
                  target="_blank"
                >
                  <img src={"./clients/" + client.logo} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{client.name}</p>
              </TooltipContent>
            </Tooltip>
          </OrbitingCircles>
        ))}
        {clients.slice(4, 10).map((client, i) => (
          <OrbitingCircles
            className={
              "size-[45px] border-none bg-transparent hover:cursor-pointer"
            }
            duration={60}
            delay={10 * i}
            radius={140}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={client.website}
                  aria-label={client.name}
                  target="_blank"
                >
                  <img src={"./clients/" + client.logo} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{client.name}</p>
              </TooltipContent>
            </Tooltip>
          </OrbitingCircles>
        ))}
        {clients.slice(10, 17).map((client, i) => (
          <OrbitingCircles
            className={
              "size-[55px] border-none bg-transparent hover:cursor-pointer"
            }
            duration={70}
            delay={10 * i}
            radius={200}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={client.website}
                  aria-label={client.name}
                  target="_blank"
                >
                  <img src={"./clients/" + client.logo} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{client.name}</p>
              </TooltipContent>
            </Tooltip>
          </OrbitingCircles>
        ))}
        {clients.slice(17, 27).map((client, i) => (
          <OrbitingCircles
            className={
              "size-[65px] border-none bg-transparent hover:cursor-pointer"
            }
            duration={90}
            delay={10 * i}
            radius={300}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={client.website}
                  aria-label={client.name}
                  target="_blank"
                >
                  <img src={"./clients/" + client.logo} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{client.name}</p>
              </TooltipContent>
            </Tooltip>
          </OrbitingCircles>
        ))}
      </TooltipProvider>
    </div>
  );
}
