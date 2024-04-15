import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-[50%] flex  text-white justify-center flex-col items-center rounded-lg shadow-xl bg-black p-8 translate-y-[200%] translate-x-[50%]">
      <h1 className="block">the url you have entred does not exist</h1>
      <Link href="/disney+" className="block bg-slate-600 p-2 mt-4">
        back to home
      </Link>
    </div>
  );
};

export default NotFound;
