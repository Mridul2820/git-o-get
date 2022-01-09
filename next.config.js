const path = require('path')
require('dotenv').config()

module.exports = {
    env: {
        GITHUB_TOKEN: process.env.GITHUB_TOKEN
    },
    publicRuntimeConfig: {},
    images: {
        formats: [
            'image/avif', 
            'image/webp'
        ],
        domains: [
            'localhost', 
            'res.cloudinary.com',
            'inneedstore.com',
            'i0.wp.com',
            'images.pexels.com'
        ]
    },

    webpack: (config, { isServer }) => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')

        return config
    },
}
