import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/Query';
import ProfileInfo from '../components/ProfileInfo';

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
        <div className='py-10 px-5'>
            <ProfileInfo 
                user={user}
            />
        </div>
    )
}

export default Home
