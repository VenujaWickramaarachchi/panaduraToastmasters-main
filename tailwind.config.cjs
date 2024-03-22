import plugin from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/hero1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        coolGrey: '#A9B2B1',
        fairGrey: '#F5F5F5',
        deepMaroon: '#3B0104',
        richMaroon: '#781327',
        loyalBlue: '#004165',
        blissfulBlue: '#006094',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#772432',
          secondary: '#004165',
          accent: '#F2DF74',
          grey: '#A9B2B1',

          'base-100': '#ffffff',
        },
        extend: {
          backgroundImage: {
            'hero-pattern': "url('./assets/hero1.jpg')",
            'footer-texture': "url('/img/footer-texture.png')",
          },
        },
      },
    ],
  },
}
