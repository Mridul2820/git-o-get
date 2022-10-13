import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { useTheme } from 'next-themes';

const useColorTheme = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return {
      level4: '#39d353',
      level3: '#26a641',
      level2: '#006d32',
      level1: '#0e4429',
      level0: '#161b22',
    };
  } else {
    return {
      level4: '#216e39',
      level3: '#30a14e',
      level2: '#40c463',
      level1: '#9be9a8',
      level0: '#ebedf0',
    };
  }
};

const ProfileCalendar = ({ username }) => {
  return (
    <CalenderWrap
      className="dark:bg-dark-color dark:text-white dark:border dark:border-gray-700 flex flex-col gap-3 items-center p-3 shadow-bs1 rounded-md w-full bg-white"
      transition={{ duration: 1 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <p className="font-bold">
        <a href={`https://github.com/${username}`}>{'@' + username}</a> on
        GitHub
      </p>
      <GitHubCalendar username={username} fontSize={18} theme={useColorTheme()}>
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
    </CalenderWrap>
  );
};

const CalenderWrap = styled(motion.div)`
  .react-activity-calendar__legend-colors {
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;

export default ProfileCalendar;
