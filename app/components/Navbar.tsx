"use client";
import Navlink from "../ui/Navlink";
import Image from "next/image";

import avatar from "../../public/avatar.jpg";
import logo from "../../public/logo.svg";
import homeIcon from "../../public/home-icon.svg";
import seriesIcon from "../../public/series-icon.svg";
import movieIcon from "../../public/movie-icon.svg";
import originalIcon from "../../public/original-icon.svg";
import watchlistIcon from "../../public/watchlist-icon.svg";
import searchIcon from "../../public/search-icon.svg";
import dots from "@/public/dots-vertical-svgrepo-com.svg";
import Sidebar from "./disney+/Sidebar";
import MENUS from "../types/props";

import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const [isActive, setIsActive] = useState<MENUS>({
    sidebar: false,
    middlebar: false,
  });
  const handleDropLinks = () => {
    setIsActive({ ...isActive, sidebar: !isActive.sidebar, middlebar: false });
  };
  const handleMiddleMenu = () => {
    setIsActive({
      ...isActive,
      middlebar: !isActive.middlebar,
      sidebar: false,
    });
  };
  const className = {
    navbar: `text-white w-full py-3 sticky top-0 z-[200] ${
      path !== "/disney+" ? "bg-black" : "bg-transparent"
    }`,
  };
  return (
    <header className={className.navbar}>
      <div className="w-[98%] md:w-[96%] lg:w-[95%] xl:w-[90%] flex items-center  m-auto justify-between ">
        <div className="w-[15%]">
          <Image src={logo} alt="disney logo" quality={100} width={96} />
        </div>
        <nav className="w-[70%] lg:block hidden">
          <ul className="capitalize flex items-center gap-10">
            <Navlink image={homeIcon} name={"home"} />
            <Navlink image={seriesIcon} name={"series"} />
            <Navlink image={movieIcon} name={"movies"} />
            <Navlink image={originalIcon} name={"originals"} />
            <Navlink image={watchlistIcon} name={"watchlist"} />
            <Navlink image={searchIcon} name={"search"} />
          </ul>
        </nav>
        <nav className="lg:hidden block ">
          <ul className="capitalize flex items-center gap-x-8 ">
            <Navlink image={homeIcon} />
            <Navlink image={seriesIcon} />
            <Navlink image={movieIcon} />
            <div className="relative">
              <Image
                src={dots}
                alt="move link icon"
                width={25}
                height={1}
                onClick={handleDropLinks}
              />
              <div
                className={`bg-[#141214]  flex-col items-start border-solid border-[1.5px] border-[#acaeb3] gap-4 uppercase py-6 px-3 rounded-md absolute translate-x-2/4 right-1/2 top-[2.75rem] w-44
                   ${isActive.sidebar ? "flex" : "hidden"}`}
              >
                <Navlink image={originalIcon} name={"originals"} />
                <Navlink image={watchlistIcon} name={"watchlist"} />
                <Navlink image={searchIcon} name={"search"} />
              </div>
            </div>
          </ul>
        </nav>
        <div className="w-[15%] flex justify-end items-center gap-4  ">
          <div>
            {!isActive.sidebar ? (
              <Image
                src={avatar}
                alt="avatar img"
                width={48}
                quality={100}
                className="rounded-full"
                onClick={handleMiddleMenu}
              />
            ) : null}

            <Sidebar isActive={isActive} handleMiddleMenu={handleMiddleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
