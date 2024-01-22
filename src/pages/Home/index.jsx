import React from "react";
import ball1 from "../../assets/photo/home/ball 1.png";
import ball2 from "../../assets/photo/home/ball 2.png";
import ball3 from "../../assets/photo/home/ball 3.png";
import ball4 from "../../assets/photo/home/ball 4.png";
import hand from "../../assets/photo/home/hand 1.png";
import arrow from "../../assets/photo/home/↓ 1.png";
import avito from "../../assets/photo/home/Avito_logo2.png";
import gazprom from "../../assets/photo/home/gazprom.png";
import gnezdo from "../../assets/photo/home/gnezdo.png";
import metrica from "../../assets/photo/home/metrica.png";
import skolkovo from "../../assets/photo/home/skolkovo.png";
import vectorSmart from "../../assets/photo/home/Vector Smart Object 1.png";
import yota from "../../assets/photo/home/yota.png";

import eye from "../../assets/photo/home/eye.png";
import rectangle1 from "../../assets/photo/home/Rectangle 28.png";
import rectangle2 from "../../assets/photo/home/Rectangle 28 (1).png";
import rectangle3 from "../../assets/photo/home/Rectangle 28 (2).png";
import rectangle4 from "../../assets/photo/home/Rectangle 28 (3).png";
import ellipse from "../../assets/photo/home/Ellipse 1.svg";
import dot from "../../assets/photo/home/Dot.svg";
import { NeuroEmployee } from "./anima";

