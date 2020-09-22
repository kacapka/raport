const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withImages(
    withSass({
        webpack: config => {
            config.module.rules.push({
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            });
            config.node = {
                fs: "empty"
            };
            return config;
        },
        exportPathMap: function () {
            return {
                "/": { page: "/" },
                "/about-poland": { page: "/about-poland" },
                "/financial-institutions-in-poland": { page: "/financial-institutions-in-poland" },
                "/regulatory-and-supervisory-authorities": { page: "/regulatory-and-supervisory-authorities" },
                "/accelerators-and-acceleration-programmes": { page: "/accelerators-and-acceleration-programmes" },
                "/innovation-hub-programme": { page: "/innovation-hub-programme" },
                "/map-of-polish-fintechs": { page: "/map-of-polish-fintechs" },
                "/partners": { page: "/partners" },
                "/ue-financial-market": { page: "/ue-financial-market" },
                "/the-polish-financial-sector": { page: "/the-polish-financial-sector" },
                "/privacy-policy": { page: "/privacy-policy" },
                "/contact": { page: "/contact" },
            };
        }
    })
);
