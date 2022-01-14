import React from 'react'
import dynamic from 'next/dynamic';
import { v2 as cloudinary } from 'cloudinary';

// GQL
import { GET_USER } from '../../graphql/Query';
import { client } from '../../client';

const Navbar = dynamic(() => import('../../components/nav/Navbar'));
const SocialCard = dynamic(() => import('../../components/social/SocialCard'));

const ProfileInfo = dynamic(() => import('../../components/profile/ProfileInfo'));
const ProfileNums = dynamic(() => import('../../components/profile/ProfileNums'));
const ProfileFollowers = dynamic(() => import('../../components/profile/ProfileFollowers'));

const ProfileCalendar = dynamic(() => import('../../components/profile/ProfileCalendar'));

const LanguagePie = dynamic(() => import('../../components/graphs/LanguagePie'));
const MostForked = dynamic(() => import('../../components/graphs/MostForked'));
const MostStar = dynamic(() => import('../../components/graphs/MostStar'));

const UserName = ({ user, ogImageUrl }) => {
    return (
        <>
        <Navbar />
        <div className="px-5 py-10 max-w-[1500px] mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className="w-full flex gap-5 flex-col">
                    <ProfileInfo 
                        user={user}
                    />
                    <ProfileNums 
                        followers={user.followers.totalCount}
                        following={user.following.totalCount}
                        total_repos={user.repositories.totalCount}
                        total_gists={user.gists.totalCount}
                        pullRequests={user.pullRequests.totalCount}
                        issues={user.issues.totalCount}
                    />
                </div>
                <div className="h-full w-full flex flex-col gap-5 col-span-1 lg:col-span-2">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <LanguagePie 
                            repositories={user.repositories.nodes}
                        />
                        <SocialCard ogImageUrl={ogImageUrl} />
                    </div>
                    <ProfileCalendar username={user.login} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                <ProfileFollowers followers={user.followers} username={user.login} />
                <MostForked repos={user.repositories?.nodes} />
                <MostStar repos={user.repositories?.nodes} />
            </div>
        </div>
        </>
    )
}

export async function getServerSideProps({ params }) {
    const { CLOUD_NAME } = process.env
  
    const { data } = await client.query({
        query: GET_USER,
        variables: {
            username: params.username,
        }
    });

    const user = data.user

    cloudinary.config({
        cloud_name: CLOUD_NAME
    });

    const cloudinaryUrl = user && cloudinary.url('git-o-get/github-social-share-card-background_fieaop', {
        width: 1012,
        height: 506,
        transformation: [
            {
                fetch_format: 'auto',
                quality: 'auto'
            },
            {
                overlay: {
                    url: user.avatarUrl
                }
            },
            {
                flags: 'layer_apply',
                width: 250,
                height: 250,
                gravity: 'north_west',
                x: 150,
                y: 95,
                radius: 250
            },
            {
                color: '#8e51ff',
                crop: 'fit',
                width: 432,
                overlay: {
                    font_family: 'Source Sans Pro',
                    font_size: 60,
                    font_weight: 'bold',
                    text: user.name
                },
            },
            {
                color: '#627597',
                crop: 'fit',
                width: 432,
                overlay: {
                    font_family: 'Source Sans Pro',
                    font_size: 34,
                    font_weight: 'semibold',
                    text: `@${user.login}`
                },
            },
            {
                flags: 'layer_apply',
                gravity: 'north_west',
                y: 'h + 20'
            },
            {
                color: '#24292F',
                crop: 'fit',
                width: 432,
                overlay: {
                    font_family: 'Source Sans Pro',
                    font_size: 28,
                    font_weight: 'semibold',
                    text: `${user.followers.totalCount} Followers  ·  ${user.following.totalCount} Following`,
                    crop: 'fit'
                },
            },
            {
                flags: 'layer_apply',
                gravity: 'north_west',
                y: 'h + 18'
            },
            {
                color: '#24292F',
                crop: 'fit',
                width: 432,
                overlay: {
                    font_family: 'Source Sans Pro',
                    font_size: 28,
                    font_weight: 'semibold',
                    text: `${user.followers.totalCount} Public repos  ·  ${user.gists.totalCount} Public Gists`,
                    crop: 'fit'
                },
            },
            {
                flags: 'layer_apply',
                gravity: 'north_west',
                y: 'h + 18'
            },
            {
                color: '#24292F',
                crop: 'fit',
                width: 432,
                overlay: {
                    font_family: 'Source Sans Pro',
                    font_size: 28,
                    font_weight: 'semibold',
                    text: `${user.pullRequests.totalCount} Pull requests  ·  ${user.issues.totalCount} Issues`,
                    crop: 'fit'
                },
            },
            {
                flags: 'layer_apply',
                gravity: 'north_west',
                y: 'h + 18'
            },
            {
                flags: 'layer_apply',
                gravity: 'north_west',
                x: 506,
                y: 80
            }
        ]
    });

    return {
        props: {
            user: data.user,
            ogImageUrl: cloudinaryUrl,
        },
    }
}

export default UserName
