import React from 'react'
import dynamic from 'next/dynamic';

// GQL
import { GET_USER } from '../../graphql/Query';
import { client } from '../../client';

const ProfileInfo = dynamic(() => import('../../components/profile/ProfileInfo'));
const ProfileNums = dynamic(() => import('../../components/profile/ProfileNums'));
const ProfileCalendar = dynamic(() => import('../../components/profile/ProfileCalendar'));

const LanguagePie = dynamic(() => import('../../components/graphs/LanguagePie'));
const MostForked = dynamic(() => import('../../components/graphs/MostForked'));

const UserName = ({ user }) => {

    return (
        <div className="p-5">
            <div className='flex flex-col md:flex-row gap-5 justify-start'>
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
            <div className="flex flex-col lg:flex-row mt-5">
                <MostForked repos={user.repositories?.nodes} />
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
