import { useEffect } from "react";
import DesktopPayouts from "../components/desktop-payouts";
import MobilePayouts from "../components/mobile-payouts";
import Header from "../components/header";
import Typewriter from 'typewriter-effect';

const TechtackFinance = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="w-full relative bg-azure-100 h-[2460px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[0px_10px] text-center text-xl text-black font-inika md:h-[2920px]">
      <DesktopPayouts />
      <MobilePayouts />
      <div className="w-[926px] my-0 mx-[!important] absolute top-[301px] left-[0px] flex flex-row items-center justify-center gap-[0px_481px] z-[2] lg:w-[700px] lg:gap-[0px_481px] md:w-[400px] md:items-center md:justify-end">
        <div className="w-[47px] relative h-[100px] overflow-hidden shrink-0" />
        <img
          className="h-[456px] w-[395px] relative object-cover [&.animate]:animate-[20s_linear_0s_infinite_alternate-reverse_both_bounce-top] opacity-[1]"
          alt=""
          src="/ewallet-and-personal-finance-management@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="w-[1031px] my-0 mx-[!important] absolute top-[776px] left-[1px] flex flex-row items-center justify-end gap-[0px_350px] z-[3] lg:w-[950px] md:flex md:w-[400px]">
        <div className="w-12 relative h-[46px] overflow-hidden shrink-0" />
        <div
          className="h-[156px] w-[638px] relative inline-block shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [&.animate]:animate-[2s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-mini md:w-[390px]"
          data-animate-on-scroll
        >
          {" "}
          In a rapidly evolving world of finance, where oportunities abound and
          information flows incessntly. Techtack emerges as a beacon of
          innovation and empowerment for investors of all backgrounds Our
          platform represents a ground breaking paradigm in the realm of
          investment, marrying a cutting-edge technology with a profound
          commitment to your financial well being
        </div>
      </div>
      <div className="w-[967px] my-0 mx-[!important] absolute top-[969px] left-[0px] flex flex-row items-center justify-center gap-[0px_393px] z-[4] lg:w-[800px] lg:items-center lg:justify-end md:w-[400px]">
        <div className="w-[33px] relative h-[100px] overflow-hidden shrink-0" />
        <img
          className="h-[456px] w-[395px] relative object-cover [&.animate]:animate-[20s_linear_0s_infinite_alternate-reverse_both_bounce-top] opacity-[1]"
          alt=""
          src="/artificial-intelligence-in-finance-machine-learning-in-finance@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="w-[832px] my-0 mx-[!important] absolute top-[1413px] left-[0px] flex flex-row items-start justify-center gap-[0px_589px] z-[5] text-left text-16xl font-inknut-antiqua lg:w-[720px] lg:items-start lg:justify-end md:w-[310px]">
        <div className="w-[46px] relative h-[62px] overflow-hidden shrink-0" />
        <div className="relative font-black [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)]">{`PAYOUT’S `}</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2385px] left-[7px] flex flex-col items-center justify-start gap-[22px_0px] z-[6] text-left text-mini md:pt-[450px] md:box-border">
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
      <div className="w-[1080px] my-0 mx-[!important] absolute top-[2131px] left-[2px] flex flex-row items-center justify-center gap-[0px_499px] z-[7] text-6xl lg:w-[600px] md:w-[420px] md:flex-col md:pt-[359px] md:box-border">
        <div className="w-[100px] relative h-[100px] overflow-hidden shrink-0 z-[0]" />
        <div
          className="h-[150px] w-[399px] relative inline-block shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [&.animate]:animate-[2s_linear_0s_1_normal_forwards_fade-in] opacity-[0] z-[1] md:text-xl md:w-[350px]"
          data-animate-on-scroll
        >
          experience the future of investing with Techtack. join us today and
          embark on a journey towards financial prosperity like never before
        </div>
        <div className="w-[387px] my-0 mx-[!important] absolute top-[-288px] left-[0px] hidden flex-col items-center justify-start gap-[40px_0px] z-[2] text-white lg:w-[1200px] lg:gap-[40px_0px] md:flex md:w-[420px]">
          <div
            className="w-[394px] h-[182px] relative rounded-xl [background:linear-gradient(180deg,_#28aa07,_#0a1132)] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <b className="absolute top-[20px] left-[70px]">
              AI-Powered Portfolios
            </b>
            <div className="absolute top-[102px] left-[28px] text-xl inline-block w-[338px]">
              Personalized investments driven by AI and real-time optimization.
            </div>
          </div>
          <div
            className="w-[394px] h-[182px] relative rounded-xl [background:linear-gradient(180deg,_#28aa07,_#0a1132)] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <b className="absolute top-[20px] left-[110px]">Global Markets</b>
            <div className="absolute top-[102px] left-[28px] text-xl inline-block w-[338px]">
              Invest worldwide, breaking geographical boundaries.
            </div>
          </div>
          <div
            className="w-[394px] h-[182px] relative rounded-xl [background:linear-gradient(180deg,_#28aa07,_#0a1132)] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <b className="absolute top-[20px] left-[62px]">
              User-Friendly Interface
            </b>
            <div className="absolute top-[102px] left-[28px] text-xl inline-block w-[338px]">
              Intuitive design for all levels of investors.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[946px] my-0 mx-[!important] absolute top-[179px] left-[1px] flex flex-row items-start justify-end gap-[0px_515px] z-[8] text-left lg:w-[850px] lg:gap-[0px_515px] lg:items-start lg:justify-end lg:pr-0 lg:box-border lg:min-w-0 md:w-[460px] md:flex-row md:items-start md:justify-end md:pr-0 md:pb-0 md:box-border">
        <div className="h-[26px] w-[310px] relative inline-block shrink-0 z-[0] md:text-mini">
          Elevating your financial freedom
        </div>
        <div className="w-[66px] relative h-14 overflow-hidden shrink-0 z-[1]" />
        <div className="h-[90px] w-[469px] relative text-16xl font-black font-inknut-antiqua text-center inline-block shrink-0 [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.5))] z-[2] text-blue md:text-6xl md:w-[500px]">
          <span><Typewriter
  options={{
    strings: ['TECHTACK FINANCE'],
    autoStart: true,
    loop: true,
  }}
