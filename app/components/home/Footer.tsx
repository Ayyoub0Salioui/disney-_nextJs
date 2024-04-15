import Image from "next/image";
import ios from "@/public/ios-appstore.webp";
import store from "@/public/google-playstore.webp";
import twitter from "@/public/twitter-svgrepo-com.svg";
import facebook from "@/public/facebook-svgrepo-com.svg";
import instagram from "@/public/instagram-svgrepo-com.svg";

const Footer = () => {
  return (
    <footer className="pt-20 w-[98%] md:w-[95%] lg:w-[90%] xl:w-[85%] m-auto">
      <div className="capitalize grid grid-cols-2 gap-y-8 md:grid-cols-4">
        <div className="flex flex-col">
          <h2 className="text-[#E1E6F0] text-xl mb-4">company</h2>
          <span className="text-[#8F98B2] text-md">supported devices</span>
          <span className="text-[#8F98B2] text-md">internet based ads</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#E1E6F0] text-xl mb-4">view website in</h2>
          <span className="text-[#8F98B2] text-md">enlglish</span>
          <span className="text-[#8F98B2] text-md">العربية</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#E1E6F0] text-xl mb-4">need help</h2>
          <span className="text-[#8F98B2] text-md">help</span>
          <span className="text-[#8F98B2] text-md">feedback</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#E1E6F0] text-xl mb-4">contact with us</h2>
          <div className="flex gap-x-6">
            <Image
              src={instagram}
              width={30}
              height={30}
              alt="instagram icon"
            />
            <Image src={facebook} width={30} height={30} alt="facebook icon" />
            <Image src={twitter} width={30} height={30} alt="twitter icon" />
          </div>
        </div>
      </div>
      <div className="pt-20 pb-8 text-[#8F98B2] capitalize flex items-end justify-between flex-wrap gap-y-4 md:gap-0">
        <div className="flex flex-col gap-y-3">
          <span>©disney. all rights reserved</span>
          <ul className="flex gap-x-2 text-sm">
            <li>privacy policy</li>
            <li>cookie policy</li>
            <li>subscriber agreement</li>
            <li>subscriber agreement</li>
            <li>EMEA privacy rights</li>
            <li> manage preferences</li>
          </ul>
        </div>
        <div className="flex gap-x-8">
          <Image src={store} alt="play store icon" width={150} height={120} />
          <Image src={ios} alt="play store icon" width={150} height={120} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
