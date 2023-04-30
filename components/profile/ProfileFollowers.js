import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const ProfileFollowers = ({ username, followers }) => {
  return (
    <div className="p-3 card-item bg-white">
      <p className="text-center mb-5 text-xl font-semibold">
        {"@"}
        {username} Follwers {"(Total: "}
        {followers.totalCount}
        {")"}
      </p>
      <div className="flex flex-col gap-4 max-h-[450px] overflow-y-scroll pt-2 pr-5">
        {followers?.nodes.map((follow) => (
          <Link
            href={`/user/${follow.login}`}
            key={uuidv4()}
            className="dark:bg-dark-gray dark:border-gray-700 flex items-center gap-3 rounded-md shadow-bs5 hover:shadow-bs2 transition-all duration-200 p-2 border-2 border-slate-300"
          >
            <img
              src={follow.avatarUrl}
              alt={follow.login}
              height={40}
              width={40}
              className="rounded-full"
            />
            <div className="">
              <p className="text-base font-semibold">
                {"@"}
                {follow.login}
              </p>
              <p className="font-normal text-slate-600 text-sm dark:text-slate-400">
                {follow.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileFollowers;