const HomePage = () => {
    return(
        <div className="w-full relative flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border tracking-[normal]">
      {/* section 1 */}
      <section className="self-stretch h-[611px] bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 pb-[18px] pr-[60px] pl-[84px] box-border relative max-w-full text-center text-[52px] text-darkslateblue-100 font-futura-lt-paneuropean mq450:pl-5 mq450:box-border mq925:pl-[42px] mq925:pr-[30px] mq925:box-border mq1400:h-auto">
        <img
          className="w-[109px] absolute my-0 mx-[!important] top-[228px] right-[492.4px] h-[123px] object-cover"
          loading="eager"
          alt=""
          src={ball2}
        />
        <div className="w-[1192px] flex flex-row items-start justify-start py-0 pr-6 pl-0 box-border max-w-full shrink-0 font-gilroy-light">
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
            <img
              className="w-[78.6px] absolute my-0 mx-[!important] right-[-39.6px] bottom-[18px] h-[97px] object-cover"
              loading="eager"
              alt=""
              src={ball4}
            />
            <h1 className="m-0 h-32 flex-1 relative text-inherit leading-[100%] font-normal font-inherit flex items-end justify-center max-w-full z-[1] mq450:text-[31px] mq450:leading-[31px] mq925:text-[42px] mq925:leading-[42px]">
              замени офисного работника на
            </h1>
          </div>
        </div>
        <div className="w-[1194px] flex flex-row items-start justify-start py-0 pr-[25px] pl-0 box-border max-w-full text-[98px]">
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
            <img
              className="w-[109px] absolute my-0 mx-[!important] bottom-[74px] left-[-51.4px] h-[123px] object-cover"
              loading="eager"
              alt=""
              src={ball3}
            />
            <h1 className="m-0 flex-1 relative text-inherit leading-[89%] font-bold font-inherit inline-block max-w-full z-[1] mq450:text-[29px] mq450:leading-[35px] mq925:text-[49px] mq925:leading-[52px]">
              <p className="m-0">искусственный</p>
              <p className="m-0">интеллект</p>
            </h1>
          </div>
        </div>
        <img
          className="w-[172px] absolute my-0 mx-[!important] top-[138px] left-[634px] h-[473px] object-cover z-[2]"
          loading="eager"
          alt=""
          src={hand}
        />
        <div className="w-[7.4px] h-[60px] absolute my-0 mx-[!important] top-[360px] left-[94px] bg-gray-400 z-[2]" />
        <div className="self-stretch h-[301px] relative max-w-full text-base text-gray-400 mq1400:h-auto mq1400:min-h-[301]">
        <div className="h-[316px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border text-center text-base text-gray-400">
            <div className="flex-1 flex flex-col items-center justify-start gap-[12px]">
              <div className="relative leading-[140%] z-[1]">01</div>
              <div className="flex-1 flex flex-row items-start justify-start py-0 pr-1.5 pl-[9px]">
                <div className="self-stretch w-[2.1px] relative bg-darkgray-200 z-[1]" />
              </div>
              <div className="relative leading-[140%] z-[1]">05</div>
            </div>
          </div>
          <div className="absolute top-[28px] left-[0px] w-full flex flex-row items-end justify-between py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq1400:flex-wrap mq1400:justify-center">
            <div className="w-[518px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[52px] max-w-full mq925:flex-wrap mq925:gap-[26px]">
                <div className="h-[265px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                  <div className="flex-1 flex flex-col items-center justify-start gap-[14px]">
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[50px] min-w-[289px] max-w-full text-left text-darkgray-100 mq450:gap-[25px]">
                  <div className="self-stretch relative leading-[24px] font-medium">
                    Разработаем систему с искусственным интеллектом
                    индивидуально для вашего бизнеса. Автоматизируем процессы,
                    увеличим продажи, повысим эффективность.
                  </div>
                  <button className="cursor-pointer [border:none] p-5 bg-gray-400 w-[227px] rounded-41xl flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-darkslategray-100">
                    <b className="relative text-base font-futura-lt-paneuropean text-white text-left">
                      Обсудить проект
                    </b>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[331px] flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border relative max-w-full">
              <img
                className="h-9 w-[32.6px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] object-cover cursor-pointer"
                loading="eager"
                alt=""
                src={arrow}
              />
              <img
                className="h-[204px] w-[229.2px] relative object-cover"
                loading="eager"
                alt=""
                src={ball1}
              />
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="self-stretch bg-whitesmoke-300 overflow-hidden flex flex-col items-center justify-start pt-0 pb-20 pr-0 pl-[60px] box-border gap-[75px] max-w-full shrink-0 text-left text-21xl text-gray-500 font-futura-lt-paneuropean mq450:gap-[19px] mq450:pb-[34px] mq450:box-border mq925:gap-[37px] mq925:pl-[30px] mq925:pb-[52px] mq925:box-border">
        {/* <div className="w-[338px] h-[306px] relative hidden max-w-full">
          <div className="absolute h-full w-[calc(100%_-_248px)] top-[0px] right-[248px] bottom-[0px] left-[0px] rounded-tl-none rounded-tr-81xl rounded-b-none bg-whitesmoke-400" />
          <div className="absolute w-[calc(100%_-_247px)] top-[306px] right-[-5px] left-[252px] rounded-tl-none rounded-tr-81xl rounded-b-none bg-whitesmoke-400 h-[306px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <div className="absolute w-[calc(100%_-_332px)] top-[0px] right-[0px] left-[332px] rounded-tl-none rounded-tr-81xl rounded-br-81xl rounded-bl-none bg-whitesmoke-400 h-[306px]" />
        </div> */}
        <div className="self-stretch rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-white shadow-[0px_10px_50px_rgba(0,_0,_0,_0.05)] box-border flex flex-row flex-wrap items-start justify-start pt-[34px] pb-[17px] pr-0.5 pl-[23px] relative gap-[55px] max-w-full border-[1px] border-solid border-whitesmoke-100 mq450:pt-[22px] mq450:pb-5 mq450:box-border mq925:gap-[27px]">
          <h1 className="my-0 mx-[!important] h-full w-[860px] absolute top-[0px] right-[0px] text-inherit leading-[130%] font-normal font-inherit inline-block min-h-[416px] mq450:text-5xl mq450:leading-[31px] mq925:text-13xl mq925:leading-[42px]">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </h1>
          <div className="h-[316px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border text-center text-base text-gray-400">
            <div className="flex-1 flex flex-col items-center justify-start gap-[12px]">
              <div className="relative leading-[140%] z-[1]">02</div>
              <div className="flex-1 flex flex-row items-start justify-start py-0 pr-1.5 pl-[9px]">
                <div className="self-stretch w-[2.1px] relative bg-darkgray-200 z-[1]" />
              </div>
              <div className="relative leading-[140%] z-[1]">05</div>
            </div>
          </div>
          <div className="h-[60px] w-[7.4px] absolute my-0 mx-[!important] top-[119px] left-[32.4px] bg-gray-400 z-[2]" />
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[20px] min-w-[513px] max-w-full z-[1] text-darkslateblue-200">
            <div className="w-[409px] flex flex-col items-start justify-start gap-[20px] min-w-[164px] max-w-[409px] mq450:max-w-full">
              <div className="w-10 h-[25px] relative bg-gainsboro-200" />
              <h1 className="m-0 self-stretch h-[54px] relative text-inherit font-bold font-inherit inline-block mq450:text-5xl mq925:text-13xl">
                Наши клиенты
              </h1>
              <div className="self-stretch relative text-base leading-[24px] text-darkgray-300">
                20+ успешных проектов в области чат-ботов и ИИ. Наши партнеры
                это различные компании от стартапов до корпоративных гигантов,
                таких как Газпром Битум
              </div>
              <div className="w-10 h-5 relative bg-gainsboro-200" />
              <button className="cursor-pointer [border:none] py-5 pr-[35px] pl-10 bg-gray-400 rounded-41xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray-100">
                <b className="relative text-base font-futura-lt-paneuropean text-white text-left">
                  Все проекты
                </b>
              </button>
            </div>
            <div className="w-[854px] flex flex-col items-start justify-start py-[50px] pr-[60px] pl-[30px] box-border gap-[20px] min-w-[342px] flex-[0.8946] max-w-full mq450:pt-8 mq450:pb-8 mq450:box-border mq925:pr-[30px] mq925:box-border">
              <div className="self-stretch flex flex-row items-center justify-center py-0 pr-px pl-0 gap-[41px] mq450:gap-[20px] mq925:flex-wrap">
                <img
                  className="h-[50px] w-[111.8px] relative object-cover"
                  loading="eager"
                  alt=""
                  src={yota}
                />
                <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border min-w-[117px]">
                  <img
                    className="self-stretch h-[50px] relative max-w-full overflow-hidden shrink-0 object-cover"
                    loading="eager"
                    alt=""
                    src={avito}
                  />
                </div>
                <img
                  className="h-[50px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[50px]"
                  loading="eager"
                  alt=""
                  src={metrica}
                />
                <img
                  className="h-[110px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[110px]"
                  loading="eager"
                  alt=""
                  src={gazprom}
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq925:flex-wrap mq925:justify-center">
                <img
                  className="h-[135px] w-[186px] relative object-cover min-h-[135px]"
                  loading="eager"
                  alt=""
                  src={skolkovo}
                />
                <img
                  className="h-[119px] w-[173px] relative object-cover"
                  loading="eager"
                  alt=""
                  src={gnezdo}
                />
                <div className="h-[135px] w-[172.8px] relative" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1228px] flex flex-row items-start justify-start max-w-full text-center text-[30px] text-darkslateblue-200">
          <div className="w-[1188px] flex flex-col items-center justify-start py-0 pr-5 pl-0 box-border min-h-[253px] max-w-full">
            <img
              className="w-[690px] relative max-h-full object-cover opacity-[0.7] max-w-full"
              alt=""
              src={vectorSmart}
            />
            <div className="self-stretch h-[106px] relative inline-block z-[1] mt-[-163px] mq450:text-lg mq925:text-5xl">
              <p className="m-0">
                <span className="leading-[120%] font-medium">
                  {`разработка и внедрение `}
                  <span className="lowercase">искусственного интеллекта</span>
                </span>
              </p>
              <p className="m-0 text-21xl">
                <b className="leading-[150%] uppercase">пoд задачи бизнеса</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}

      <NeuroEmployee/>

      {/* <section
        className="self-stretch bg-whitesmoke-300 overflow-hidden flex flex-row items-start justify-start pt-0 px-[84px] pb-[131px] box-border gap-[611px] max-w-full shrink-0 text-center text-base text-gray-400 font-futura-lt-paneuropean mq450:gap-[76px] mq450:pb-[55px] mq450:box-border mq925:gap-[153px] mq925:pl-[21px] mq925:pr-[21px] mq925:pb-[85px] mq925:box-border mq1400:gap-[305px] mq1400:pl-[42px] mq1400:pr-[42px] mq1400:box-border"
        data-scroll-to="neuroEmployee"
      >
        <div className="w-[18px] flex flex-col items-start justify-start pt-[117px] px-0 pb-0 box-border mq450:pt-[76px] mq450:box-border mq1850:hidden">
          <div className="self-stretch flex flex-row items-start justify-start relative">
            <div className="h-[60px] w-[7px] absolute my-0 mx-[!important] top-[114px] right-[3px] bg-gray-400 z-[3]" />
            <div className="flex-1 flex flex-col items-start justify-start gap-[249px]">
              <div className="relative leading-[140%] z-[2]">03</div>
              <div className="relative leading-[140%] z-[2]">05</div>
            </div>
          </div>
        </div>
        
        <div className="w-[628px] flex flex-row flex-wrap items-start justify-end gap-[22px] max-w-[calc(100%_-_2585px)] z-[2] text-xl text-black font-gilroy-semibold mq1850:max-w-full">
          <div className="w-[236px] flex flex-col items-start justify-start pt-[60px] px-0 pb-0 box-border gap-[23px] mq925:pt-[39px] mq925:box-border">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 rounded-21xl bg-white shadow-[0px_5px_50px_rgba(0,_0,_0,_0.05)] flex flex-col items-center justify-start py-[30px] px-2.5 gap-[20px] border-[3px] border-solid border-gray-500">
                <img
                  className="w-[90px] h-[90px] relative rounded-mid object-cover"
                  loading="eager"
                  alt=""
                  src={rectangle1}
                />
                <div className="w-[206px] relative tracking-[-0.01em] inline-block mq450:text-base">
                  Автоматизация офисных задач
                </div>
                <div className="w-[206px] relative text-sm leading-[140%] font-gilroy-regular text-gray-300 inline-block">
                  Автоматическая обработка заявок, управления документооборотом,
                  автоматизация действий в 1С, Битрикс24, amoCRM, Microsoft
                  Office, Google Docs
                </div>
              </div>
            </div>
            <div className="w-[242px] h-[295px] rounded-21xl bg-white shadow-[0px_5px_50px_rgba(0,_0,_0,_0.05)] box-border flex flex-col items-center justify-start py-[30px] px-2.5 gap-[20px] border-[3px] border-solid border-gray-500">
              <img
                className="w-[90px] h-[90px] relative rounded-mid object-cover"
                alt=""
                src={rectangle3}
              />
              <div className="w-[206px] relative tracking-[-0.01em] inline-block mq450:text-base">
                Генерация контента любого типа
              </div>
              <div className="w-[206px] relative text-sm leading-[140%] font-gilroy-regular text-gray-300 inline-block">
                Автоматическое создание текстов, изображений, видеоматериалов
              </div>
            </div>
          </div>
          <div className="h-[723px] flex flex-col items-start justify-start gap-[20px] mq450:h-[723px]">
            <div className="w-[242px] rounded-21xl bg-white shadow-[0px_5px_50px_rgba(0,_0,_0,_0.05)] box-border flex flex-col items-center justify-start py-[30px] px-2.5 gap-[20px] border-[3px] border-solid border-gray-500">
              <img
                className="w-[90px] h-[90px] relative rounded-mid object-cover"
                alt=""
                src={rectangle2}
              />
              <div className="w-[206px] relative tracking-[-0.01em] inline-block mq450:text-base">
                Персонализированные чат-боты
              </div>
              <div className="w-[206px] relative text-sm leading-[140%] font-gilroy-regular text-gray-300 inline-block">
                Обученные боты для обработки заказов и информационной поддержки,
                интеграция с Telegram, WhatsApp, веб, мобильными приложениями
              </div>
            </div>
            <div className="w-[242px] rounded-21xl bg-white shadow-[0px_5px_50px_rgba(0,_0,_0,_0.05)] box-border flex flex-col items-center justify-start py-[30px] px-2.5 gap-[20px] border-[3px] border-solid border-gray-500 mq450:pt-5 mq450:pb-5 mq450:box-border">
              <img
                className="w-[90px] h-[90px] relative rounded-mid object-cover"
                alt=""
                src={rectangle4}
              />
              <div className="w-[206px] relative tracking-[-0.01em] inline-block mq450:text-base">
                Автоматизация аналитики и отчетности
              </div>
              <div className="w-[206px] relative text-sm leading-[140%] font-gilroy-regular text-gray-300 inline-block">
                Нейросети для анализа данных и документов, генерации отчетов,
                выявление тенденций, прогнозирование трендов
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1345px] flex flex-row items-start justify-start relative max-w-[106%] shrink-0 text-left text-21xl text-gray-500 mq1850:hidden">
          <img
            className="w-[196px] absolute my-0 mx-[!important] bottom-[-115px] left-[-477px] h-[154px]"
            loading="eager"
            alt=""
            src={dot}
          />
          <img
            className="w-[196px] absolute my-0 mx-[!important] bottom-[-115px] left-[-268px] h-[154px]"
            alt=""
            src={dot}
          />
          <img
            className="h-[150px] w-[150px] absolute my-0 mx-[!important] right-[642px] bottom-[-169px] rounded-[50%] object-cover"
            loading="eager"
            alt=""
            src={ellipse}
          />
          <div className="flex-1 rounded-tl-131xl rounded-tr-none rounded-b-none bg-aliceblue flex flex-col items-start justify-start max-w-full z-[1]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-center py-0 pr-0 pl-px box-border relative max-w-full">
                <h1 className="m-0 h-[367px] flex-1 relative text-inherit tracking-[-0.06em] font-normal font-inherit inline-block min-h-[367px] max-w-full mq450:text-5xl mq925:text-13xl">
                  <span className="leading-[327%]">
                    iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                  </span>
                  <span className="leading-[2777%]">{`iiiiiiiiiiiiiiiiiiiiiiii `}</span>
                </h1>
                <h1 className="my-0 mx-[!important] h-[108px] w-[457px] absolute top-[102px] left-[127px] text-inherit font-bold font-inherit text-darkslateblue-200 inline-block z-[2] mq450:text-5xl mq925:text-13xl">
                  Интеграция нейросотрудника
                </h1>
                <button className="cursor-pointer p-5 bg-[transparent] w-[218px] my-0 mx-[!important] absolute bottom-[76px] left-[127px] rounded-lgi box-border flex flex-row items-center justify-center whitespace-nowrap z-[2] border-[1px] border-solid border-darkgray-200 hover:bg-gray-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                  <div className="relative text-base tracking-[0.07em] font-futura-lt-paneuropean text-darkslateblue-100 text-left">
                    Обсудить проект
                  </div>
                </button>
                <div className="h-[225px] w-0.5 absolute my-0 mx-[!important] bottom-[31px] left-[0px] bg-darkgray-200 z-[2]" />
              </div>
            </div>
            <img
              className="w-[417px] relative max-h-full object-contain max-w-full"
              loading="eager"
              alt=""
              src={eye}
            />
          </div>
        </div>
      </section> */}
      </div>
    )
}

export default HomePage;