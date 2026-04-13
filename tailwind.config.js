/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0e0e14",
        surface: "#0e0e14",
        "surface-container-low": "#13131a",
        "surface-container": "#191921",
        "surface-container-highest": "#25252e",
        "surface-variant": "rgba(53, 52, 59, 0.4)", // semi-transparent
        "surface-bright": "rgba(57, 56, 63, 0.7)",
        "on-surface": "#f6f2fc",
        "on-surface-variant": "#d0c2d2",
        "on-primary": "#500074",
        primary: "#db90ff",
        "primary-container": "#db90ff",
        "primary-dim": "rgba(219, 144, 255, 0.2)",
        secondary: "#b088ff",
        tertiary: "#a1faff",
        "outline-variant": "rgba(77, 67, 80, 0.15)", // Ghost border
        error: "#ffb4ab",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}
