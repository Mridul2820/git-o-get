import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Search = dynamic(() => import("../reuse/Search"));

const HomeContent = () => {
  return (
    <main className="dark:bg-dark-color dark:text-white py-8 px-5 h-full md:h-[calc(100vh-48px)] flex gap-10 flex-col justify-center items-center">
      <h1 className="text-center text-2xl md:text-3xl font-bold">
        Git O Get - Github Profile Stats and Graphs in One Place
      </h1>
      <div className="flex gap-5 flex-col md:flex-row justify-center items-center max-w-[1200px] w-full mx-auto pb-5 pt-0 md:pt-5">
        <div className="w-full md:w-1/2">
          <Image
            height={400}
            width={500}
            priority={true}
            layout="responsive"
            src="/svg/developer_activity.svg"
            alt="developer_activity"
            className="w-full max-w-[500px] mx-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center dark:bg-dark-color dark:text-white dark:border-gray-500 gap-4 p-5 shadow-bs3 hover:shadow-bs2 border-2 border-slate-400 rounded-md w-full md:w-1/2 h-full bg-white">
          <div className="p-3 w-16 h-16 rounded-full shadow-bs2 border-2 border-slate-400">
            <img
              src="/logo.png"
              alt="logo"
              className="w-full"
              height={64}
              width={64}
            />
          </div>
          <h2 className="text-center text-base sm:text-xl font-bold">
            Search Your Github Username
          </h2>
          <Search height="h-12" />
          <p className="font-semibold text-xl">Features</p>

          <ul className="flex justify-center flex-wrap gap-3 select-none">
            <li className="feature-point">Profile Details</li>
            <li className="feature-point">Language Card</li>
            <li className="feature-point">Shareable Social Card</li>
            <li className="feature-point">Profile Stats</li>
            <li className="feature-point">Profile Contribution Calander</li>
            <li className="feature-point">
              List of Followers{"("}last 100{")"}
            </li>
            <li className="feature-point">Most forked Repository Graph</li>
            <li className="feature-point">Most Stared Repository Graph</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HomeContent;
