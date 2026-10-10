import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#0c0e0b", panel: "#121612", ink: "#f1f4ed", lime: "#A3FF12", sage: "#a9b3a5", mute: "#9aa097" },
      fontFamily: {
        body: ['DM Mono', 'monospace'],
        mono: ['DM Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
        'dm-mono': ['DM Mono', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
