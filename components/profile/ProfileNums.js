import React from 'react'
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import styled from 'styled-components';

const ProfileNums = ({ followers, following, total_repos, total_gists }) => {
    const items = [
        {
            id: 1,
            icon: <FiUsers size={24} />,
            label: 'followers',
            value: followers,
            color: 'green',
        },
        {
            id: 2,
            icon: <FiUserPlus size={24} />,
            label: 'following',
            value: following,
            color: 'purple',
        },
        {
            id: 3,
            icon: <GoRepo size={24} />,
            label: 'repos',
            value: total_repos,
            color: 'pink',
        },
        {
            id: 4,
            icon: <GoGist size={24} />,
            label: 'gists',
            value: total_gists,
            color: 'yellow',
        },
    ];

    return (
        <div className='shadow-bs1 rounded-md w-full'>
            <div className="p-5 grid grid-cols-2 gap-5">
                {items.map((item) => (
                    <div key={item.id} className="px-5 py-3 flex flex-col justify-between items-center shadow-bs5">
                        <Icon className={item.color}>{item.icon}</Icon>
                        <p className='text-2xl font-bold mt-2 -mb-1'>{item.value}</p>
                        <p className="text-gray-600">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Icon = styled.span`
    padding: 12px;
    border-radius: 999px;

    &.pink {
        background: #ffe0f0;
        color: #da4a91;
    }
    &.green {
        background: #e0fcff;
        color: #2caeba;
    }
    &.purple {
        background: #e6e6ff;
        color: #5d55fa;
    }
    &.yellow {
        background: #fffbea;
        color: #f0b429;
    }
`

export default ProfileNums
