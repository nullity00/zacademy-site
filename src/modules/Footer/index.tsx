export default function Footer() {
  return (
    <div className="h-full flex flex-col bg-gray-100 justify-center p-16 items-center relative">
      <img src="/logo.svg" className="h-[5rem]" />
      <div className="text-md text-zinc-600 flex flex-row flex-wrap justify-center gap-8 my-10 z-20">
        <a href="https://twitter.com/zAcademyDAO">
          <img src="twitter.png" width="25" alt="Twitter"></img>
        </a>
        <a href="https://github.com/zAcademy-Residents">
          <img src="github.png" width="25" alt="Github"></img>
        </a>
        <a href="https://discord.gg/xd4j4pePPm">
          <img src="discord.png" width="25" alt="Discord"></img>
        </a>
        {/* <a href="https://mirror.xyz/chaks.eth/us5rOm1jSsvmvqBOmef_SZSP6zzbNeo7ay-_DkacC64">
          <p className="hover:text-emeraldlight">Mirror</p>
        </a> */}
        <a href="https://explorer.gitcoin.co/#/round/10/0x2871742b184633f8dc8546c6301cbc209945033e/0x2871742b184633f8dc8546c6301cbc209945033e-229">
          <img src="gitcoin.png" width="25" alt="Gitcoin"></img>
        </a>
        <a href="https://snapshot.org/">
          <img src="snapshot.png" width="25" alt="Snapshot"></img>
        </a>
        <a href="https://www.youtube.com/@zAcademyDAO">
          <img src="youtube.png" width="25" alt="Youtube"></img>
        </a>
      </div>
      <p className="text-sm text-zinc-500">
        Copyright © 2024 zAcademy. All rights reserved.
      </p>
    </div>
  );
}

// Footer.tsx

/*import React from 'react';
import { FaTwitter, FaFacebook, FaDiscord, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-6">
          <a href="https://twitter.com/codewithfaraz" target="_blank" rel="noreferrer">
            <FaTwitter className="h-6 w-6 hover:text-blue-400" />
          </a>
          <a href="https://facebook.com/codewithfaraz" target="_blank" rel="noreferrer">
            <FaFacebook className="h-6 w-6 hover:text-blue-600" />
          </a>
          <a href="https://www.instagram.com/codewithfaraz" target="_blank" rel="noreferrer">
            <FaDiscord className="h-6 w-6 hover:text-blue-600" />
          </a>
          <a href="https://github.com/codewithfaraz" target="_blank" rel="noreferrer">
            <FaGithub className="h-6 w-6 hover:text-gray-600" />
          </a>
          <a href="https://www.youtube.com/@codewithfaraz" target="_blank" rel="noreferrer">
            <FaYoutube className="h-6 w-6 hover:text-red-600" />
          </a>
        </div>
        <p className="text-xs mt-8 text-gray-400">
          Copyright © 2024 zAcademy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;*/
