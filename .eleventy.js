module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./src/_sass/");
	eleventyConfig.addWatchTarget("./src/_js/");
	eleventyConfig.addWatchTarget("./src/_images/");

	eleventyConfig.addPassthroughCopy({ "./src/_js/": "assets/js" });
	eleventyConfig.addPassthroughCopy({ "./src/_images/": "assets/images" });

	return {
		markdownTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "public",
		},
	};
};
