import configs from "./configs.js";

// Determine which config to use based on the URL slug.
// e.g. /mn -> configs.mn, /ularbek -> configs.ularbek, / -> configs.ularbek
const _slug =
  typeof window !== "undefined"
    ? window.location.pathname.replace(/^\//, "").split("/")[0]
    : "";
const config = configs[_slug] || configs.ularbek;

export default config;
