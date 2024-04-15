import Image from "next/image";
import logo from "@/public/logo.svg";

const LoginNavbar = () => {
  return (
    <header className="z-100 px-8 bg-black fixed flex justify-between w-full items-center py-1">
      <Image
        src={logo}
        alt="disney logo"
        className="w-24"
        width={96}
        height={1}
      />
      <button className="text-white btn-primary capitalize py-2 px-3 ">
        login
      </button>
    </header>
  );
};

export default LoginNavbar;
