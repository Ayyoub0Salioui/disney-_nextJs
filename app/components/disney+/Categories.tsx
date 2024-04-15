import Category from "@/app/ui/Category";
const Categories = () => {
  return (
    <div className="pb-4 w-full m-auto">
      <Category categoryName={"recomended for you"} type={"recommend"} />
      <Category categoryName={"new to disney+"} type={"new"} />
      <Category categoryName={"originals"} type={"original"} />
      <Category categoryName={"trending"} type={"trending"} />
    </div>
  );
};

export default Categories;
