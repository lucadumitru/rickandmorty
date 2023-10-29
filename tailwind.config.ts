import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        arrowIcon: "url('/public/icons/arrow-drop-down.svg')",
        chevronRight: "url('/public/icons/chevron-right.svg')"
      },
      boxShadow: {
        buttonShadow:
          "0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 3px 5px 0px rgba(0, 0, 0, 0.20)",
        cardShadow:
          "0px 2px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.20)",
        headerShadow: "2px 0px 8px 2px rgba(0, 0, 0, 0.10)"
      },
      colors: {
        myGray: "rgba(0, 0, 0, 0.50)",
        lightGray: "#EDEDED",
        textGray: "#6E798C"
      },
      screens: {
        xsm: "480px"
      }
    }
  },
  plugins: []
};
export default config;
