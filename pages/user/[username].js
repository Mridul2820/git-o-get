import React from 'react'
import dynamic from 'next/dynamic';

// GQL
import { GET_USER } from '../../graphql/Query';
import { client } from '../../client';

const ProfileInfo = dynamic(() => import('../../components/profile/ProfileInfo'));
const ProfileLanguage = dynamic(() => import('../../components/profile/ProfileLanguage'));

const UserName = ({ user }) => {

    return (
        <div className='py-5 px-5 min-h-[calc(100vh-68px)]'>
            <ProfileInfo 
                user={user}
            />
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
