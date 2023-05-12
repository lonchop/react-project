// import { hospitalImg } from ".././assets/hospital.jpg";

export default function Hero() {
  return (
    <div className="w-full h-screen">

      <div className="flex justify-center items-center w-full h-[160px]">
        <h1 className="text-[#FF0000] text-[4rem] font-bold">
          Mom´s Day Special!
        </h1>
      </div>

      <div className="absolute h-screen w-full rounded-[2px] bg-cover bg-hero-2 opacity-60"></div>

      <div className="absolute h-screen w-full flex flex-col justify-center lg:justify-start">

        <div className="w-[100%] pl-[160px]">
          <h2 className="mt-[100px] text-[4rem] font-light text-black lg:text-[5rem]">
            FIRST CLASS
          </h2>

          <div className="w-[320px] h-[200px] bg-[#32B5FF] flex items-center">
            <p className="text-[4rem] text-black karla font-bold text-center">
              FLORIDA PLASTIC SURGERY
            </p>
          </div>

          <div className="w-[280px] h-[50px] bg-[#32B5FF] mt-[180px] flex justify-center items-center">
            <p className="text-[3rem] text-black font-bold">GET STARTED</p>
          </div>
        </div>
      </div>
    </div>
  );
}
