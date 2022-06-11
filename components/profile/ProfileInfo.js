import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BiBuildings } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const ProfileInfo = ({ user }) => {
  const setURL = (url) => {
    if (url.protocol === 'https:') {
      return url;
    } else if (url.protocol === 'http:') {
      return url;
    } else {
      return 'https://' + url;
    }
  };

  return (
    <motion.div
      className="py-4 px-5 shadow-bs1 rounded-md w-full h-full flex flex-col justify-center bg-white"
      transition={{ duration: 1 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div className="flex items-center gap-3">
        <Image
          src={user.avatarUrl}
          alt={user.login}
          height={80}
          width={80}
          className="rounded-full"
          priority={true}
        />
        <div className="">
          <h1 className="text-2xl font-bold">
            <a href={user.url} target="_blank" rel="noreferrer">
              {'@'}
              {user.login}
            </a>
          </h1>
          <h2 className="font-normal text-slate-700">{user.name}</h2>
        </div>
      </div>
      <p className="mt-2">{user.bio}</p>
      <div className="text-gray-600 border-t-[1px] border-zinc-300 mt-4">
        {user.company && (
          <div className="flex items-center gap-1 mt-2">
            <BiBuildings size={20} />
            {user.company}
          </div>
        )}
        {user.location && (
          <div className="flex items-center gap-1 mt-2">
            <IoLocationOutline size={20} />
            {user.location}
          </div>
        )}
        {user.email && (
          <div className="flex items-center gap-1 mt-2">
            <HiOutlineMail size={20} />
            <a
              href={`mailto:${user.email}`}
              className="hover:underline hover:text-gray-800"
            >
              {user.email}
            </a>
          </div>
        )}
        {user.twitterUsername && (
          <div className="flex items-center gap-1 mt-2">
            <AiOutlineTwitter size={20} />
            <a
              href={`https://twitter.com/${user.twitterUsername}`}
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:text-gray-800"
            >
              {'@'}
              {user.twitterUsername}
            </a>
          </div>
        )}
        {user.websiteUrl && (
          <div className="flex items-center gap-1 mt-2">
            <BsLink45Deg size={22} />
            <a
              href={user.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:text-gray-800"
            >
              {user.websiteUrl}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProfileInfo;
