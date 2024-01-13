
import Research from "./Research";
import Stats from "./Stats";
import Fellowships from "./Fellowships";

function Sections() {
  return (
    <div className="h-full flex flex-col m-3 my-8 lg:mx-48">
      <Fellowships />
      <Stats />
      <Research />
    </div>
  );
}

export default Sections;
