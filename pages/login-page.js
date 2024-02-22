const LoginPage = () => {
  return (
    <div className="w-full relative bg-azure-100 h-[1090px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[0px_10px] text-left text-11xl text-white font-inika">
      <div className="h-[388px] w-[395px] absolute my-0 mx-[!important] top-[246px] left-[14px] rounded-xl bg-gray overflow-hidden shrink-0 hidden z-[0] lg:hidden md:flex">
        <b className="absolute top-[24px] left-[158px]">Login</b>
        <div className="absolute top-[101px] left-[27px] rounded-xl bg-azure-200 shadow-[0px_0px_0px_3px_#e6fcfa] w-[336px] h-[46px] overflow-hidden">
          <input
            className="[border:none] [outline:none] font-inika text-xl bg-[transparent] absolute top-[10px] left-[20px] text-white text-left"
            placeholder="Username"
            type="text"
          />
        </div>
        <div className="absolute top-[191px] left-[27px] rounded-xl bg-azure-200 shadow-[0px_0px_0px_3px_#e6fcfa] w-[336px] h-[49px] overflow-hidden">
          <input
            className="[border:none] [outline:none] font-inika text-xl bg-[transparent] absolute top-[10px] left-[20px] text-white text-left"
            placeholder="Password"
            type="password"
          />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-azure-200 absolute top-[294px] left-[95px] rounded-3xs shadow-[0px_0px_0px_3px_#e6fcfa] w-[199px] h-[45px] overflow-hidden">
          <b className="absolute top-[6px] left-[67px] text-6xl font-inika text-white text-left">
            Login
          </b>
        </button>
      </div>
      <div className="w-[737px] my-0 mx-[!important] absolute top-[226px] left-[582px] flex flex-col items-start justify-center gap-[66px_0px] z-[1] lg:items-end lg:justify-center lg:pr-[390px] lg:box-border md:hidden">
        <div className="w-[605px] relative h-[483px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-gray w-[605px] h-[483px] overflow-hidden">
            <b className="absolute top-[41px] left-[248px]">Login</b>
            <div className="absolute top-[253px] left-[27px] rounded-xl bg-azure-200 shadow-[0px_0px_0px_3px_#e6fcfa] w-[552px] h-[58px] overflow-hidden">
              <input
                className="[border:none] [outline:none] font-inika text-11xl bg-[transparent] absolute top-[10px] left-[20px] text-white text-left"
                placeholder="Password"
                type="password"
              />
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-azure-200 absolute top-[368px] left-[158px] rounded-xl shadow-[0px_0px_0px_3px_#e6fcfa] w-[289px] h-[58px] overflow-hidden">
              <b className="absolute top-[9px] left-[105px] text-11xl font-inika text-white text-left">
                Login
              </b>
            </button>
          </div>
          <div className="absolute top-[125px] left-[27px] rounded-xl bg-azure-200 shadow-[0px_0px_0px_3px_#e6fcfa] w-[552px] h-[58px] overflow-hidden">
            <input
              className="[border:none] [outline:none] font-mixed text-11xl bg-[transparent] absolute top-[10px] left-[20px] text-white text-left"
              placeholder="Username "
              type="text"
            />
          </div>
        </div>
        <div className="w-[100px] relative h-[100px] overflow-hidden shrink-0" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[991px] left-[16px] flex flex-col items-center justify-start gap-[22px_0px] z-[2] text-mini text-black">
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

export default LoginPage;
