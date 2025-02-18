import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        footer_bg: "url(/footerBg.webp)",
      },
      boxShadow: {
        aboutBox: "0px 0px 8px 0px rgba(40, 149, 202, 0.25)",
      },

      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        Black: "var(--black)",
        Green: "var(--green)",
        primaryLight: "var(--primaryLight)",
         borderStroke: "var(--borderStroke)",
      },
      fontSize: {
        text_48: [
          "3rem",
          {
            lineHeight: "3.25 rem",
          },
        ],
        text_20 : [
          "1.25rem",
          {
            lineHeight: "1.5rem",
          },
        ]
      },
    },
  },
  plugins: [],
} satisfies Config;
