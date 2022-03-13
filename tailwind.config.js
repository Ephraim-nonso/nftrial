module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "background-pattern": "url('/assests/bg-image.png')",
      }),
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        vppixel: ["VPPixel-Simplified", "sans-serif"],
      },
    },
  },
  plugins: [],
};
