import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],

  // global.css provides the reset — skip Tailwind's preflight to avoid conflicts
  corePlugins: {
    preflight: false,
  },

  theme: {
    extend: {
      colors: {
        // Primary palette (from src/tokens/colors.ts → primary)
        accent:     '#5B7CE6',
        navy:       '#0E1438',
        brand:      '#6366F1',   // primary.indigo (renamed to avoid collision with Tailwind's indigo palette)
        'brand-bg': '#EEF0FE',   // primary.indigoBg

        // Neutral palette (from src/tokens/colors.ts → neutral)
        page:    '#F4F5F9',
        card:    '#FFFFFF',
        soft:    '#F6F7FB',
        divider: '#E8EAF2',      // neutral.border (renamed to avoid collision with Tailwind's border utilities)
        ink:     '#1B2440',
        sub:     '#8A93AD',
        faint:   '#AEB4C9',

        // Semantic signals
        success: '#16A34A',
        warning: '#EA580C',
        danger:  '#B91C1C',

        // Branch module badge colors
        'mod-air':        '#4338CA',
        'mod-sea':        '#0369A1',
        'mod-road':       '#C2410C',
        'mod-customs':    '#15803D',
        'mod-warehouse':  '#7C3AED',
        'mod-backoffice': '#64748B',
      },

      fontFamily: {
        sans: ["'Poppins'", 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },

      borderRadius: {
        // Matches src/tokens/layout.ts → radius (Tailwind defaults already match lg/xl/2xl)
        sm:   '4px',
        lg:   '8px',
        xl:   '12px',
        '2xl': '16px',
      },

      boxShadow: {
        // Exact values from src/tokens/layout.ts → shadow (match Tailwind defaults)
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)',
      },

      width: {
        sidebar: '224px',
      },

      height: {
        topbar: '58px',
      },
    },
  },

  plugins: [],
} satisfies Config
