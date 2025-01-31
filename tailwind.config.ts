import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Mukta', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      scale: {
        '10': '0.1',  // 10% scale
        '20': '0.2',  // 20% scale
        '30': '0.3',  // 30% scale
        '40': '0.4',  // 40% scale
        '45': '0.45', // 45% scale
        '55': '0.55', // 55% scale
        '60': '0.6',  // 60% scale
        // Add more custom values as needed
      },
    },
  },
  plugins: [],
} satisfies Config;
