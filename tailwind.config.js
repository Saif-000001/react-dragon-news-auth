/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        display:'Poppins, sans-serif',
      },
     
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
            "primary": "#000bff",
          
            "secondary": "#0023ff",
                      
            "accent": "#c29a00",
                      
            "neutral": "#22272a",
                      
            "base-100": "#fafffd",
                      
            "info": "#009ed3",
                      
            "success": "#1b9200",
                      
            "warning": "#da5400",
                      
            "error": "#dc002b",
          },
        },
      ],
    },
  plugins: [
    require('daisyui'),
  ],
}

