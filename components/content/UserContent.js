import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { SITE_URL } from "../../constant";
import { AppContext } from "../../pages/_app";

const Navbar = dynamic(() => import("../layout/Navbar"));
const ProfileInfo = dynamic(() => import("../profile/ProfileInfo"));
const ProfileNums = dynamic(() => import("../profile/ProfileNums"));
const LanguagePie = dynamic(() => import("../graphs/LanguagePie"));
const SocialCard = dynamic(() => import("../social/SocialCard"));
const ProfileCalendar = dynamic(() => import("../profile/ProfileCalendar"));
const ProfileFollowers = dynamic(() => import("../profile/ProfileFollowers"));
const MostForked = dynamic(() => import("../graphs/MostForked"));
const MostStar = dynamic(() => import("../graphs/MostStar"));
const PinnedRepositories = dynamic(() =>
  import("../profile/PinnedRepositories")
);
const ContributionGraph = dynamic(() => import("../graphs/ContributionGraph"));

const UserContent = ({ user, ogImageUrl }) => {
  const { toggleLoading } = useContext(AppContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [router.query.username]);

  useEffect(() => {
    toggleLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const SEO = {
    title: `${user?.name ? user.name : "User"} (@${
      user?.login
    }) : Github Profile Stats and Graphs in One Place`,
    description: `${user?.name} (@${user?.login}) Github Profile Stats, Languge Graph, Social Card, Contribution Graph, Repository Stats, Graphs and more`,
    canonical: `${SITE_URL}/user/${user?.login}`,

    openGraph: {
      title: `${user?.name ? user.name : "User"} (@${
        user?.login
      }) : Github Profile Stats and Graphs in One Place`,
      description: `${user?.name} (@${user?.login}) Github Profile Stats, Languge Graph, Social Card, Contribution Graph, Repository Stats, Graphs and more`,
      url: `${SITE_URL}/user/${user?.login}`,

      images: [
        {
          url: ogImageUrl,
          width: 2024,
          height: 1012,
          alt: user?.name,
        },
      ],
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Navbar />
      <main className="dark:bg-dark-color dark:text-white px-5 md:px-10 py-5 md:py-10 mx-auto min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="w-full flex gap-5 flex-col">
            <ProfileInfo user={user} />
            <ProfileNums
              followers={user?.followers?.totalCount}
              following={user?.following?.totalCount}
              total_repos={user?.repositories?.totalCount}
              total_gists={user?.gists?.totalCount}
              pullRequests={user?.pullRequests?.totalCount}
              issues={user?.issues?.totalCount}
            />
          </div>
          <div className="h-full w-full flex flex-col gap-5 col-span-1 lg:col-span-2">
            <div className="flex flex-col lg:flex-row gap-5">
              <LanguagePie repositories={user?.repositories?.nodes} />
              <SocialCard
                username={user?.login}
                ogImageUrl={ogImageUrl}
                loading={loading}
              />
            </div>
            <ProfileCalendar username={user?.login} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <ProfileFollowers
            followers={user?.followers}
            username={user?.login}
          />
          <MostForked repos={user?.repositories?.nodes} />
          <MostStar repos={user?.repositories?.nodes} />
        </div>
        <div className="h-full w-full mt-5">
          <PinnedRepositories
            username={user?.login}
            pinnedRepositories={user?.pinnedItems}
          />
        </div>
        <div className="h-full w-full mt-5">
          <ContributionGraph
            weeks={user?.contributionsCollection?.contributionCalendar?.weeks}
            username={user?.login}
          />
        </div>
      </main>
    </>
  );
};

export default UserContent;
