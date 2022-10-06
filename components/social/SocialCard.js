import React from 'react';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { BsFillCloudDownloadFill } from 'react-icons/bs';
import styled from 'styled-components';
import SocialShare from './SocialShare';
import PuffLoader from '../loader/PuffLoader';
import { motion } from 'framer-motion';

const SocialCard = ({ ogImageUrl, username, loading }) => {
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  return (
    <motion.div
      className="flex flex-col justify-between gap-4 py-3 px-3 md:px-5 shadow-bs1 rounded-md h-full w-full min-h-[350px] bg-white"
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
          <div className="flex flex-col justify-center gap-3">
            <p className="text-center text-xl font-semibold">Social Card</p>
            <CradImage className="relative rounded-md shadow-bs5 hover:shadow-bs2 transition-all duration-200 border-2 border-slate-300">
              <img
                src={ogImageUrl}
                alt="Social card"
                className="object-contain w-full "
              />
              <button
                className="download bg-purple-500 text-white p-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full cursor-pointer"
                onClick={() => handleDownload(ogImageUrl, username + '.jpg')}
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
`;

export default SocialCard;
