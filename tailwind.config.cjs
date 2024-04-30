const prefix = 'pi-';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
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
  },
  plugins: [],
};
