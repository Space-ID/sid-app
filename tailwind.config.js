module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    colors: {
      gray: {
        100: '#363740',
        200: '#62636D',
        300: '#93949F',
        400: '#C7C8D3',
        500: '#E3E3E9',
        600: '#B1D6D3',
        700: '#BDCED1',
        800: '#7E9195',
      },
      green: {
        100: '#1EEFA4',
        200: '#30DB9E',
        300: '#0EA59C',
        600: '#B1D6D3',
      },
      dark: {
        common: '#071A2F',
        100: '#134757',
        200: '#1C585A',
        300: '#205561',
        400: '#335264',
        500: '#0E4549',
      },
      red: {
        100: '#ED7E17',
        200: '#FF8800',
        300: '#DA7213',
      },
      primary: '#134757',
      primaryBg: '#F8F8FC',
      primaryDark: '#0C0D17',
      error: '#FF3333',
      alert: '#F9AF60',
      purple: '#6852F5',
      white: '#ffffff',
      darkButton: '#134757',
      blue: {
        100: '#2980E8',
        200: '#45A6FF',
      },
      fill: {
        2: 'rgba(67, 140, 136, 0.25)',
        3: 'rgba(204, 252, 255, 0.2)',
        4: 'rgba(0, 47, 57, 0.5)',
      },
      overlay: 'rgba(0,0,0,0.5)',
      boxBg: '#0E4549',
    },
    screens: {
      xs: '320px',
      sm: '429px',
      md: '768px',
      '2md': '960px',
      lg: '1024px',
      xl: '1280px',
      '1.5xl': '1380px',
      '2xl': '1480px',
      menu: 'linear-gradient(180deg, #3d888d 0%, #2e4450 100%)',
    },
    fontSize: {
      xs: ['12px', '20px'],
      sm: ['14px', '22px'],
      base: ['16px', '24px'],
      lg: ['18px', '26px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '34px'],
      '3xl': ['28px', '40px'],
      '4xl': ['32px', '46px'],
      '5xl': ['36px', '52px'],
      '6xl': ['40px', '56px'],
    },
    extend: {
      boxShadow: {
        ball: '0 0 0 3px white, 0 0 0 4px #5284ff',
        dropdown: '-4px 18px 70px 0 rgba(108, 143, 167, 0.32)',
        popup: '0px 3px 9px rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        urbanist: ['Urbanist'],
        cocoSharp: ['CocoSharp'],
      },
      gridTemplateColumns: {
        profile: '360px 1fr',
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
      backgroundImage: {
        'home-bg': "url('/assets/images/heroBG.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1EEFA4',
          secondary: '#2980E8',
          accent: 'rgba(204, 252, 255, 0.2)',
          neutral: '#68ffc9',
          info: '#BDCED1',
          success: '#218752',
          warning: '#ED7E17',
          error: '#FF3333',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
