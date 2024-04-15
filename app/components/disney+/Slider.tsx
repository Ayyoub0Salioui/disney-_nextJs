"use client";
import Image from "next/image";
import { useState } from "react";
import movieOne from "@/public/shark.png";
import movieTwo from "@/public/sofr.jpg";
import movieThree from "@/public/coco.jpg";
import movieFour from "@/public/slider-badag.jpg";
import movieFive from "@/public/slider-badging.jpg";

const Slider = () => {
  const slider = [movieOne, movieTwo, movieThree, movieFour, movieFive];
  const [currentSlider, setCurrnetSlider] = useState<number>(0);
  const handleSlider = (number: number) => {
    setCurrnetSlider(() => {
      return number;
    });
  };
  const className = {
    dot: "w-[0.65rem] h-[0.65rem] rounded-full bg-white opacity-[0.5]  transition-transform duration-200 mx-[0.15rem]",
    activeDot:
      "w-[0.65rem] h-[0.65rem] bg-white rounded-full  border-white border-solid mx-[0.15rem]",
  };
  return (
    <article className="mt-4 w-full md:gap-y-6 z-[100] relative block">
      <div className="flex w-[100%] m-auto">
        {slider.map((img, index) => {
          return (
            <Image
              key={index}
              src={img.src}
              alt="slider"
              width={1400}
              height={320}
              style={{
                transform: `translateX(calc(${
                  -100 * currentSlider
                }% + ${index}rem))`,
              }}
              className="shadow-slideImageShadow z-100 rounded-sm ease-in-out   transition-transform duration-900"
            />
          );
        })}
      </div>
      <div className="bottom-0 absolute right-0 block px-3 py-1">
        <button
          className={currentSlider === 0 ? className.activeDot : className.dot}
          onClick={() => {
            handleSlider(0);
          }}
        ></button>
        <button
          className={currentSlider === 1 ? className.activeDot : className.dot}
          onClick={() => {
            handleSlider(1);
          }}
        ></button>
        <button
          className={currentSlider === 2 ? className.activeDot : className.dot}
          onClick={() => {
            handleSlider(2);
          }}
        ></button>
        <button
          className={currentSlider === 3 ? className.activeDot : className.dot}
          onClick={() => {
            handleSlider(3);
          }}
        ></button>
        <button
          className={currentSlider === 4 ? className.activeDot : className.dot}
          onClick={() => {
            handleSlider(4);
          }}
        ></button>
      </div>
    </article>
  );
};

export default Slider;
