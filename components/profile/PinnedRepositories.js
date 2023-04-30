import React from "react";
import RepositoryCard from "./GitHubCard";
import { useTheme } from "next-themes";

const PinnedRepositories = ({ username, pinnedRepositories }) => {
  const { theme } = useTheme();

  return (
    <div className="card-item p-5">
      <p className="text-center mb-5 text-xl font-semibold">
        <div>
          {"@"} {username} Pinned Repositories
        </div>
      </p>
      <div className="flex flex-wrap justify-center gap-4 max-h-[450px] overflow-y-scroll pt-2 pr-5">
        {pinnedRepositories?.nodes.map((repo) => (
          <RepositoryCard repository={repo} theme={theme} key={repo.id} />
        ))}
      </div>
    </div>
  );
};

export default PinnedRepositories;
