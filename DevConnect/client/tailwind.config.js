// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',   // Custom color example
        accent: '#F43F5E',
        background: '#F9FAFB',
      },
    },
  },
  plugins: [],
};
