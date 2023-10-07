import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BiBuildings } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { BsLink45Deg } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { getApexDomain } from "../../helper/getApexDomain";
import Image from "next/image";
import { PreProcessSocialName } from "../../helper/utils";

const ProfileInfo = ({ user }) => {
  return (
    <motion.div
      className="card-item py-4 px-5 flex flex-col justify-center"
      transition={{ duration: 1 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div className="flex items-center gap-3">
        <img
          src={user.avatarUrl}
          alt={user.login}
          className="rounded-full h-16 md:h-20 w-16 md:w-20"
        />
        <div className="">
          <h1 className="text-xl md:text-2xl font-bold">
            <a href={user.url} target="_blank" rel="noreferrer">
              {"@"}
              {user.login}
            </a>
          </h1>
          <h2 className="font-normal text-slate-700 dark:text-gray-500">
            {user.name}
          </h2>
        </div>
      </div>
      <p className="mt-2">{user.bio}</p>
      <div className="text-gray-600 border-t-[1px] border-zinc-300 mt-4 dark:border-gray-700">
        {user.company && (
          <div className="flex items-center gap-1 mt-2 dark:text-gray-300">
            <BiBuildings size={20} />
            {user.company}
          </div>
        )}
        {user.location && (
          <div className="flex items-center gap-1 mt-2 dark:text-gray-300">
            <IoLocationOutline size={20} />
            {user.location}
          </div>
        )}
        {user.email && (
          <div className="flex items-center gap-1 mt-2 dark:text-gray-300">
            <HiOutlineMail size={20} />
            <a
              href={`mailto:${user.email}`}
              className="hover:underline hover:text-gray-800 hover:dark:text-white"
            >
              {user.email}
            </a>
          </div>
        )}
        {user.websiteUrl && (
          <div className="flex items-center gap-1 mt-2 dark:text-gray-300">
            <BsLink45Deg size={22} />
            <a
              href={`https://${user.websiteUrl}`}
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:text-gray-800 dark:hover:text-white"
            >
              {user.websiteUrl}
            </a>
          </div>
        )}

        {user.socialAccounts?.nodes?.map((social)=>(
          <div key={social.displayName} className="flex items-center gap-2 mt-2 dark:text-gray-300">
            <img alt='logo' width={20} height={20} src={`https://www.google.com/s2/favicons?sz=64&domain_url=${getApexDomain(social.url)}`}/>
            <a 
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:text-gray-800 dark:hover:text-white"
            >
              {PreProcessSocialName(social)}
            </a>
          </div>
        ))}

      </div>
    </motion.div>
  );
};

export default ProfileInfo;
