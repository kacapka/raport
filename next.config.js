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
                "/regulatory-and-supervisory-authorities": { page: "/regulatory-and-supervisory-authorities" }
            };
        }
    })
);
