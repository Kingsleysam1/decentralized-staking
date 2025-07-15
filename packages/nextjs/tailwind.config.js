/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  daisyui: {
    themes: [
      {
         light: {
          primary: '#B22222', // firebrick red
          'primary-content': '#FFF5F5',

          secondary: '#FF6347', // tomato
          'secondary-content': '#1A0000',

          accent: '#FF4500', // orange-red glow
          'accent-content': '#FFF5F5',

          neutral: '#FFE4E1', // misty rose for light contrast
          'neutral-content': '#5B0000',

          'base-100': '#FFF8F8', // very light background
          'base-200': '#FFDADA',
          'base-300': '#FFC0CB',
          'base-content': '#5B0000',

          info: '#FF7F50',
          success: '#FF6F61',
          warning: '#FFA07A',
          error: '#DC143C',
         '--rounded-btn': '9999rem',
          '.tooltip': { '--tooltip-tail': '6px' },
          '.link': { textUnderlineOffset: '2px' },
          '.link:hover': { opacity: '80%' },
        },
      },
      {
         dark: {
          primary: '#8B0000', // deep blood red
          'primary-content': '#FFECEC',

          secondary: '#B22222',
          'secondary-content': '#FFFAFA',

          accent: '#FF4500',
          'accent-content': '#FFF5F5',

          neutral: '#1A0000',
          'neutral-content': '#FFDDDD',

          'base-100': '#140000',
          'base-200': '#1C0000',
          'base-300': '#2D0000',
          'base-content': '#FFDADA',
          info: '#FF6347',
          success: '#FF6F61',
          warning: '#FFB347',
          error: '#FF3B3F',

          '--rounded-btn': '9999rem',
          '.tooltip': { '--tooltip-tail': '6px', '--tooltip-color': 'oklch(var(--p))' },
          '.link': { textUnderlineOffset: '2px' },
          '.link:hover': { opacity: '80%' },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: { "space-grotesk": ["Space Grotesk", "sans-serif"] },
      boxShadow: { center: "0 0 12px -2px rgb(0 0 0 / 0.05)" },
      animation: { "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
    },
  },
  extend: {
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    typewriter: {
      '0%': { width: '0%' },
      '100%': { width: '100%' },
    },
    blinkCaret: {
      '0%, 100%': { borderColor: 'transparent' },
      '50%': { borderColor: 'white' },
    },
  },
  animation: {
    fadeIn: 'fadeIn 1s ease-out forwards',
    typewriter: 'typewriter 3s steps(40, end) forwards',
    blink: 'blinkCaret 0.8s step-end infinite',
  },
}
};
