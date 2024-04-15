import Image from "next/image";
import Link from "next/link";
import close from "@/public/close.svg";
import avatar from "@/public/avatar.jpg";
import settingsDot from "@/public/circle-plus-svgrepo-com.svg";
import MENUS from "@/app/types/props";

interface SidebarProps {
  handleMiddleMenu: () => void;
  isActive: MENUS;
}
const Sidebar = ({ isActive, handleMiddleMenu }: SidebarProps) => {
  return (
    <div
      className={`bg-[#0E0E17] border-solid border-t-transparent border-[1px] border-[#2C3041] shadow-2xl flex-col items-start gap-4 text-[#c9c0c0]  text-lg capitalize font-medium py-3 px-5 rounded-b-md absolute lg:right-[calc(10%/2)] md:right-[calc(5%/2)] right-[calc(2%/2)] xl:right-[calc(15%/2)] top-0 w-[250px] ${
        isActive.middlebar ? "flex" : "hidden"
      }`}
    >
      <div className="flex items-center w-full justify-between gap-x-4">
        <div className="flex gap-x-4 flex-row-reverse items-center">
          <span>user</span>
          <Image
            src={avatar}
            alt="avatar img"
            width={48}
            quality={100}
            className="rounded-full"
          />
        </div>
        <Image
          src={close}
          alt="avatar img"
          width={24}
          quality={100}
          onClick={handleMiddleMenu}
        />
      </div>
      <i className="w-[90%] h-[0.5px] bg-[#2a282a] block my-5 m-auto"></i>
      <ul className="gap-y-4 flex flex-col relative">
        <li className="flex gap-x-4 items-center">
          <Image
            src={avatar}
            alt="avatar img"
            width={48}
            quality={100}
            className="rounded-full"
          />
          <span>user</span>
        </li>
        <li className="flex gap-x-4 items-center">
          <Image
            src={avatar}
            alt="avatar img"
            width={48}
            quality={100}
            className="rounded-full"
          />
          <span>user</span>
        </li>
        <li className="flex gap-x-4 items-center">
          <Image
            src={avatar}
            alt="avatar img"
            width={48}
            quality={100}
            className="rounded-full"
          />
          <span>user</span>
        </li>
        <li className="flex gap-x-4 items-center">
          <Image
            src={settingsDot}
            alt="avatar img"
            width={68}
            quality={100}
            className="self-start"
          />
          <span>add profile</span>
        </li>
        <i className="w-[90%] h-[0.5px] bg-[#2a282a] block m-auto"></i>
        <ol className=" flex-col flex gap-y-4">
          <Link href="#">edit profile</Link>
          <Link href="#">app settings</Link>
          <Link href="#">account</Link>
          <Link href="#">help</Link>

          <Link href="/">logout</Link>
        </ol>
      </ul>
    </div>
  );
};
export default Sidebar;
