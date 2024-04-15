import Link from "next/link";
import Image from "next/image";
import data from "../../public/data/disneyPlusMoviesData.json";
import background from "@/public/home-background.png";

interface CategoryProps {
  categoryName: string;
  type: string;
}
const Category = ({ categoryName, type }: CategoryProps) => {
  return (
    <div className="pt-10">
      <Image
        className="-z-10 bg-cover object-cover h-screen top-0 right-0 absolute"
        src={background}
        fill
        alt="home background image "
      />
      <h1 className="capitalize text-white text-md pb-2 ">{categoryName}</h1>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 ">
        {data.map((item, index) => {
          const title = item.title;
          const linkTitle = title.split(" ").join("-");
          if (item.type === type) {
            return (
              <Link
                href={`/disney+/${linkTitle}`}
                key={index}
                className="rounded-md shadow-movieShadow transiton duration-150 md:hover:scale-[1.055]  w-full hover:shadow-movieShadowActive   overflow-hidden"
              >
                <Image
                  src={item.cardImg}
                  loading="eager"
                  quality={100}
                  alt="movie image"
                  width={600}
                  height={0}
                />
              </Link>
            );
          } else {
            return;
          }
        })}
      </div>
    </div>
  );
};

export default Category;
