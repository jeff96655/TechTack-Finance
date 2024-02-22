const SignUp = () => {
  return (
    <div className="w-full relative bg-azure-100 h-[1090px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[0px_10px] text-left text-11xl text-white font-inika md:h-[1080px]">
      <div className="h-[465px] w-[395px] absolute my-0 mx-[!important] top-[212px] left-[14px] rounded-xl bg-gray overflow-hidden shrink-0 hidden z-[0] md:flex">
        <b className="absolute top-[30px] left-[143px]">Sign Up</b>
        <div className="absolute top-[101px] left-[27px] rounded-xl bg-azure-200 shadow-[0px_0px_0px_3px_#e6fcfa] w-[336px] h-[46px] overflow-hidden">
          <input
            className="[border:none] [outline:none] font-inika text-xl bg-[transparent] absolute top-[10px] left-[20px] text-white text-left"
            placeholder="Username"
            type="text"
          />
        </div>
        <div className="absolute top-[185px] left-[27px] rounded-xl bg-azure-200 shadow-[0px_0px_0px_3px_#e6fcfa] w-[336px] h-[49px] overflow-hidden">
          <input
            className="[border:none] [outline:none] font-inika text-xl bg-[transparent] absolute top-[10px] left-[20px] text-white text-left"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="absolute top-[266px] left-[27px] rounded-xl bg-azure-200 shadow-[0px_0px_0px_3px_#e6fcfa] w-[336px] h-[49px] overflow-hidden">
          <input
            className="[border:none] [outline:none] font-inika text-xl bg-[transparent] absolute top-[10px] left-[20px] text-white text-left"
            placeholder="Password"
            type="password"
          />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-azure-200 absolute top-[369px] left-[92px] rounded-3xs shadow-[0px_0px_0px_3px_#e6fcfa] w-[199px] h-[45px] overflow-hidden">
          <b className="absolute top-[6px] left-[54px] text-6xl font-inika text-white text-left">
            Sign Up
          </b>
        </button>
      </div>
      <div className="w-[736px] my-0 mx-[!important] absolute top-[178px] left-[595px] h-[851px] flex flex-col items-start justify-center gap-[66px_0px] z-[1] lg:w-0 lg:gap-[66px_0px] lg:items-end lg:justify-center lg:pl-[330px] lg:pr-1 lg:box-border md:w-[1146px]">
        <div className="w-[598px] relative rounded-xl bg-gray h-[594px] overflow-hidden shrink-0">
          <b className="absolute top-[34px] left-[222px]">Sign Up</b>
          <div className="absolute top-[107px] left-[27px] rounded-xl bg-azure-200 shadow-[0px_0px_0px_3px_#e6fcfa] w-[532px] h-[46px] overflow-hidden">
            <input
              className="[border:none] [outline:none] font-inika text-xl bg-[transparent] absolute top-[10px] left-[20px] text-white text-left"
              placeholder="Username"
              type="text"
            />
          </div>
          <div className="absolute top-[201px] left-[26px] rounded-xl bg-azure-200 shadow-[0px_0px_0px_3px_#e6fcfa] w-[533px] h-[49px] overflow-hidden">
            <input
              className="[border:none] [outline:none] font-inika text-xl bg-[transparent] absolute top-[10px] left-[20px] text-white text-left"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="absolute top-[297px] left-[27px] rounded-xl bg-azure-200 shadow-[0px_0px_0px_3px_#e6fcfa] w-[532px] h-[49px] overflow-hidden">
            <input
              className="[border:none] [outline:none] font-inika text-xl bg-[transparent] absolute top-[10px] left-[20px] text-white text-left"
              placeholder="Password"
              type="text"
            />
          </div>
          <div className="absolute top-[431px] left-[199px] rounded-3xs bg-azure-200 shadow-[0px_0px_0px_3px_#e6fcfa] w-[199px] h-[45px] overflow-hidden text-6xl">
            <b className="absolute top-[6px] left-[54px]">Sign Up</b>
          </div>
        </div>
        <div className="w-[25px] relative h-[173px] overflow-hidden shrink-0" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[987px] left-[10px] flex flex-col items-center justify-start gap-[22px_0px] z-[2] text-mini text-black">
        <div className="w-[34px] relative h-[27px] overflow-hidden shrink-0" />
        <div className="w-[272px] relative h-5">
          <img
            className="absolute top-[0px] left-[0px] w-5 h-5 overflow-hidden object-cover"
            alt=""
            src="/frame-85@2x.png"
          />
          <div className="absolute top-[0px] left-[25px] inline-block w-[247px] h-[19px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Copy Right 2024. TechTack Finance
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
