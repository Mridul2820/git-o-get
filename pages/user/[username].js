import React from 'react'
import dynamic from 'next/dynamic';

// GQL
import { GET_USER } from '../../graphql/Query';
import { client } from '../../client';

const ProfileInfo = dynamic(() => import('../../components/profile/ProfileInfo'));
const LanguagePie = dynamic(() => import('../../components/graphs/LanguagePie'));
const ProfileNums = dynamic(() => import('../../components/profile/ProfileNums'));
const ProfileCalendar = dynamic(() => import('../../components/profile/ProfileCalendar'));

const UserName = ({ user }) => {

    return (
        <div className='flex flex-col md:flex-row gap-5 justify-start p-5'>
            <div className="max-w-[420px] w-full flex gap-5 flex-col">
                <ProfileInfo 
                    user={user}
                />
                <ProfileNums 
                    followers={user.followers.totalCount}
                    following={user.following.totalCount}
                    total_repos={user.repositories.totalCount}
                    total_gists={user.gists.totalCount}
                />

            </div>
            <div className="h-full w-full flex flex-col gap-5">
                <LanguagePie 
                    repositories={user.repositories.nodes}
                />
                <ProfileCalendar username={user.login} />
            </div>
        </div>
    )
}

export async function getServerSideProps({ params }) {
  
    const { data } = await client.query({
        query: GET_USER,
        variables: {
            username: params.username,
        }
    });

    return {
        props: {
            user: data.user,
        },
    }
}

export default UserName
