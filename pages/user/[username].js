import React from 'react'
import dynamic from 'next/dynamic';

// GQL
import { GET_USER } from '../../graphql/Query';
import { client } from '../../client';

const ProfileInfo = dynamic(() => import('../../components/profile/ProfileInfo'));
const ProfileLanguage = dynamic(() => import('../../components/profile/ProfileLanguage'));
const ProfileNums = dynamic(() => import('../../components/profile/ProfileNums'));

const UserName = ({ user }) => {

    return (
        <div className='flex flex-col md:flex-row gap-5 justify-start p-5 min-h-[calc(100vh-68px)]'>
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
            <ProfileLanguage 
                repositories={user.repositories.nodes}
            />
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
