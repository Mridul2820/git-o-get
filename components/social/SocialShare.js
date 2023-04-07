import styled from "styled-components";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { useState } from "react";

const SocialShare = ({ username }) => {
  const [copySuccess, setCopySuccess] = useState("Copy to Clipboard");

  const { SITE_URL } = process.env;
  const shareText = `Check out ${username}'s GitHub profile!`;
  const shareUrl = `${SITE_URL}/profile/${username}`;

  // copy function
  const copyToClipBoard = (copyMe) => {
    //Chrome
    if (navigator.clipboard != undefined) {
      navigator.clipboard.writeText(copyMe).then(() => {
        setCopySuccess("Copied!");
      });
    }

    // Internet Explorer
    else if (window.clipboardData) {
      window.clipboardData.setData("Text", copyMe);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4 mb-4">
      <p className="text-center text-2xl font-bold select-none">Share Card</p>

      <SocialWrap className="flex justify-center items-center gap-4">
        <a
          className="twitter share-item"
          href={`http://twitter.com/share?text=${shareText}&url=${shareUrl}`}
          target="new"
          data-social-type="vertical"
          data-social-tool="twitter"
          data-short-text="Tweet"
          data-long-text="Share with Twitter"
          title="Share in Twitter"
        >
          <FaTwitter size="20px" />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
          target="new"
          className="linkedin share-item"
        >
          <FaLinkedin size="20px" />
        </a>

        <CopyLink
          onClick={() => copyToClipBoard(`${shareUrl}`)}
          onMouseEnter={() => setCopySuccess("Copy to Clipboard")}
          className="copy share-item"
        >
          <BiLinkAlt size="20px" />
          <CopyMessage className="absolute whitespace-nowrap text-sm rounded-sm shadow-md bg-purple-mid">
            {copySuccess}
          </CopyMessage>
        </CopyLink>
      </SocialWrap>
    </div>
  );
};

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
`;

const CopyMessage = styled.div`
  top: -10px;
  opacity: 0;
  visibility: hidden;
  padding: 3px 8px;
  transition: all 0.5s;

  @media screen and (max-width: 760px) {
    right: 0;
  }
`;

const CopyLink = styled.a`
  position: relative;

  &:hover {
    ${CopyMessage} {
      top: -36px;
      opacity: 1;
      visibility: visible;
    }
  }

  &.copy {
    background-color: #34465d;
  }
`;

export default SocialShare;
