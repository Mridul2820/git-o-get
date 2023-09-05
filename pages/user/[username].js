import React from "react";
import dynamic from "next/dynamic";
import { v2 as cloudinary } from "cloudinary";

import { GET_USER } from "../../graphql/Query";
import { client } from "../../client";

const UserContent = dynamic(() =>
  import("../../components/content/UserContent")
);
const NotFound = dynamic(() => import("../../components/404/NotFound"));

const UserName = ({ user, ogImageUrl }) => {
  if (user === null) return <NotFound />;

  return <UserContent user={user} ogImageUrl={ogImageUrl} />;
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
      user: data.user,
      ogImageUrl: cloudinaryUrl,
    },
  };
}
