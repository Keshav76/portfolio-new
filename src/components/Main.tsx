import Computer from "./Computer";

const Main = () => {
  return (
    <div
      id="home"
      className="relative w-full h-[calc(100vh-48px)] bg-[url('./src/assets/herobg.png')] bg-cover bg-no-repeat"
    >
      {/* Name */}
      <div className="flex px-10 md:py-10 py-4 gap-4">
        <div className="flex flex-col items-center">
          <div className="rounded-full h-4 w-4 bg-shiny"></div>
          <div className="h-40 w-[3px] violet-gradient"></div>
        </div>
        <div>
          <div className="relative font-extrabold text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I am{" "}
            <span className="absolute ml-3 text-transparent text-stroke">
              Keshav
            </span>
            <span className="absolute ml-3 text-shiny bg">Keshav</span>
          </div>
          <div className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            I am a Full Stack Web Developer
          </div>
        </div>
      </div>

      {/* Computer */}
      <div className="absolute w-full h-full top-0">
        <Computer />
      </div>
      <div className="absolute w-full bottom-2 flex justify-center items-center">
        <a href="#about">
          <div className="h-12 w-6 rounded-full border-white border-2 py-1 flex justify-center">
            <div className="w-3 h-3 bg-white rounded-full  animate-[updown_1s_ease-in-out_0s_infinite_alternate]"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Main;
