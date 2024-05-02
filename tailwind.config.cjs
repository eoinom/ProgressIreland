const prefix = 'pi-';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        [`${prefix}5`]: '0.3125rem', // 5px
        [`${prefix}10`]: '0.625rem', // 10px
        [`${prefix}15`]: '0.9375rem', // 15px
        [`${prefix}20`]: '1.25rem', // 20px
        [`${prefix}25`]: '1.5625rem', // 25px
        [`${prefix}30`]: '1.875rem', // 30px
        [`${prefix}35`]: '2.1875rem', // 35px
        [`${prefix}40`]: '2.5rem', // 40px
        [`${prefix}45`]: '2.8125rem', // 45px
        [`${prefix}50`]: '3.125rem', // 50px
        [`${prefix}55`]: '3.4375rem', // 55px
        [`${prefix}60`]: '3.75rem', // 60px
        [`${prefix}65`]: '4.0625rem', // 65px
        [`${prefix}70`]: '4.375rem', // 70px
        [`${prefix}75`]: '4.6875rem', // 75px
        [`${prefix}80`]: '5rem', // 80px
        [`${prefix}85`]: '5.3125rem', // 85px
        [`${prefix}90`]: '5.625rem', // 90px
        [`${prefix}95`]: '5.9375rem', // 95px
        [`${prefix}100`]: '6.25rem', // 100px
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'white',
      green: {
        bright: 'rgba(143, 183, 52, 1)',
        light: 'rgba(199, 219, 153, 1)',
      },
      yellow: {
        bright: 'rgba(255, 198, 51, 1)',
        light: 'rgba(255, 227, 153, 1)',
      },
      blue: {
        bright: 'rgba(91, 192, 235, 1)',
      },
      charcoal: {
        bright: 'rgba(85, 85, 85, 1)',
        light: 'rgba(170, 170, 170, 1)',
        lighter: 'rgba(212, 212, 212, 1)',
        lightest: 'rgba(250, 250, 250, 1)',
      },
    },
    fontSize: {
      [`${prefix}heading-1`]: [
        '100px',
        {
          lineHeight: '100px',
          fontWeight: 400,
        },
      ],
      [`${prefix}heading-2`]: [
        '65px',
        {
          lineHeight: '65px',
          fontWeight: 400,
        },
      ],
      [`${prefix}heading-3`]: [
        '55px',
        {
          lineHeight: '55px',
          fontWeight: 400,
        },
      ],
      [`${prefix}heading-4-bold`]: [
        '30px',
        {
          lineHeight: '30px',
          fontWeight: 600,
        },
      ],
      [`${prefix}heading-4`]: [
        '30px',
        {
          lineHeight: '30px',
          fontWeight: 400,
        },
      ],
      [`${prefix}heading-5-bold`]: [
        '20px',
        {
          lineHeight: '22px',
          fontWeight: 600,
        },
      ],
      [`${prefix}heading-5`]: [
        '20px',
        {
          lineHeight: '22px',
          fontWeight: 400,
        },
      ],

      [`${prefix}body-1`]: [
        '36px',
        {
          lineHeight: '36px',
          fontWeight: 350,
        },
      ],
      [`${prefix}body-2`]: [
        '20px',
        {
          lineHeight: '22px',
          fontWeight: 600,
        },
      ],
      [`${prefix}body-3-bold`]: [
        '18px',
        {
          lineHeight: '23.4px',
          fontWeight: 600,
        },
      ],
      [`${prefix}body-3-light`]: [
        '18px',
        {
          lineHeight: '23.4px',
          fontWeight: 150,
        },
      ],
      [`${prefix}body-4-bold`]: [
        '16px',
        {
          lineHeight: '25.6px',
          fontWeight: 600,
        },
      ],
      [`${prefix}body-4-light`]: [
        '16px',
        {
          lineHeight: '25.6px',
          fontWeight: 150,
        },
      ],
      [`${prefix}body-5-bold`]: [
        '14px',
        {
          lineHeight: '14px',
          fontWeight: 600,
        },
      ],
      [`${prefix}body-5-light`]: [
        '14px',
        {
          lineHeight: '14px',
          fontWeight: 150,
        },
      ],
      [`${prefix}body-6-bold`]: [
        '12px',
        {
          lineHeight: '12px',
          fontWeight: 600,
        },
      ],
      [`${prefix}body-6-light`]: [
        '12px',
        {
          lineHeight: '12px',
          fontWeight: 150,
        },
      ],
    },
    screens: {
      sm: '460px',
      md: '768px',
      lg: '950px',
      xl: '1200px',
    },
  },
  plugins: [],
};
