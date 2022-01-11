import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/Query';
import dynamic from 'next/dynamic';

const ProfileInfo = dynamic(() => import('../components/ProfileInfo'));
const ProfileLanguage = dynamic(() => import('../components/ProfileLanguage'));

const Home = () => {
    const { loading, error, data } = useQuery(GET_USER, {
        variables: {
            username: 'Mridul2820',
        },
    });

    if (loading) return <p>loading...</p>;
    if (error) return <p>error...{console.log(error)}</p>;

    const user = data.user

    return (
        <div className='py-10 px-5 h-screen'>
            <ProfileInfo 
                user={user}
            />
            <ProfileLanguage 
                repositories={user.repositories.nodes}
            />
        </div>
    )
}

export default Home
