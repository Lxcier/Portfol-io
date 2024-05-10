/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        'mbl': '300px',
        // => @media (min-width: 300px) { ... }
        'tbt': '640px',
        // => @media (min-width: 640px) { ... }
  
        'lpt': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'dst': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    }
  }