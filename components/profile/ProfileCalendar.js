import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

const ProfileCalendar = ({ username }) => {
    return (
        <CalenderWrap className='flex flex-col gap-3 items-center p-3 shadow-bs1 rounded-md w-full bg-white'>
            <p className="font-bold">
                <a href={`https://github.com/${username}`}>{'@' + username}</a> on GitHub
            </p>
            <GitHubCalendar username={username} fontSize={18}>
                <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
        </CalenderWrap>
    )
}

const CalenderWrap = styled.div`
    .react-activity-calendar__legend-colors {
        @media only screen and (max-width: 600px){
            display: none;
        }
    }
`

export default ProfileCalendar
