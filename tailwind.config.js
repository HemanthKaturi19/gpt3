/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'full': 'radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%)',
      'box':'radial-gradient(circle, rgba(8,28,77,1) 1%, rgba(21,66,164,0.9809173669467787) 100%)',
      'rectangle':'linear-gradient(90deg, rgba(226,38,184,1) 1%, rgba(219,126,49,0.9809173669467787) 100%)',
      'back':'linear-gradient(90deg, rgba(4,25,74,1) 1%, rgba(4,22,62,0.9809173669467787) 100%)',
    },
    extend: {},
  }, 
  plugins: [],
}

