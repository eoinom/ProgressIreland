const prefix = 'pi-';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
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
