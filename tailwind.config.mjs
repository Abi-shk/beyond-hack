/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#CAFA19",
      },
      screens: {
        "custom-lg": "1370px",
      },
    },
    fontFamily: {
      pixels: ["pixels", "sans-sheriff"],
      tomorrow: ["tomorrow", "sans-sheriff"],
    },
  },
  plugins: [],
};
