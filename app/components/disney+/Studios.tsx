"use client";
import Image from "next/image";
import { RefObject, useRef } from "react";

import disney from "@/public/viewers-disney.png";
import marvel from "@/public/viewers-marvel.png";
import pixar from "@/public/viewers-pixar.png";
import starwars from "@/public/viewers-starwars.png";
import national from "@/public/viewers-national.png";

const Studios = () => {
  const className = {
    classStudio:
      " -z-100 w-full md:h-40 h-[15rem] max-h-[100%] overflow-hidden rounded-md flex relative items-center hover:bg-transparent  bg-center transition duration-150 md:hover:scale-[1.0025] hover:scale-100 hover:outline-[3px] hover:outline-[#acaeb3] justify-center shadow-studioShadow bg-cover mt-6  outline-[2.5px] outline-[#3e485a] outline",
  };
  const disneyVidRef = useRef<HTMLVideoElement>(null);
  const marvelVidRef = useRef<HTMLVideoElement>(null);
  const starwarsVidRef = useRef<HTMLVideoElement>(null);
  const pixarVidRef = useRef<HTMLVideoElement>(null);
  const nationalVidRef = useRef<HTMLVideoElement>(null);

  const studioVidRefs = [
    disneyVidRef,
    marvelVidRef,
    pixarVidRef,
    starwarsVidRef,
    nationalVidRef,
  ];
  const views = [disney, marvel, pixar, starwars, national];
  const trailers = [
    "1564674844-disney.mp4",
    "1564676115-marvel.mp4",
    "1564676714-pixar.mp4",
    "1608229455-star-wars.mp4",
    "1564676296-national-geographic.mp4",
  ];

  const handleDisplayTrailerPlay = (studioRef: RefObject<HTMLVideoElement>) => {
    if (studioRef.current) {
      studioRef.current.play();
    }
  };
  const handleDisplayTrailerPause = (
    studioRef: RefObject<HTMLVideoElement>
  ) => {
    if (studioRef.current) {
      studioRef.current.pause();
    }
  };
  const backgroundImage = {
    backgroundImage: `url('/home-background.png')`,
  };
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1rem] mt-8">
      {views.map((studio, index) => {
        return (
          <div
            key={index}
            style={backgroundImage}
            className={className.classStudio}
            onMouseEnter={() => handleDisplayTrailerPlay(studioVidRefs[index])}
            onMouseLeave={() => handleDisplayTrailerPause(studioVidRefs[index])}
          >
            <Image
              src={studio}
              alt={`${studio} studio png image`}
              className="max-w-full z-10 absolute "
              width={500}
              height={100}
            />
            <video
              loop
              className="w-full object-cover object-center h-full right-0 top-0 absolute -z-10"
              autoPlay
              ref={studioVidRefs[index]}
            >
              <source src={`./${trailers[index]}`} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </article>
  );
};

export default Studios;
