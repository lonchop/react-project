/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBSAAq9hWqhrtEGdCdi5H7pq2smZ5FJDjuw&usqp=CAU')",
        'hero-2': "url('/src/assets/hospital.jpg')"

      }
    },
  },
  plugins: [],
};
