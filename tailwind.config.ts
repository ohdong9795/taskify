import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        black_17: '#171717',
        black_333236: '#333236',
        black_4B: '#4B4B4B',
        gray_787486: '#787486',
        gray_9FA6B2: '#9FA6B2',
        gray_D9: '#D9D9D9',
        gray_EE: '#EEEEEE',
        gray_FAFAFA: '#FAFAFA',
        violet_5534DA: '#5534DA',
        violet_F1EFFD: '#F1EFFD',
        red_D6173A: '#D6173A',
        green_7AC555: '#7AC555',
        purple_760DDE: '#760DDE',
        orange_FFA500: '#FFA500',
        blue_76A6EA: '#76A5EA',
        pink_E876EA: '#E876EA',
        gray_D9D9D9: '#D9D9D9',
      },
      fontSize: {
        sm: '14px',
        base: '16px',
      },
      screens: {
        m: '375px',
        t: '744px',
        p: '1280px',
      },
    },
  },
  plugins: [],
};
export default config;
