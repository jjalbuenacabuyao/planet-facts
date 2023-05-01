/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "star": "url(/images/background-stars.svg)",
      },
      colors: {
        "background": "hsl(240, 67%, 8%)",
        "gray": "hsl(240, 17%, 26%)",
        "light-gray": "hsl(240, 6%, 54%)",
        "blue": "hsl(194, 48%, 49%)",
        "yellow": "hsl(33, 82%, 61%)",
        "purple": "hsl(263, 67%, 51%)",
        "dark-red": "hsl(10, 63%, 51%)",
        "red": "hsl(2, 68%, 53%)",
        "orange": "hsl(17, 73%, 46%)",
        "light-green": "hsl(169, 73%, 44%)",
        "bright-blue": "hsl(222, 87%, 56%)"
      }
    },
  },
  plugins: [],
}
