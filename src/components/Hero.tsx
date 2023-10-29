import React from "react";

import Image from "next/image";
import { Unbounded } from "next/font/google";

import SpiralImage from '@assets/images/spiral.png'

const unbounded = Unbounded({ subsets: ["latin"] });
const Hero = () => {

  return (
    <div className="flex">
    <div className="w-full flex flex-col flex-[0.5]">
      <div className="relative">
        <h1 className={`${unbounded.className} text-[42px] font-medium`}>
          Створюємо сайти{" "}
          <div className={`${unbounded.className}`}>
            <span className="text-transparent bg-gradient-to-b from-[#6311BE] to-[#D820B4] bg-clip-text text-[42px] font-medium">
              під ключ
            </span>
          </div>
        </h1>
        <Image
          className="absolute right-0 top-1/3"
          src={SpiralImage}
          alt=""
          width={80}
          height={80}
        />
      </div>
      <div className="mt-5">
        <div className="font-inherit">
          <p>
            Індивідуальний підхід до розпобки сайту згідно з потребами замовника
            або на вибір шаблонів.
          </p>
          <p>Зробимо все, щоб ви були задоволені.</p>
        </div>
      </div>
      </div>
      
      <div className="flex-[0.5]">

      </div>
      
      </div>
  );
};

export default Hero;

