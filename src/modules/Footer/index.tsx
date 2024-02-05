export default function Footer() {
  return (
    <div className="h-full flex flex-col bg-gray-100 justify-center p-16 items-center relative">
      <img src="/logo.svg" className="h-[5rem]" />
      <div className="text-md text-zinc-600 flex flex-row flex-wrap justify-center gap-8 my-10 z-20">
        <a href="https://twitter.com/zAcademyDAO">
          <p className="hover:text-emeraldlight">Twitter</p>
        </a>
        <a href="https://github.com/zAcademy-Residents">
          <p className="hover:text-emeraldlight">GitHub</p>
        </a>
        <a href="https://discord.gg/xd4j4pePPm">
          <p className="hover:text-emeraldlight">Discord</p>
        </a>
        {/* <a href="https://mirror.xyz/chaks.eth/us5rOm1jSsvmvqBOmef_SZSP6zzbNeo7ay-_DkacC64">
          <p className="hover:text-emeraldlight">Mirror</p>
        </a> */}
        <a href="https://explorer.gitcoin.co/#/round/10/0x2871742b184633f8dc8546c6301cbc209945033e/0x2871742b184633f8dc8546c6301cbc209945033e-229">
          <p className="hover:text-emeraldlight">Gitcoin</p>
        </a>
        <a href="https://snapshot.org/">
          <p className="hover:text-emeraldlight">Snapshot</p>
        </a>
        <a href="https://www.youtube.com/@zAcademyDAO">
          <p className="hover:text-emeraldlight">Youtube</p>
        </a>
      </div>
      <p className="text-sm text-zinc-500">
        Copyright © 2024 zAcademy. All rights reserved.
      </p>
    </div>
  );
}
