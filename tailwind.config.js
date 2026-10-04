/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cozy: {
          bg: '#E8E1C9',           // Primary warm beige paper-like background
          sidebar: '#405C3A',      // Deep botanical forest green
          'sidebar-hover': '#506B42', // Secondary green
          'sidebar-dark': '#344C30',  // Dark green
          card: '#F2ECD8',         // Warm cream card panel
          'card-light': '#F6F0DC',   // Slightly lighter cream panel
          border: '#DCD4BC',       // Subtle border stroke
          'border-dark': '#C8BE9E',  // Defined border
          text: '#39402F',         // Primary text: deep forest olive
          muted: '#77745F',        // Secondary text: muted warm olive
          sage: '#8A9A62',         // Muted accent: sage
          gold: '#B59A5A',         // Gold accent: antique brass/gold
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cozy-sm': '0 2px 8px -2px rgba(57, 64, 47, 0.05)',
        'cozy': '0 4px 20px -4px rgba(57, 64, 47, 0.08)',
        'cozy-lg': '0 12px 32px -6px rgba(57, 64, 47, 0.12)',
        'cozy-sidebar': '4px 0 24px -4px rgba(52, 76, 48, 0.15)',
      },
      borderRadius: {
        'cozy': '18px',
        'cozy-lg': '22px',
        'cozy-xl': '28px',
      },
    },
  },
  plugins: [],
};
