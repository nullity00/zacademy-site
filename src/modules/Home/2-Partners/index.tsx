import React from 'react';

const ClientSection: React.FC = () => {
  const clients = [
    { name: 'Yearn', logo: 'yearn.png', website: 'https://yearn.fi/' },
    { name: 'Superfluid', logo: 'superfluid.png', website: 'https://www.superfluid.finance/' },
    { name: 'Get Protocol', logo: 'getprotocol.png', website: 'https://www.get-protocol.io/' },
    { name: 'Llama Pay', logo: 'llamapay.png', website: 'https://llamapay.io/' },
    { name: 'Lamalend', logo: 'lamalend.png', website: 'https://llamalendnft.com/' },
    { name: 'Exit10', logo: 'exit10.png', website: 'https://exit10.com/' },
    { name: 'Vmex', logo: 'vmex.png', website: 'https://vmex.finance/' },
    { name: 'Personae Lab', logo: 'personaelab.png', website: 'https://www.personaelabs.xyz/' },
    { name: 'Privacy & Scaling Explorations', logo: 'pse.png', website: 'https://pse.dev/en' },
    
  ];

  return (
    <section className="bg-white my-32 sm:my-16">
      <div className="container mx-auto">
        <h2 className="text-5xl sm:text-3xl font-bold mb-10 text-left">Our Clients</h2>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded relative hover:bg-opacity-5 duration-700"
            >
              {/* Logo */}
              <img
                src={client.logo}
                alt={`${client.name} Logo`}
                className="mx-left sm:mx-auto ml-4 mt-4 mb-4 w-12 h-12 sm:w-8 sm:h-8"
              />
              {/* Client Name */}
              <p className="text-gray-800 text-left sm:text-center font-bold text-lg sm:text-xs ml-4 sm:ml-0 mb-4">{client.name}</p>
              {/* Client Website Link */}
              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 right-0 text-blue-500 hover:underline mt-2 mr-2 flex items-center"
              >
                
                <img
                  src="maximize.png" // Replace with your external link icon
                  alt="External Link"
                  className="ml-1 w-4 h-4"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
