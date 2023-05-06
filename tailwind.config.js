/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        anonymous: ['Anonymous Pro', 'monospace'],
        comfortaa: ['Comfortaa', 'cursive'],
        cutive: ['Cutive Mono', 'monospace'],
        robotomono: ['Roboto Mono', 'monospace'],
        sourcecodepro: ['Source Code Pro', 'monospace']
      },
        transitionTimingFunction: {
          'in-elastic': 'cubic-bezier(.6, .54, .6, 1.43)',
          'out-elastic': 'cubic-bezier(0.16, 1, 0.3, 1)',
        },
    },
  },
    plugins: [],
  }

