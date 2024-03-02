import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#D2355F',
        secondary: '#5ADAA7',
        accent: "#9DE795",
        accent2: "#e0f1d9",
        background: "#FDF6F7",
        abu: "#7B7B7B",
      },
      textStroke: {
        thin: '1px',
        medium: '2px',
        thick: '3px',
      },
      textStrokeColor: {
        black: '#000000',
        white: '#ffffff',
        primary: '#D2355F',
      },
      textShadow: {
        default: '0 2px 4px rgba(0, 0, 0, 0.5)',
        md: '0 4px 6px rgba(0, 0, 0, 0.3)',
        lg: '0 6px 8px rgba(0, 0, 0, 0.25)',
        none: 'none',
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
        black: '900',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }: { addUtilities: any, theme: any }) => {
      const textStroke: Record<string, string> = theme('textStroke');
      const textStrokeColor: Record<string, string> = theme('textStrokeColor');
      
      const textStrokeUtilities: Record<string, Record<string, string>> = {};
      
      Object.entries(textStroke).forEach(([key, value]) => {
        textStrokeUtilities[`.text-stroke-${key}`] = { '-webkit-text-stroke-width': value };
      });

      Object.entries(textStrokeColor).forEach(([key, value]) => {
        textStrokeUtilities[`.text-stroke-color-${key}`] = { '-webkit-text-stroke-color': value };
      });

      addUtilities(textStrokeUtilities);
    }),
    // You can add additional plugins here if needed
  ],
};

export default config;
