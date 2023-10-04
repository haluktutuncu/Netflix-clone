/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/58fd707b-dc9a-464a-a10d-b2874adb2b2e/TR-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      },
      colors: {
        "gradient-filter":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
      },
    },
  },
  plugins: [],
};
