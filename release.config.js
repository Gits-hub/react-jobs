const config = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/git', {
            assets: ['dist/**'],
            message: 'chore(release): ${nextRelease.version}[skip ci] \n\n [${nextRelease.notes}]'
        }],
        '@semantic-release/github'
        // '@semantic-release/npm',
        // '@semantic-release/changelog',
        // '@semantic-release/exec',
        // '@semantic-release/changelog/conventional-commits',
    ]
};

// eslint-disable-next-line no-undef
module.exports = config;