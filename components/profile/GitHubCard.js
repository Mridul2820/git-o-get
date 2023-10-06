import React from "react";

import RepoIcon from "../svgs/RepoIcon";
import StarIcon from "../svgs/StarIcon";
import ForkIcon from "../svgs/ForkIcon";

import { numberFormatter } from "../../helper/formatNumber";

const RepositoryCard = ({ repository, theme }) => {
  const getType = () => {
    if (!repository?.isPrivate && repository?.isTemplate) {
      return "Public template";
    } else if (repository?.isPrivate && repository?.isTemplate) {
      return "Private template";
    } else if (repository?.isPrivate) {
      return "Private";
    } else if (!repository?.isPrivate) {
      return "Public";
    } else if (repository?.isFork) {
      return "Forked";
    }
  };

  return (
    <div className="flex justify-between flex-col rounded-md p-4 w-80 h-44 border-2 border-border-default dark:border-border-dark bg-canvas-default dark:bg-canvas-dark">
      <div>
        <div className="flex items-center gap-2">
          <RepoIcon theme={theme} />
          <a
            href={repository?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-default dark:text-accent-dark hover:underline text-sm font-semibold"
            title={repository?.url}
          >
            <p className="leading-5">{repository?.name}</p>
          </a>
          <span className="px-2 py-0.5 border-[1px] border-border-default dark:border-border-dark text-xs text-muted-default dark:text-muted-dark rounded-full font-medium">
            {getType()}
          </span>
        </div>
        <p className="text-xs text-muted-default line-clamp-3 dark:text-muted-dark mt-2 leading-5">
          {repository?.description}
        </p>
      </div>
      <p className="flex items-center gap-4 mt-2">
        {repository?.languages?.nodes?.length > 0 && (
          <>
            <span
              className="h-3 w-3 rounded-full"
              style={{
                background: repository?.languages?.nodes[0]?.color,
              }}
            />
            <span className="text-xs text-muted-default dark:text-muted-dark leading-5 -ml-3">
              {repository?.languages?.nodes[0]?.name}
            </span>
          </>
        )}
        <a
          href={`${repository?.url}/stargazers`}
          className="flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StarIcon theme={theme} />
          <span className="text-xs text-muted-default dark:text-muted-dark leading-5">
            {numberFormatter(repository?.stargazers?.totalCount, 1)}
          </span>
        </a>
        <a
          href={`${repository?.url}/network/members`}
          className="flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ForkIcon theme={theme} />
          <span className="text-xs text-muted-default dark:text-muted-dark leading-5">
            {numberFormatter(repository?.forks?.totalCount, 1)}
          </span>
        </a>
      </p>
    </div>
  );
};

export default RepositoryCard;
