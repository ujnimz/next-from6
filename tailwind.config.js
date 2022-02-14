module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './safelist.txt',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Bree-Serif', 'serif'],
        sans: ['Rustico', 'sans-serif'],
      },
      fill: {
        current: 'currentColor',
      },
      colors: {
        'tangerine': '#ff9e16',
        'charcoal': '#24282a',
        'atlantic': '#009abf',
        'lime': '#6cbd4a',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    themes: [
      {
        dark: {
          primary: '#ff9e16',
          'primary-focus': '#ffb146',
          'primary-content': '#24282a',
          secondary: '#505354',
          'secondary-focus': '#24282a',
          'secondary-content': '#ffffff',
          accent: '#000000',
          'accent-focus': '#000000',
          'accent-content': '#a7a9a9',
          neutral: '#ffffff',
          'neutral-focus': '#e8e9e9',
          'neutral-content': '#ffffff',
          'base-100': '#24282a',
          'base-200': '#3a3e3f',
          'base-300': '#505354',
          'base-content': '#ffffff',
          info: '#0099be',
          success: '#6cbd4a',
          warning: '#ff9e18',
          error: '#ff3918',
        },
        light: {
          primary: '#ff9e16',
          'primary-focus': '#ffb146',
          'primary-content': '#ffffff',
          secondary: '#24282a',
          'secondary-focus': '#505354',
          'secondary-content': '#ffffff',
          accent: '#e8e9e9',
          'accent-focus': '#24282a',
          'accent-content': '#ffffff',
          neutral: '#a7a9ac',
          'neutral-focus': '#959a9c',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#e8e9e9',
          'base-300': '#24282a',
          'base-content': '#24282a',
          info: '#0099be',
          success: '#6cbd4a',
          warning: '#ff9e18',
          error: '#ff3918',
        },
      },
    ],
  },
};
