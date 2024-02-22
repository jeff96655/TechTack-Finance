import { useState, useCallback } from "react";
import Menu from "./menu";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuPopupOpen, setMenuPopupOpen] = useState(false);
  const router = useRouter();

  const openMenuPopup = useCallback(() => {
    setMenuPopupOpen(true);
  }, []);

  const closeMenuPopup = useCallback(() => {
    setMenuPopupOpen(false);
  }, []);

  const onFrameButton1Click = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onFrameButton2Click = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  return (
    <>
      <div className="w-[1732px] fixed my-0 mx-[!important] top-[0px] left-[-4px] bg-azure-100 shadow-[0px_0px_80px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden shrink-0 z-[10]">
        <img
          className="absolute top-[5px] left-[0px] w-[50px] h-[50px] overflow-hidden object-cover"
          alt=""
          src="/frame-39@2x.png"
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[18px] left-[381px] w-10 h-[25px] hidden md:flex"
          onClick={openMenuPopup}
        >
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-midnightblue w-10 h-[5px] overflow-hidden" />
          <div className="absolute top-[10px] left-[0px] rounded-8xs bg-midnightblue w-10 h-[5px] overflow-hidden" />
          <div className="absolute top-[20px] left-[0px] rounded-8xs bg-midnightblue w-10 h-[5px] overflow-hidden" />
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-midnightblue absolute top-[18px] left-[511px] rounded-xl w-[143px] h-[26px] overflow-hidden md:hidden"
          onClick={onFrameButton1Click}
        >
          <b className="absolute top-[0px] left-[36px] text-xl font-inika text-white text-left">
            Sign Up
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-midnightblue absolute top-[18px] left-[777px] rounded-xl w-[143px] h-[26px] overflow-hidden md:hidden"
          onClick={onFrameButton2Click}
        >
          <b className="absolute top-[0px] left-[45px] text-xl font-inika text-white text-left">
            Login
          </b>
        </button>
      </div>
      {isMenuPopupOpen && (
        <PortalPopup placement="Top right">
          <Menu onClose={closeMenuPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
