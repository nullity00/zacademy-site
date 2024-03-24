import styled from "styled-components";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import logo from "./logo.json";
import Typewriter from "typewriter-effect";

export const GradientWord = styled.span`
  background: linear-gradient(360deg, #22c55e -16.67%, #39E180 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

function HeroSection() {
  return (
    <div className="h-full relative sm:my-16">
      <div className="grid grid-cols-5 sm:flex sm:flex-col ml-40 sm:mx-6 text-left sm:text-center items-left">
        <div className="sm:my-0 md:hidden lg:hidden">
          <Lottie animationData={logo}/>
        </div>
        <div className="col-span-2  flex flex-col py-4 my-40 sm:mb-0 sm:mt-10">
          <h1 className="lg:leading-normal lg:text-7xl sm:text-4xl font-bold">
            Your Shield in the <GradientWord>ZK</GradientWord> realm
          </h1>
          <h2 className="text-left sm:text-center my-4 text-zinc-500">
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
        <div className="col-span-3 my-20 sm:hidden">
          <Lottie animationData={logo}/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
