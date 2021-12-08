module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
          secondary: '#ffffff',
          'secondary-focus': '#505354',
          'secondary-content': '#ffffff',
          accent: '#a7a9a9',
          'accent-focus': '#7b7e7f',
          'accent-content': '#ffffff',
          neutral: '#1aa4c5',
          'neutral-focus': '#0099be',
          'neutral-content': '#ffffff',
          'base-100': '#24282a',
          'base-200': '#3a3e3f',
          'base-300': '#505354',
          'base-400': '#66696a',
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
          accent: '#a7a9a9',
          'accent-focus': '#7b7e7f',
          'accent-content': '#ffffff',
          neutral: '#1aa4c5',
          'neutral-focus': '#0099be',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#e8e9e9',
          'base-300': '#d3d4d4',
          'base-400': '#bdbebe',
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
