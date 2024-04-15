import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface NavlinkProps {
  image: StaticImageData;
  name?: string;
}
const Navlink = ({ image, name }: NavlinkProps) => {
  return (
    <Link className="flex gap-1 items-end" href={"/"}>
      <Image
        src={image}
        alt="homeLinkIcon"
        className="max-w-full w-[24px] mr-1"
        width={25}
        height={1}
      />
      {name && <span>{name}</span>}
    </Link>
  );
};

export default Navlink;
