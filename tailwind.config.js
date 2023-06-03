/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    borderWidth: {
      "1px": "1px",
      "2px": "2px",
      "8px": "8px",
      "10px": "10px",
      "12px": "12px",
      "16px": "16px",
    },

    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        lightblack: "#7C5656",
        lightblue: "#0A1C43",
        // deepblue: "#1E3A8A",
      },
    },
  },
  plugins: [],
};
