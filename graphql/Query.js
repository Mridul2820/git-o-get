import { gql } from "@apollo/client";

export const GET_USER = gql`
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
      socialAccounts(first: 10) {
        totalCount
        nodes {
          displayName 
          url
        }
      }
      twitterUsername
      email
      following {
        totalCount
      }
      pullRequests {
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
      repositories(
        orderBy: { field: UPDATED_AT, direction: DESC }
        ownerAffiliations: OWNER
        isFork: false
        privacy: PUBLIC
        first: 100
      ) {
        totalCount
        nodes {
          name
          url
          stargazerCount
          forkCount
          languages(first: 20) {
            edges {
              size
              node {
                name
                color
              }
            }
          }
        }
      }
      gists(
        orderBy: { field: UPDATED_AT, direction: DESC }
        privacy: PUBLIC
        first: 100
      ) {
        totalCount
      }
      pinnedItems(types: REPOSITORY, first: 100) {
        nodes {
          ... on Repository {
            isPrivate
            isFork
            isTemplate
            isArchived
            url
            forks {
              totalCount
            }
            stargazers {
              totalCount
            }
            name
            description
            languages(orderBy: { field: SIZE, direction: DESC }, first: 1) {
              nodes {
                color
                id
                name
              }
            }
          }
        }
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
