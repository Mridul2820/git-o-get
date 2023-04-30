import React from "react";
import RepositoryCard from "./GitHubCard";
import { useTheme } from "next-themes";

const PinnedRepositories = ({ username, pinnedRepositories }) => {
  const { theme } = useTheme();

  return (
    <div className="dark:bg-dark-color dark:text-white dark:border dark:border-gray-700 p-3 shadow-bs1 rounded-md h-full w-full bg-white">
      <p className="text-center mb-5 text-xl font-semibold">
        <div>
          {"@"} {username} Pinned Repositories
        </div>
      </p>
      <div className="flex flex-col gap-4 max-h-[450px] overflow-y-scroll pt-2 pr-5">
        {pinnedRepositories?.nodes.map((repo) => (
          <RepositoryCard repository={repo} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default PinnedRepositories;
