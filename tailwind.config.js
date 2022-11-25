module.exports = {
    mode: "jit",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
      extend: {},
      fontFamily: {
        body: ["Helvetica"],
  
        display: ["Lobster"],
        headline: ["Dancing Script"],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};