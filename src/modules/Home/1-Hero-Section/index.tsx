import styled from "styled-components";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export const GradientWord = styled.span`
  background: linear-gradient(360deg, #22c55e -16.67%, #39E180 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

function HeroSection() {
  return (
    <div className="h-full relative">
      <div className="lg:my-40 lg:mx-40 md:my-12 sm:my-12 flex flex-row justify-between text-left items-left z-20">
        <div className="flex flex-col py-4 mb-10">
          <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-7xl md:text-4xl sm:text-4xl font-bold z-30">
            Your Shield in <br/> the <GradientWord>Crypto</GradientWord> realm
          </h1>
          <h2 className="text-left lg:w-3/5 sm:w-4/5 md:4/5 my-4 text-zinc-500">
            Don’t let a soundness bug rekt your protocol
          </h2>
          <Link to={"/fellowships"}>
            <button
              className="px-8 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700"
            >
              Explore Fellowships
            </button>
          </Link>
        </div>
        <div>
          <img src="/hero.png" className="h-[20rem]" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
