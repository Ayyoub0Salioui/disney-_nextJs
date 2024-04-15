import Navbar from "../components/Navbar";
import Categories from "../components/disney+/Categories";
import Slider from "../components/disney+/Slider";
import Studios from "../components/disney+/Studios";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "disney+ clone",
  description: "Generated by create next app",
};
const Dashboard = () => {
  return (
    <>
      <main className="w-[98%] md:w-[95%] lg:w-[90%] xl:w-[90%] m-auto flex flex-col  ">
        <Slider />
        <Studios />
        <Categories />
      </main>
    </>
  );
};

export default Dashboard;
