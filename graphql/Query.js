import { gql } from "@apollo/client";

export const GET_USER = gql `
    query searchUser($username: String!) {
        user(login: $username) {
            avatarUrl
            name
            url
            login
            bio
            websiteUrl
            location
            company
            twitterUsername
            email
            following {
                totalCount
            }
            pullRequests{
                totalCount
            }
            issues {
                totalCount
            }
            followers(last: 100) {
                totalCount
                nodes {
                    avatarUrl
                    name
                    id
                    login
                    url
                }
            }
            repositories(orderBy: {field: UPDATED_AT, direction: DESC}, ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC, first: 100){
                totalCount
                nodes {
                    name
                    url
                    stargazerCount
                    forkCount
                    languages(first: 20) {
                        edges{
                            size
                            node {
                                name
                                color
                            }
                        }
                    }
                }
            }
            gists(orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC, first: 100){
                totalCount
            }
            contributionsCollection {
                contributionCalendar {
                    totalContributions
                    weeks {
                        contributionDays {
                            date
                            contributionCount
                        }
                    }
                }
            }
        }
    }
`;