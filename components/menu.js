import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const Menu = ({ onClose }) => {
  const router = useRouter();
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

  const onFrameButtonClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onFrameButton1Click = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  return (
    <div
      className="w-96 h-[499px] rounded-t-none rounded-br-none rounded-bl-3xs bg-gray overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-full max-h-full"
      data-animate-on-scroll
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-azure-100 absolute top-[171px] left-[87px] rounded-xl w-[210px] h-12 overflow-hidden"
        onClick={onFrameButtonClick}
      >
        <b className="absolute top-[8px] left-[60px] text-6xl font-inika text-black text-left">
          Sign Up
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-azure-100 absolute top-[304px] left-[87px] rounded-xl w-[210px] h-12 overflow-hidden"
        onClick={onFrameButton1Click}
      >
        <b className="absolute top-[8px] left-[72px] text-6xl font-inika text-black text-left">
          Login
        </b>
      </button>
      <div
        className="absolute top-[28px] left-[315px] w-[33.9px] h-[29.5px] cursor-pointer"
        onClick={onClose}
      >
        <div className="absolute top-[25.7px] left-[0px] rounded-3xs bg-white w-10 h-[5px] overflow-hidden [transform:_rotate(-40deg)] [transform-origin:0_0]" />
        <div className="absolute top-[0px] left-[3.2px] rounded-3xs bg-white w-10 h-[5px] overflow-hidden [transform:_rotate(40deg)] [transform-origin:0_0]" />
      </div>
    </div>
  );
};

export default Menu;
