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
            following {
                totalCount
            }
            followers {
                totalCount
            }
        }
    }
`;