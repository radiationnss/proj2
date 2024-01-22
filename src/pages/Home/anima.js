import React from "react";
import "./style.css";

import eye from "../../assets/photo/home/eye.png";
import rectangle1 from "../../assets/photo/home/Rectangle 28.png";
import rectangle2 from "../../assets/photo/home/Rectangle 28 (1).png";
import rectangle3 from "../../assets/photo/home/Rectangle 28 (2).png";
import rectangle4 from "../../assets/photo/home/Rectangle 28 (3).png";
import ellipse from "../../assets/photo/home/Ellipse 1.svg";
import dot from "../../assets/photo/home/Dot.svg";

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export const NeuroEmployee = () => {
  return (
    <div className="neuro-employee">
      <div className="overlap">
        <Parallax pages={1.2}>
        <ParallaxLayer speed={1.25} offset={0}>
        <div className="dots">
          <img className="dot" alt="Dot" src={dot} />
          <img className="dot" alt="Dot" src={dot} />
        </div>
        <img className="ellipse" alt="Ellipse" src={ellipse} />
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={0}>
        <div className="bkg">
          <p className="p">
            <span className="text-wrapper-2">i</span>
          </p>
          <img className="eye" alt="Eye" src={eye} />
        </div>
        <div className="view">
          <div className="text-wrapper-3">Интеграция нейросотрудника</div>
          {/* <ButtonDsk className="button-2-DSK" /> */}
        </div>
        <div className="cards">
          <div className="element">
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
        <div className="scroll">
          <div className="overlap-group">
            <div className="rectangle-2" />
            <div className="rectangle-3" />
          </div>
          <div className="text-wrapper-4">03</div>
          <div className="text-wrapper-5">05</div>
        </div>
        </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};
