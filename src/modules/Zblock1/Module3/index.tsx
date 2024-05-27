
import React from 'react';
import { SiGoogleslides, SiGoogledocs } from 'react-icons/si';

function Module3 () {
  const videoData = [
    {
      id: 'jkzfspE1Bng',
      title: '1. Codebase overview:',
      description: 'Part I',
      link: 'https://docs.google.com/presentation/d/1CFGsEU6moOBCTIvXU0Yxg62aD5fZ-d5srf1o5ZaUJIo/edit?usp=sharing',
    },
    {
      id: 'JRANJdUraoM',
      title: '2. Codebase overview:',
      description: 'Part II',
      link: 'https://drive.google.com/drive/u/0/folders/1VmrcYdf0e_7JTB1Zlqo6ekg3H08rlbxL',
    },
    {
      id: 'XXLxkR-QrZk',
      title: '3. Office hour 1',
      description: '',
      link: 'https://github.com/zBlock-1/RLN-audit-report',
    },
    {
      id: 'G0d3BgFCTxM',
      title: '4. Office hour 2',
      description: '',
      link: 'https://docs.google.com/document/d/1vre71efNxszfmU36j-ExQhOuATDCeuzd4Zuht5DKBoY/edit',
    },
    {
      id: '7D1hV_2G8G0',
      title: '5. Audit reports & review',
      description: '',
      link: 'https://github.com/zBlock-1/spartan-ecdsa-audit-report',
    },

  ];

  return (
    <>
      {/* Start of Youtube Slider */}
      <h1 className="text-5xl font-extrabold lg:mx-16 text-center my-16">Module 3</h1>
      <h1 id="session1" className="text-2xl font-bold lg:mx-16">Session</h1>
      <div className="flex sm:flex-col overflow-x-auto lg:space-x-10 sm:space-y-10 my-6 lg:mx-16">
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
      <div className="my-16 lg:mx-16">
        <h1 id="discussion1" className="text-2xl font-bold mb-4">Discussion</h1>
        <a
          href="https://discord.gg/qJuc7TD6VQ"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Discussion channel: module-3-spartan-audit
        </a>
      </div>
      {/* End of Discussion */}

      {/* Start of Quizzes */}
      <div className="my-16 lg:mx-16">
        <h1 id="discussion1" className="text-2xl font-bold mb-4">Quizzes</h1>
        <a
          href="https://hackmd.io/68TlQZFvQOeMZ2mvFl0Abg?view#Session-11"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Quiz 1
        </a>
        <div className="mt-6">
        <a
          href="https://hackmd.io/68TlQZFvQOeMZ2mvFl0Abg?view#Session-21"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Quiz 2
        </a>
        </div>
        <div className="mt-6">
        <a
          href="https://youtu.be/XXLxkR-QrZk"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Solutions
        </a>
        </div>
      </div>
      {/* End of Discussion */}

      {/* Start of Guest Lectures */}
      <div className="my-16 lg:mx-16">
        <h1 id="exercise1" className="text-2xl font-bold mb-4">Guest Lectures</h1>
        <a
          href="https://youtu.be/-SXMd6S0r0I"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          - PLONKish Arithmetization with Pratyush R Tiwari
        </a>
        <a
          href="https://youtu.be/-SXMd6S0r0I"
          className="text-white bg-blue-500 p-2 rounded-lg border-4 border-white hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Recording
        </a>
        <a
          href="https://drive.google.com/drive/u/0/folders/1nDEbHcXO6ttPtyRq46Pe36C3wmtxgLTF"
          className="text-white bg-green-300 p-2 rounded-lg border-4 border-white hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slides
        </a>
        <a
          href="https://drive.google.com/drive/u/0/folders/1nDEbHcXO6ttPtyRq46Pe36C3wmtxgLTF"
          className="text-white bg-green-300 p-2 rounded-lg border-4 border-white hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat
        </a>
      </div>
      {/* End of Guest Lectures */}

      {/* Start of Audit Reports */}
      <div className="my-16 lg:mx-16">
        <h1 id="materials1" className="text-2xl font-bold mb-4">Audit Reports</h1>
        <a
          href="https://github.com/zBlock-1/spartan-ecdsa-audit-report"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Spartan-ECDSA Audit Reports
        </a>
      </div>
      {/* End of Audit Reports */}
    </>
  );
};

export default Module3;
