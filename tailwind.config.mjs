/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#3f3f46', // zinc-700
            h1: {
              color: '#18181b', // zinc-900
              fontWeight: '700',
            },
            h2: {
              color: '#18181b', // zinc-900
              fontWeight: '600',
            },
            h3: {
              color: '#18181b', // zinc-900
              fontWeight: '500',
            },
            strong: {
              fontWeight: '600',
            },
            blockquote: {
              color: '#52525b', // zinc-600
              borderLeftColor: '#d4d4d8', // zinc-300
            },
            code: {
              color: '#18181b', // zinc-900
              fontWeight: '500',
            },
            pre: {
              backgroundColor: '#fafafa', // zinc-50
            },
            a: {
              color: '#18181b', // zinc-900
              fontWeight: '500',
              textDecoration: 'none',
              borderBottomWidth: '1px',
              borderBottomColor: '#d4d4d8', // zinc-300
              '&:hover': {
                borderBottomColor: '#a1a1aa', // zinc-400
              },
            },
          },
        },
      }
    },
  },
  // You might need content paths if not using defaults
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
}