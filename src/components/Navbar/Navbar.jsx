import React from "react";
import maxdem from "../../assets/photo/maxden.png";
import telegram from "../../assets/photo/telegram.png";
import whatsapp from "../../assets/photo/whatsapp.png";
import HeaderButtons from "./HeaderButton";

const Navbar = () => {
    return (
        <header className="self-stretch bg-whitesmoke-300 overflow-hidden flex flex-row items-center justify-between pt-[15px] px-[60px] pb-[22px] box-border gap-[20px] top-[0] z-[99] sticky max-w-full text-left text-lg text-gray-100 font-futura-lt-paneuropean mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
        <img
          className="self-stretch w-[50px] relative max-h-full object-cover min-h-[63px] cursor-pointer"
          loading="eager"
          alt=""
          src={maxdem}
        />
        <div className="w-[701px] flex flex-row items-start justify-start pt-0.5 pb-[3px] pr-px pl-0 box-border gap-[165px] max-w-full mq1050:hidden mq450:gap-[41px] mq750:gap-[82px]">
          <div className="flex flex-row items-center justify-center text-black">
            <div className="h-6 relative font-medium inline-block">услуги</div>
          </div>
          <div className="w-[51px] flex flex-row items-start justify-start py-0 px-0 box-border">
            <div className="relative font-medium shrink-0">портфолио</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center py-0 pr-[3px] pl-0">
            <div className="h-6 flex-1 relative font-medium inline-block whitespace-nowrap">
              о нас
            </div>
          </div>
          <div className="w-[51px] flex flex-row items-start justify-start py-0 px-0 box-border">
            <div className="h-6 relative font-medium inline-block shrink-0">
              контакты
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-5 px-0 gap-[14px] text-base text-black">
          <div className="relative font-medium whitespace-nowrap">
            8 981 884-09-55
          </div>
          <div className="h-[18px] w-[34px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-4 h-4 object-cover"
              loading="eager"
              alt=""
              src={whatsapp}
            />
            <img
              className="absolute top-[0px] left-[16px] w-[18px] h-[18px] object-cover"
              loading="eager"
              alt=""
              src={telegram}
            />
          </div>
        </div>
      </header>
    );
};

export default Navbar;