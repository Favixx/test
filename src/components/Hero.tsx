import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Unbounded } from "next/font/google";

import SpiralImage from "@assets/images/spiral.png";
import ComputerImage from "@assets/images/computer.png";
import HeroBgImage from "@assets/images/bg_hero_text.svg";
import NetImage from "@assets/images/tech-bg.png";

const unbounded = Unbounded({ subsets: ["latin"] });
const Hero = () => {
  return (
    <div className="flex flex-wrap h-full flex-col lg:flex-row pt-10 gap-8 lg:gap-0 lg:justify-between lg:bg-[url('../assets/images/tech-bg.png')]">
      <div className="w-full flex flex-col flex-[0.5] flex-wrap">
        <div className="relative">
          <Image
            src={HeroBgImage}
            alt=""
            className="hidden lg:block absolute pointer-events-none"
          />
          <h1
            className={`${unbounded.className} text-[42px] font-medium max-w-[480px] xl:text-[64px]`}
          >
            Створюємо сайти{" "}
            <div className={`${unbounded.className}`}>
              <span className="text-transparent bg-gradient-to-b from-[#6311BE] to-[#D820B4] bg-clip-text text-[42px] font-medium xl:text-[64px]">
                під ключ
              </span>
            </div>
          </h1>
          <Image
            className="absolute right-0 top-1/3 lg:hidden"
            src={SpiralImage}
            alt=""
            width={80}
            height={80}
          />
        </div>
        <div className="mt-5">
          <div className="font-inherit lg:text-lg xl:max-w-[480px]">
            <p>
              Індивідуальний підхід до розпобки сайту згідно з потребами
              замовника або на вибір шаблонів.
            </p>
            <p>Зробимо все, щоб ви були задоволені.</p>
          </div>
        </div>
        <div className="flex justify-between items-center font-semibold whitespace-nowrap gap-5 mt-[75px] sm:justify-center lg:justify-start">
          <Link href="#" className="rounded-[60px] bg-[#360AC1] py-4 px-[36px]">
            Зв’язатися
          </Link>
          <Link
            href="#"
            className="border border-color-white rounded-[60px] px-[25px] py-4"
          >
            Дізнатися більше
          </Link>
        </div>
      </div>

      <div className="flex-[0.5] relative h-full w-full">
        <Image src={ComputerImage} alt="" className="object-contain" />
        <div className="absolute z-[2] bg-gradient-to-b from-white/10 to-white/20 border border-white shadow-[0px 4px 52px 0px] shadow-[#0007481f] w-full h-28 -bottom-[12px] backdrop-blur-md -skew-x-12 rounded-[20px]">
          <ul className="flex justify-around h-full items-center px-8 text-white">
            <li className="flex justify-center items-center flex-col">
              <p className="text-2xl italic font-semibold md:text-4xl">5+</p>
              <p className="text-xs font-medium md:text-base">років у сфері</p>
            </li>
            <li className="flex justify-center items-center flex-col">
              <p className="text-2xl italic font-semibold md:text-4xl">30+</p>
              <p className="text-xs font-medium md:text-base">
                вдалих проектів
              </p>
            </li>
            <li className="flex justify-center items-center flex-col">
              <p className="text-2xl italic font-semibold md:text-4xl">108+</p>
              <p className="text-xs font-medium md:text-base">
                відгуків про нас
              </p>
            </li>
          </ul>
        </div>

        <Image
          className="absolute right-0 -top-1 hidden lg:block"
          src={SpiralImage}
          alt=""
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

export default Hero;
