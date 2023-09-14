import React from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import styled from "styled-components";
import SocialShare from "./SocialShare";
import PuffLoader from "../loader/PuffLoader";
import { motion } from "framer-motion";

const SocialCard = ({ ogImageUrl, username, loading }) => {
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  return (
    <motion.div
      className="card-item flex flex-col justify-between gap-4 py-3 px-3 md:px-5 md:min-h-[442px]"
      transition={{ duration: 1 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <PuffLoader />
        </div>
      ) : (
        <>
          <div className="dark:bg-dark-color dark:text-white flex flex-col justify-center gap-3">
            <p className="text-center text-xl font-semibold">Social Card</p>
            <CradImage className="relative rounded-md shadow-bs5 hover:shadow-bs2 transition-all duration-200 border-2 border-slate-300">
              <img
                src={ogImageUrl}
                alt="Social card"
                className="object-contain w-full "
              />
              <button
                className="download bg-purple-500 text-white p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer"
                onClick={() => handleDownload(ogImageUrl, username + ".jpg")}
              >
                <BsFillCloudDownloadFill size={44} />
              </button>
            </CradImage>
            <SocialShare username={username} />
          </div>
        </>
      )}
    </motion.div>
  );
};

const CradImage = styled.div`
  .download {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;

    &:hover {
      opacity: 1 !important;
    }
  }

  &:hover {
    .download {
      opacity: 0.9;
      visibility: visible;
    }
  }

  position: relative;
  padding-bottom: calc(630 / 1200 * 100%);
  animation: placeholder ease-in-out 2s infinite;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }

  @keyframes placeholder {
    0% {
      background-color: #eee;
    }
    50% {
      background-color: #ccc;
    }
    100% {
      background-color: #eee;
    }
  }
`;

export default SocialCard;
