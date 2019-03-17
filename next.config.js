const withSass = require('@zeit/next-sass');
const fs = require('fs');

module.exports = withSass({
    cssModules: true,
    exportPathMap: (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => {
        if (!dev) {
            fs.copyFileSync(`${dir}/build/CNAME`, `${outDir}/CNAME`);
            fs.copyFileSync(`${dir}/build/.nojekyll`, `${outDir}/.nojekyll`);
        }

        return {
            '/': { page: '/' },
            '/background': { page: '/background' },
            '/services': { page: '/services' },
            '/contact': { page: '/contact' }
        };
    }
});
