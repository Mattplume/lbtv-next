import type { Config } from "tailwindcss";
import lineClamp from '@tailwindcss/line-clamp'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      heading: {
        h1 : "40px"
      },
      boxShadow: {
        cardShadow: "var(--cardShadow)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkColor: "var(--darkColor)",
        brandColor: "var(--brandColor)",
        navLink: "white"
      },
      transitionProperty: {
        colors: "color",
      },
    },
  },
    plugins: [lineClamp],
} satisfies Config;