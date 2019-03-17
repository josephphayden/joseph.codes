const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    exportPathMap: () => ({
        '/': { page: '/' },
        '/background': { page: '/background' },
        '/services': { page: '/services' },
        '/contact': { page: '/contact' }
    })
});
