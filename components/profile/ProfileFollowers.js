import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfileFollowers = ({ username, followers }) => {
  return (
    <div className="p-3 shadow-bs1 rounded-md h-full w-full bg-white">
      <p className="text-center mb-5 text-xl font-semibold">
        {'@'}
        {username} Follwers {'(Total: '}
        {followers.totalCount}
        {')'}
      </p>
      <div className="flex flex-col gap-4 max-h-[450px] overflow-y-scroll pt-2 pr-5">
        {followers?.nodes.map((follow) => (
          <Link href={`/user/${follow.login}`} key={follow.id}>
            <a className="flex items-center gap-3 rounded-md shadow-bs5 hover:shadow-bs2 transition-all duration-200 p-2 border-2 border-slate-300">
              <Image
                src={follow.avatarUrl}
                alt={follow.login}
                height={40}
                width={40}
                className="rounded-full"
              />
              <div className="">
                <p className="text-base font-semibold">
                  {'@'}
                  {follow.login}
                </p>
                <p className="font-normal text-slate-600 text-sm">
                  {follow.name}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileFollowers;
