
import React from 'react';
import { SiGoogleslides, SiGoogledocs } from 'react-icons/si';

function Module2 () {
  const videoData = [
    {
      id: 'nurBnWQPsCY',
      title: '1. Codebase overview',
      description: '',
      link: 'https://docs.google.com/presentation/d/1sQ9vLqSIxe8zNChWxq2jEPv3gtJCn-dtew0m3HOOJ1g/edit#slide=id.p',
    },
    {
      id: 'Y24bhP7QVCA',
      title: '2. Office hour',
      description: '',
      link: 'https://docs.google.com/document/d/1WBOeAGRjZQy-6rm_DzzvRmSweYEcsKhXs5hYzOx11lw/edit',
    },
    {
      id: 'FcLvM-bb3Ds',
      title: '3. Audit report & review',
      description: '',
      link: 'https://github.com/zBlock-1/RLN-audit-report',
    },

  ];

  return (
    <>
      {/* Start of Youtube Slider */}
      <h1 className="text-5xl font-extrabold lg:mx-16 text-center my-16">Module 2</h1>
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
          href="https://discord.gg/Y8ccpfcYmq"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Discussion channel: module-2-rln-audit
        </a>
      </div>
      {/* End of Discussion */}

      {/* Start of Guest Lectures */}
      <div className="my-16 lg:mx-16">
        <h1 id="exercise1" className="text-2xl font-bold mb-4">Guest Lectures</h1>
        <a
          href="https://youtu.be/h_ie8eaPNcM?si=YejDJgOkvgY_CGf3"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          1. Pairing with Lev Soukhanov (Ethereum Foundation)
        </a>
        <a
          href="https://youtu.be/h_ie8eaPNcM?si=YejDJgOkvgY_CGf3"
          className="text-white bg-blue-500 p-2 rounded-lg border-4 border-white hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Recording
        </a>
        <a
          href="https://docs.google.com/presentation/d/1BsA9RhgxBY8H4E8uOvesLptBIL11MaILOEyipfjSXso/edit#slide=id.p"
          className="text-white bg-green-300 p-2 rounded-lg border-4 border-white hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slides
        </a>
        <a
          href="https://docs.google.com/document/d/12z58jwTqZujDNSCkLkLk7blVzPeAgOifaBbewRvO-D0/edit"
          className="text-white bg-green-300 p-2 rounded-lg border-4 border-white hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat
        </a>
        <div className='mt-6'>
        <a
          href="https://youtu.be/Hz_XHfxunck"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          2. Groth16 with Yin Tong (Geometry)
        </a>
        <a
          href="https://youtu.be/Hz_XHfxunck"
          className="text-white bg-blue-500 p-2 rounded-lg border-4 border-white hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Recording
        </a>
        <a
          href="https://docs.google.com/presentation/d/1vYUiNYv8PRI2SVEKC3uz54I475d79E9XxvCWwkC7kPQ/edit#slide=id.p"
          className="text-white bg-green-300 p-2 rounded-lg border-4 border-white hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slides
        </a>
        <a
          href="https://docs.google.com/document/d/1yBDv_zGvZZUAc2OmwVLBMfc4uwBjw68ermzUwMXhFP4/edit"
          className="text-white bg-green-300 p-2 rounded-lg border-4 border-white hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat
        </a>
        </div>
      </div>
      {/* End of Guest Lectures */}

      {/* Start of Audit Reports */}
      <div className="my-16 lg:mx-16">
        <h1 id="materials1" className="text-2xl font-bold mb-4">Audit Reports</h1>
        <a
          href="https://github.com/zBlock-1/RLN-audit-report"
          className="text-blue-500 hover:underline font-extrabold"
          target="_blank"
          rel="noopener noreferrer"
        >
          - RLN Audit Reports
        </a>
      </div>
      {/* End of Audit Reports */}
    </>
  );
};

export default Module2;
