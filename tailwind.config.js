/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0FCFEC",
          "secondary": "#19D3AE",
          "accent": "#3A4256",
          "neutral": "#3D4451",
          "base-100": "#ffffff",
          "info": "#ffffff",
          "success": "#00ffff",
          "warning": "#ffffff",
          "error": "#ffffff",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}

