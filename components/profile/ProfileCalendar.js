import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { motion } from "framer-motion";

const explicitTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#39d353", "#26a641", "#006d32", "#0e4429", "#161b22"],
};

const ProfileCalendar = ({ username }) => {
  return (
    <CalenderWrap
      className="card-item flex flex-col gap-3 items-center p-3"
      transition={{ duration: 1 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <p className="font-bold">
        <a href={`https://github.com/${username}`}>{"@" + username}</a> on
        GitHub
      </p>
      <GitHubCalendar username={username} fontSize={18} theme={explicitTheme}>
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
    </CalenderWrap>
  );
};

const CalenderWrap = styled(motion.div)`
  .react-activity-calendar__count {
    @media only screen and (max-width: 600px) {
      font-size: 15px;
    }
  }

  .react-activity-calendar__legend-colors {
    @media only screen and (max-width: 600px) {
      span {
        display: none;
      }

      svg {
        width: 10px;
        height: 10px;
      }
    }
  }
`;

export default ProfileCalendar;
