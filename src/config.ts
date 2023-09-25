// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Manuel Reichel";
export const SITE_DESCRIPTION =
  "A programming blog with content related to web development and DevOps, utilities, among others";
export const MY_NAME = "Manuel Reichel";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
