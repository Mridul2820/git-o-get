import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { RiCheckDoubleLine } from "react-icons/ri";
import {
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { AnimatePresence, motion } from "framer-motion";

import { SITE_URL } from "../../constant";

const SocialShare = ({ username }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  // copy function
  const copyToClipBoard = (copyMe) => {
    //Chrome
    if (navigator.clipboard != undefined) {
      navigator.clipboard.writeText(copyMe).then(function () {
        setAlert(true);
      });
    }

    // Internet Explorer
    else if (window.clipboardData) {
      window.clipboardData.setData("Text", copyMe);
    }
  };

  const shareText = `Check out ${username}'s GitHub profile!`;
  const shareUrl = `${SITE_URL}/user/${username}`;

  return (
    <div className="flex justify-center items-center flex-col gap-4 mb-4">
      <p className="text-center text-2xl font-bold select-none">Share Card</p>

      <SocialWrap className="flex justify-center items-center gap-4">
        <ShareItem>
          <ShareCircle className="twitter" name="Share in Twitter">
            <TwitterShareButton url={shareUrl} title={shareText}>
              <FaTwitter size={20} />
            </TwitterShareButton>
          </ShareCircle>
        </ShareItem>
        <ShareItem>
          <ShareCircle className="whatsapp" name="Share in Whatsapp">
            <WhatsappShareButton url={shareUrl} title={shareText} separator=" ">
              <FaWhatsapp size={20} />
            </WhatsappShareButton>
          </ShareCircle>
        </ShareItem>
        <ShareItem>
          <ShareCircle className="linkedin" name="Share in Linkedin">
            <LinkedinShareButton
              url={shareUrl}
              title={shareText}
              source="mridul.tech"
            >
              <FaLinkedin size={20} />
            </LinkedinShareButton>
          </ShareCircle>
        </ShareItem>
        <ShareItem>
          <CopyLink onClick={() => copyToClipBoard(shareUrl)} className="copy">
            {alert && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.2 }}
                >
                  <RiCheckDoubleLine size={22} />
                </motion.div>
              </AnimatePresence>
            )}
            {!alert && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.2 }}
                >
                  <BiLinkAlt size={20} />
                </motion.div>
              </AnimatePresence>
            )}
          </CopyLink>
        </ShareItem>
      </SocialWrap>
    </div>
  );
};

export default SocialShare;

export const SocialWrap = styled.div`
  .facebook {
    background-color: #1877f2;
  }

  .twitter {
    background-color: #1da1f2;
  }

  .linkedin {
    background-color: #0a66c2;
  }

  .whatsapp {
    background-color: #25d366;
  }

  .copy {
    background-color: #34465d;
  }
`;

const ShareItem = styled.div`
  list-style: none;
`;

const ShareCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 1px solid #d1d1d1;
  margin: 0 5px;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: #fff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  }
`;

const CopyMessage = styled.div`
  position: absolute;
  white-space: nowrap;
  top: -10px;
  opacity: 0;
  visibility: hidden;
  font-size: 12px;
  background-color: #34465d;
  padding: 3px 8px;
  border-radius: 3px;
  transition: all 0.5s;

  @media screen and (max-width: 760px) {
    right: 0;
  }
`;

const CopyLink = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 1px solid #d1d1d1;
  margin: 0 5px;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: #fff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    ${CopyMessage} {
      top: -28px;
      opacity: 1;
      visibility: visible;
    }
  }

  &.copy {
    background-color: #34465d;
  }
`;
