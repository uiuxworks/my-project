import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roxborough CF", "serif"],
        sans: ["Bentham", "sans-serif"],
      },
    },
  },
  preflight: {
    // Import external stylesheet
    "@import": `url('https://fonts.cdnfonts.com/css/bentham')`,
    // Declare font face
    "@font-face": [
      {
        fontFamily: "Roxborough CF",
        fontWeight: "300",
        fontStyle: "normal",
        src: 'url(/fonts/RoxboroughCF-Light.woff) format("woff")',
      },
    ],
  },
} as Options;
