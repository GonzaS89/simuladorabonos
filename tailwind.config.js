/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Esto incluye todos los archivos .js, .jsx, .ts, .tsx en la carpeta src
  ],
  theme: {
    extend: {
      height: {
        'screen-dvh': '100dvh', // Añade esta línea
      },
      minHeight: {
        'screen-dvh': '100dvh', // Para min-height si lo necesitas
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* IE y Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none', /* Chrome, Safari y Opera */
        }
      });
    }
  ],
}

