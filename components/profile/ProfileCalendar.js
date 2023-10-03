import React from "react";
import GitHubCalendar from "react-github-calendar";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { formatDate } from "../../helper/formatDate";
import { useTheme } from "next-themes";

const explicitTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const ProfileCalendar = ({ username }) => {
  const { theme } = useTheme();
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
      <GitHubCalendar
        colorScheme={theme}
        username={username}
        fontSize={18}
        theme={explicitTheme}
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "react-tooltip",
            "data-tooltip-html": `${activity.count} activities on ${formatDate(
              activity.date
            )}`,
          })
        }
      ></GitHubCalendar>
      <ReactTooltip id="react-tooltip" />
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
