import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { BsCodeSquare } from "react-icons/bs";
import { GoRepo } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { AiOutlinePullRequest } from "react-icons/ai";
import { VscIssues } from "react-icons/vsc";

const ProfileNums = ({
  followers,
  following,
  total_repos,
  total_gists,
  pullRequests,
  issues,
}) => {
  const items = [
    {
      id: 1,
      icon: <FiUsers size={24} />,
      label: "Followers",
      title: "Total Followers",
      value: followers,
      color: "green",
    },
    {
      id: 2,
      icon: <FiUserPlus size={24} />,
      label: "Following",
      title: "Total Following",
      value: following,
      color: "purple",
    },
    {
      id: 3,
      icon: <AiOutlinePullRequest size={24} />,
      label: "PRs",
      title: "Total Pull Requests",
      value: pullRequests,
      color: "blue",
    },
    {
      id: 4,
      icon: <VscIssues size={24} />,
      label: "Issues",
      title: "Total Issues",
      value: issues,
      color: "red",
    },
    {
      id: 5,
      icon: <GoRepo size={24} />,
      label: "Repos",
      title: "Total Repos",
      value: total_repos,
      color: "pink",
    },
    {
      id: 6,
      icon: <BsCodeSquare size={24} />,
      label: "Gists",
      title: "Total Gists",
      value: total_gists,
      color: "yellow",
    },
  ];

  return (
    <motion.div
      className="card-item w-full p-5 dark:border-gray-700"
      transition={{ duration: 1 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <p className="text-center mb-5 text-xl font-semibold">User Stats</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {items.map((item) => (
          <div
            key={uuidv4()}
            className="px-5 py-3 flex flex-col justify-between items-center rounded-md shadow-bs5 hover:shadow-bs2 transition-all duration-200 p-2 border-2 border-slate-300 cursor-default dark:bg-dark-gray dark:text-white dark:border-gray-700"
            title={item.title}
          >
            <Icon className={item.color}>{item.icon}</Icon>
            <p className="text-2xl font-bold mt-2 -mb-1">{item.value}</p>
            <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Icon = styled.span`
  padding: 12px;
  border-radius: 999px;

  &.pink {
    background: #ffe0f0;
    color: #da4a91;
  }
  &.green {
    background: #e0fcff;
    color: #2caeba;
  }
  &.purple {
    background: #fae6ff;
    color: #d355fa;
  }
  &.red {
    background: #ffe6e6;
    color: #fa5555;
  }
  &.blue {
    background: #e6e6ff;
    color: #5d55fa;
  }
  &.yellow {
    background: #fffbea;
    color: #f0b429;
  }
`;

export default ProfileNums;
