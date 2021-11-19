const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
// Require the package we just installed
const axios = require("axios");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "rick",
    functionsDir: "./netlify/functions/",
  });

  eleventyConfig.addFilter("rickList", (name) => {
    const list = axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=alive`
      )
      .then((res) => {
        console.log(res.data.results);
        let i = res.data.results
        return i
      })
      .catch((err) => console.log(err));

      return list 
  });

 
};
