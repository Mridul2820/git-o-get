<p align="center">
    <img src="/public/logo.png" align="center" width="80"/>
</p>

<div align="center">
    <h1>Git o Get</h1>
</div>

<br />

<div align="center">
    <p>Quick Links</p>
    <br />
    <a href="CONTRIBUTING.md">Contributing Guide</a> •
    <a href="https://github.com/Mridul2820/git-o-get/issues">Issues</a> •
    <a href="https://github.com/Mridul2820/git-o-get/pulls">Pull Requests</a> •
    <a href="LICENSE">License</a>
</div>

<br />
<br />

## What it does 🤔

- Just seach your github username and get your profile data in a different way
- This app also generates a shareable card dynamically
- The card is downloadable also

## Contents 🧧

- Profile Details
- Language Crad
- Shareable Social Card
- Profile Stats
- Profile Contribution Calander
- List of Followers(last 100)
- Pinned Repositories
- Most forked Repository Graph
- Most Stared Repository Graph

## Tech Stack 👾

- [Next JS](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Recoil](https://recoiljs.org/)
- [Styled Components](https://styled-components.com/)
- [Appolo GraphQL](https://www.apollographql.com/)
- [Github API](https://docs.github.com/en/graphql)
- [Recharts](https://recharts.org/en-US/)
- [Cloudinary](https://cloudinary.com/)

## Demo 🌍

This app is Deployed to Vercel
<br />
[View Demo](https://git-o-get.mridul.tech/)

## SnapShots 💻

### Home Page

<img src="/public/assets/app-home.png" align="center"/>

### User Detail Page

<img src="/public/assets/app-snapshot.png" align="center"/>

## Prerequisites '✔

Required to install and run the software:

- [Node JS 14+](https://nodejs.org/)
- [NPM](https://www.npmjs.com/get-npm)
- [Cloudinary](https://cloudinary.com/)

## Run Locally 🤠

1. Clone the respository locally

```
git clone https://github.com/Mridul2820/git-o-get.git
```

2. Create a `.env` file in the root directory

```
GITHUB_TOKEN = <YOUR_GITHUB_TOKEN>
CLOUD_NAME = <YOUR_CLOUDINARY_CLOUD_NAME>
BASE_IMAGE_URL = <URL_FOR_BASE_IMAGE>
```

- **`GITHUB_TOKEN`: Get your `Personal Access Token` by signing in to your github account and then go to your setting -> developer setting -> Personal access tokens -> Generate new token**
- **`CLOUD_NAME`: Create a [Cloudinary](https://cloudinary.com/users/register/free) account and Get your `CLOUD NAME`**
- **`BASE_IMAGE_URL`: Upload [Base Image](https://github.com/Mridul2820/git-o-get/blob/main/public/assets/github-social.jpg) in Your Cloudinary Cloud and Get the public Id**

3. Install the `node_modules`

```
npm install
```

4. Start the Server

```
npm run dev
```

## How to contribute? 💻

<a href="CONTRIBUTING.md">Contributing Guide</a>

## ⭐ Project Contributors

<a href="https://github.com/Mridul2820/git-o-get/graphs/contributors" align="center">
  <img src="https://contrib.rocks/image?repo=Mridul2820/git-o-get" />
</a>
