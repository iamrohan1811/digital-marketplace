/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderColor: (theme)=>({
      DEFAULT: theme("colors.gray.400", "currentColor"),
    }),
    extend: {
      boxShadow:{
        custom:"0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)",
      }
    },
    container:{
      center: true,
    }
  },
  plugins: [],
};

