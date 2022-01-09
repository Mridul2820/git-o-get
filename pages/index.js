import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/Query';
import ProfileInfo from '../components/ProfileInfo';

const Home = () => {
    const { loading, error, data } = useQuery(GET_USER, {
        variables: {
            username: 'mridul2820',
        },
    });

    if (loading) return <p>loading...</p>;
    if (error) return <p>error...</p>;

    const user = data.user

    return (
        <div className='font-bold'>
            <ProfileInfo 
                user={user}
            />
        </div>
    )
}

export default Home
