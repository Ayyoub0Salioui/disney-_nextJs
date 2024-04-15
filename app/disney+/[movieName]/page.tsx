import Image from "next/image";
import data from "@/public/data/disneyPlusMoviesData.json";
import playBlack from "@/public/play-icon-black.png";
import playWhite from "@/public/play-icon-white.png";
import groupIcon from "@/public/group-icon.png";
import addToWatchList from "@/public/watchlist-icon.svg";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "disney+ | login",
  description: "Generated by create next app",
};

const MovieInfo = ({ params }: { params: { movieName: string } }) => {
  const linkTitle = params.movieName.split("-").join(" ");
  const movieData = data.filter((item) => {
    if (item.title === linkTitle) {
      return item;
    } else {
      return;
    }
  });
  const dynamicBg = {
    backgroundImage: `url(${movieData[0].backgroundImg})`,
  };
  const className = {
    playBtn:
      "flex items-center justify-center py-2 px-4 rounded-sm cursor-pointer outline outline-[#b7bcc5] outline-[2.25px]",
    optionBtn:
      "bg-black flex items-center justify-center p-2 cursor-pointer rounded-full outline-[2.25px] outline-[#b7bcc5] outline",
  };
  return (
    <div
      style={dynamicBg}
      className="bg-cover top-0 left-0 relative bg-center md:h-[92.1vh] h-screen flex items-end text-white z-20 "
    >
      <div className=" flex flex-col w-[98%] md:w-[95%] lg:w-[90%] xl:w-[85%] m-auto">
        <Image
          height={310}
          width={550}
          quality={100}
          src={movieData[0].titleImg}
          alt="titleImg"
        />
        <div className="flex mt-8 mb-6 gap-x-4 justify-start items-center">
          <span className={`${className.playBtn} bg-white`}>
            <Image
              height={1}
              width={24}
              src={playBlack}
              alt="play icon"
              className="w-6"
            />
            <span className="text-black uppercase text-sm">play</span>
          </span>
          <span className={`${className.playBtn} bg-black`}>
            <Image
              height={1}
              width={24}
              src={playWhite}
              alt="play trailer icon"
              className="w-6"
            />
            <span className="uppercase text-sm">trailler</span>
          </span>
          <span className={className.optionBtn}>
            <Image
              height={1}
              width={20}
              src={groupIcon}
              alt="group icon"
              className="w-5"
            />
          </span>
          <span className={className.optionBtn}>
            <Image
              width={20}
              src={addToWatchList}
              alt="group icon"
              className="w-5"
            />
          </span>
        </div>
        <span className="mt-3">{movieData[0].subTitle}</span>
        <p className="mt-3 md:max-w-[50%] max-w-[80%]">
          {movieData[0].description}
        </p>
      </div>
    </div>
  );
};

export default MovieInfo;