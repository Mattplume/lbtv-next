import type { Config } from "tailwindcss";

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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkColor: "var(--darkColor)",
        navLink: "white",
        navLinkHover: "red",
        cardShadow: "0 1 8 2 rgba(17 20 41 0.6)"
      },
      transitionProperty: {
        colors: "color",
      },
    },
  },
  plugins: [],
} satisfies Config;