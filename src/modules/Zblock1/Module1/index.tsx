
import React from 'react';
import { SiGoogleslides, SiGoogledocs } from 'react-icons/si';

function Module1 () {
  const videoData = [
    {
      id: 'xMfrMdfIMP8',
      title: '1. Karp reduction I:',
      description: 'Exact Cover, Knapsack',
      link: 'https://docs.google.com/presentation/d/1rZVI6c9Wo-kU9xKINOMncWywvQHn0952EsMayviHwYM/edit?usp=sharing',
    },
    {
      id: 'jDTRoFfdMio',
      title: '2. Karp reduction II:',
      description: 'SAT, 3COL, Witnesses',
      link: 'https://docs.google.com/presentation/d/1QeC4c3-xxEx27wX4Q-iWcowCdUws1lpufLIjjvlN_BE/edit?usp=sharing',
    },
    {
      id: 'PI_G3IASdiw',
      title: '3. Gödel reduction:',
      description: 'provability',
      link: 'https://docs.google.com/presentation/d/1IerLvER_WEEJIswZB25ACb531D9QrctB-F_FYFNG1ag/edit?usp=sharing',
    },
    {
      id: 'A4Kx0Hd-u2w',
      title: '4. Turing reduction:',
      description: 'universality, decidability',
      link: 'https://docs.google.com/presentation/d/1HWUPQRfwnBYnUHACSud3Bsx8KSFm1C8K/edit?usp=sharing&ouid=115947387247847572737&rtpof=true&sd=true',
    },
    {
      id: '1wJx3VizBww',
      title: '5. Cook reduction:',
      description: 'NP in ZK',
      link: 'https://docs.google.com/presentation/d/1RwEMf4GEepPiOo4B-t27bsf9LgS-JO9zfsw9l3-mO1o/edit?usp=sharing',
    },

  ];

  return (
    <>
      {/* Start Of Summary */}
      <div className="grid grid-cols-2 gap-20 lg:my-16 lg:mx-16">
        <div className="bg-green-100 p-10 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Module 1</h2>
          <a href="#session1" className="text-gray-600 hover:underline">- Sessions</a><br />
          <a href="#discussion1" className="text-gray-600 hover:underline">- Discussion</a><br />
          <a href="#exercise1" className="text-gray-600 hover:underline">- Exercises</a><br />
          <a href="#materials1" className="text-gray-600 hover:underline">- Supplementary Mererials</a>
          <div className="mt-5">
            <h2 className="text-2xl font-semibold mb-2">Module 2</h2>
            <a href="#session" className="text-gray-600 hover:underline">- Sessions</a><br />
            <a href="#session" className="text-gray-600 hover:underline">- Discussion</a><br />
            <a href="#session" className="text-gray-600 hover:underline">- Exercises</a><br />
            <a href="#session" className="text-gray-600 hover:underline">- Supplementary Mererials</a>
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-semibold mb-2">Module 3</h2>
            <a href="#session" className="text-gray-600 hover:underline">- Sessions</a><br />
            <a href="#session" className="text-gray-600 hover:underline">- Discussion</a><br />
            <a href="#session" className="text-gray-600 hover:underline">- Exercises</a><br />
            <a href="#session" className="text-gray-600 hover:underline">- Supplementary Mererials</a>
          </div>
        </div>
        {/* Right Column */}
        <div className="col-span-1">
          {/* Summary */}
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-600 text-justify">
            In the context of cryptography, "zero knowledge" refers to a scenario where one party (the prover) can prove to another party (the verifier) that they possess certain information or knowledge without revealing any details about that information itself. Essentially, in a zero-knowledge interaction, the prover can convince the verifier of the truth of a statement without conveying any additional knowledge beyond the fact that the statement is true.
          </p>
          {/* Additional Text */}
          <p className="mt-4 text-justify">For instance, in a classic example called the "Ali Baba cave problem," one party (the prover) wants to prove to another party (the verifier) that they know the secret password to open a door to a cave without revealing the actual password. Using a zero-knowledge proof, the prover can demonstrate their knowledge of the password by performing a series of actions that only someone who knows the password could perform, without disclosing the password itself.</p>
          <p className="mt-4 text-justify">Zero-knowledge proofs are important in cryptography because they enable secure and private interactions between parties. They have applications in various fields, including authentication protocols, digital signatures, secure multi-party computation, and privacy-preserving transactions. The concept of zero knowledge forms the basis for zero-knowledge proofs, which are cryptographic techniques designed to enable such interactions while preserving confidentiality and privacy.</p>
        </div>
      </div>
      {/* End Of Summary */}

      {/* Start of Youtube Slider */}
      <h1 className="text-5xl font-extrabold lg:mx-16 text-center lg:my-16">Module 1</h1>
      <h1 id="session1" className="text-2xl font-bold lg:mx-16">Session</h1>
      <div className="flex overflow-x-auto space-x-10 lg:my-6 lg:mx-16">
        {videoData.map((video) => (
          <div key={video.id} className="w-64">
            <iframe
              className="w-full h-40 rounded-lg"
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="mt-2">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
              <a href={video.link} target="_blank" rel="noopener noreferrer" className="flex items-center mt-2 text-blue-500">
                <SiGoogleslides className="mr-1" />
                Slides
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* end of Youtube Slider */}

      {/* Start of Discussion */}
      <div className="lg:my-16 lg:mx-16">
        <h1 id="discussion1" className="text-2xl font-bold mb-4">Discussion</h1>
        <a
          href="https://discord.com/invite/rGDvVpqCcK"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Discussion channel: module-1-zk-context
        </a>
      </div>
      {/* End of Discussion */}

      {/* Start of Exercises */}
      <div className="lg:my-16 lg:mx-16">
        <h1 id="exercise1" className="text-2xl font-bold mb-4">Exercises</h1>
        <a
          href="https://docs.google.com/presentation/d/1AOCI3mWXCoP3-xtaYhqmiezcxfl9g8psuOjopk2jxkI/edit?usp=sharing"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Karp reduction exercise
        </a>
        <a
          href="https://discord.com/channels/877252171983360072/1106224361226121288/1112783087106015294"
          className="text-white bg-green-300 p-2 rounded-lg border-4 border-white hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solution
        </a>
        <div className='mt-6'>
        <a
          href="https://docs.google.com/presentation/d/1vrnmFq-IP8svn2aYk_FJwpMwMrGZjgYXQnLXseU8B_A/edit?usp=sharing"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Circom quiz and puzzle
        </a>
        </div>
      </div>
      {/* End of Exercises */}

      {/* Start of Supplimentary Materials */}
      <div className="lg:my-16 lg:mx-16">
        <h1 id="materials1" className="text-2xl font-bold mb-4">Supplimentary Materials</h1>
        <a
          href="https://docs.google.com/presentation/d/1ebxaq9fsBJxOEpEnqaj9vYloNQT82DkAgp2d5JJRI_k/edit?usp=sharing"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Circom startup kit
        </a>
      </div>
      {/* End of Supplimentary Materials */}
    </>
  );
};

export default Module1;