/></span>
        </div>
        <div className="w-[808px] my-0 mx-[!important] absolute top-[59px] left-[0px] flex flex-row items-end justify-end z-[3] lg:w-[710px] md:w-[360px]">
          <div className="w-[50px] relative h-[41px] overflow-hidden shrink-0" />
        </div>
      </div>
      <div className="w-[1726px] my-0 mx-[!important] absolute top-[1818px] left-[2px] flex flex-row items-start justify-center gap-[0px_20px] z-[9] text-6xl text-white lg:w-[1200px] lg:gap-[0px_20px] md:hidden">
        <div
          className="h-[182px] w-[394px] relative rounded-xl [background:linear-gradient(180deg,_#28aa07,_#0a1132)] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          <b className="absolute top-[20px] left-[70px]">
            AI-Powered Portfolios
          </b>
          <div className="absolute top-[102px] left-[28px] text-xl inline-block w-[338px]">
            Personalized investments driven by AI and real-time optimization.
          </div>
        </div>
        <div
          className="h-[182px] w-[394px] relative rounded-xl [background:linear-gradient(180deg,_#28aa07,_#0a1132)] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0]"
          data-animate-on-scroll
        >
          <b className="absolute top-[20px] left-[110px]">Global Markets</b>
          <div className="absolute top-[102px] left-[28px] text-xl inline-block w-[338px]">
            Invest worldwide, breaking geographical boundaries.
          </div>
        </div>
        <div
          className="h-[182px] w-[394px] relative rounded-xl [background:linear-gradient(180deg,_#28aa07,_#0a1132)] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          <b className="absolute top-[20px] left-[62px]">
            User-Friendly Interface
          </b>
          <div className="absolute top-[102px] left-[28px] text-xl inline-block w-[338px]">
            Intuitive design for all levels of investors.
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default TechtackFinance;
