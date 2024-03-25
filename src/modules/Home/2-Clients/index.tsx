export default function ClientSection() {
  const clients = [
    { name: "Yearn", logo: "yearn.png", website: "https://yearn.fi/" },
    {
      name: "Superfluid",
      logo: "superfluid.png",
      website: "https://www.superfluid.finance/",
    },
    {
      name: "Get Protocol",
      logo: "getprotocol.png",
      website: "https://www.get-protocol.io/",
    },
    {
      name: "Llama Pay",
      logo: "llamapay.png",
      website: "https://llamapay.io/",
    },
    {
      name: "Lamalend",
      logo: "lamalend.png",
      website: "https://llamalendnft.com/",
    },
    { name: "Exit10", logo: "exit10.png", website: "https://exit10.com/" },
    { name: "Vmex", logo: "vmex.png", website: "https://vmex.finance/" },
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
  ];

  return (
    <section className="bg-white m-6">
      <div className="lg:mx-40">
        <h2 className="lg:text-5xl text-3xl font-bold mb-10 sm:text-center">
          Our Clients
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 col-span-1 rounded relative hover:bg-opacity-5 duration-700"
            >
              <img
                src={client.logo}
                alt={`${client.name} Logo`}
                className="mx-left sm:mx-auto ml-4 mt-4 mb-4 w-12 h-12 sm:w-8 sm:h-8 opacity-80"
              />

              <p className="text-gray-800 text-left sm:text-center font-bold text-lg sm:text-xs ml-4 sm:ml-0 mb-4">
                {client.name}
              </p>

              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 right-0 text-blue-500 hover:underline mt-2 mr-2 flex items-center"
              >
                <img
                  src="maximize.png"
                  alt="External Link"
                  className="ml-1 w-3 h-3 opacity-50"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
