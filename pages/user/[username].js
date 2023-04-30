import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { v2 as cloudinary } from "cloudinary";

// GQL
import { GET_USER } from "../../graphql/Query";
import { client } from "../../client";

import { AppContext } from "../_app";
import { SITE_URL } from "../../constant";

const Navbar = dynamic(() => import("../../components/layout/Navbar"));
const SocialCard = dynamic(() => import("../../components/social/SocialCard"));
const ProfileInfo = dynamic(() =>
  import("../../components/profile/ProfileInfo")
);
const ProfileNums = dynamic(() =>
  import("../../components/profile/ProfileNums")
);
const ProfileFollowers = dynamic(() =>
  import("../../components/profile/ProfileFollowers")
);
const PinnedRepositories = dynamic(() =>
  import("../../components/profile/PinnedRepositories")
);
const ProfileCalendar = dynamic(() =>
  import("../../components/profile/ProfileCalendar")
);
const LanguagePie = dynamic(() =>
  import("../../components/graphs/LanguagePie")
);
const MostForked = dynamic(() => import("../../components/graphs/MostForked"));
const MostStar = dynamic(() => import("../../components/graphs/MostStar"));
const ContributionGraph = dynamic(() =>
  import("../../components/graphs/ContributionGraph")
);
const NotFound = dynamic(() => import("../../components/404/NotFound"));

const UserName = ({ user, ogImageUrl }) => {
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

  if (user === null) return <NotFound />;

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

export default UserName;

export async function getServerSideProps({ params }) {
  const { CLOUD_NAME } = process.env;
  const { BASE_IMAGE_URL } = process.env;

  const { data } = await client.query({
    query: GET_USER,
    variables: {
      username: params.username,
    },
  });
  const errorCode = null;
  let user = [];
  if (data.user !== null) {
    user = data.user;
  }

  cloudinary.config({
    cloud_name: CLOUD_NAME,
  });

  const cloudinaryUrl =
    user &&
    cloudinary.url(BASE_IMAGE_URL, {
      secure: true,
      width: 1012,
      height: 506,
      transformation: [
        {
          fetch_format: "auto",
          quality: "auto",
        },
        {
          overlay: {
            url: user.avatarUrl,
          },
        },
        {
          flags: "layer_apply",
          width: 290,
          height: 290,
          gravity: "north_west",
          x: 50,
          y: 37,
          radius: 290,
        },
        {
          color: "#8e51ff",
          crop: "fit",
          width: 500,
          overlay: {
            font_family: "Source Sans Pro",
            font_size: 50,
            font_weight: "bold",
            text: `@${user.login ? user.login : " "}`,
          },
        },
        {
          color: "#627597",
          crop: "fit",
          width: 500,
          overlay: {
            font_family: "Source Sans Pro",
            font_size: 30,
            font_weight: "semibold",
            text: user.name ? user.name : " ",
          },
        },
        {
          flags: "layer_apply",
          gravity: "north_west",
          y: "h + 18",
        },
        {
          color: "#24292F",
          crop: "fit",
          width: 500,
          overlay: {
            font_family: "Source Sans Pro",
            font_size: 28,
            font_weight: "semibold",
            text: `${user.followers.totalCount} Followers  ·  ${user.following.totalCount} Following`,
            crop: "fit",
          },
        },
        {
          flags: "layer_apply",
          gravity: "north_west",
          y: "h + 15",
        },
        {
          color: "#24292F",
          crop: "fit",
          width: 500,
          overlay: {
            font_family: "Source Sans Pro",
            font_size: 28,
            font_weight: "semibold",
            text: `${user.repositories.totalCount} Public repos  ·  ${user.gists.totalCount} Public Gists`,
            crop: "fit",
          },
        },
        {
          flags: "layer_apply",
          gravity: "north_west",
          y: "h + 15",
        },
        {
          color: "#24292F",
          crop: "fit",
          width: 500,
          overlay: {
            font_family: "Source Sans Pro",
            font_size: 28,
            font_weight: "semibold",
            text: `${user.pullRequests.totalCount} Pull requests  ·  ${user.issues.totalCount} Issues`,
            crop: "fit",
          },
        },
        {
          flags: "layer_apply",
          gravity: "north_west",
          y: "h + 15",
        },
        {
          flags: "layer_apply",
          gravity: "north_west",
          x: 400,
          y: 50,
        },
      ],
    });

  return {
    props: {
      errorCode,
      user: data.user,
      ogImageUrl: cloudinaryUrl,
    },
  };
}
