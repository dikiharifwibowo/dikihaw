const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './next.config.js',
    './safelists.js',
    './code-highlighter-token.js',
    './src/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    // Extract this somewhere, to be used by Goober
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    /**
     * Required to override the lineheight added to each font-size in Tailwind v2
     * Ref: https://tailwindcss.com/docs/upgrading-to-v2#configure-your-font-size-scale-explicitly
     */
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        halfFadeIn: {
          '0%': {
            opacity: 0.5,
          },
          '100%': {
            opacity: 1,
          },
        },
        flyInTop: {
          '0%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        halfFadeIn: 'halfFadeIn 0.3s ease-in-out',
        flyInTop: 'flyInTop 0.3s ease-in-out',
      },
      spacing: {
        '9/16': '56.25%',
      },
      textShadow: {
        // defaults to {}
        DEFAULT: '0 2px 5px rgba(0, 0, 0, 0.5)',
        lg: '0 2px 10px rgba(0, 0, 0, 0.5)',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'surface-0': 'inset 0 5px 2px -1px var(--shadow-color)',
        'surface-1': 'none',
        // 'surface-2': '0 5px 2px -1px var(--shadow-color)',
        'surface-2': '0 6.6px 2.6px -1.3px var(--shadow-color)',
        'surface-3': '0 10px 4px -2px var(--shadow-color)',
        'surface-4': '0 13.3px 5.3px -2.7px var(--shadow-color)',
        'surface-5': '0 20px 8px -4px var(--shadow-color)',
      },
      borderColor: {
        surface: {
          0: 'hsla(var(--h-bg) calc(var(--s-bg) - 1%) calc(var(--l-bg) - 1%) / 1)',
          1: 'hsla(var(--h-bg) var(--s-bg) var(--l-bg) / 1)',
          2: 'hsla(var(--h-bg) calc(var(--s-bg) + 1%) calc(var(--l-bg) + 1%) / 1)',
          3: 'hsla(var(--h-bg) calc(var(--s-bg) + 2%) calc(var(--l-bg) + 2%) / 1)',
          4: 'hsla(var(--h-bg) calc(var(--s-bg) + 3%) calc(var(--l-bg) + 3%) / 1)',
          5: 'hsla(var(--h-bg) calc(var(--s-bg) + 5%) calc(var(--l-bg) + 5%) / 1)',
        },
      },
      backgroundColor: {
        surface: {
          0: 'hsla(var(--h-bg) calc(var(--s-bg) - 1%) calc(var(--l-bg) - 1%) / 1)',
          1: 'hsla(var(--h-bg) var(--s-bg) var(--l-bg) / 1)',
          2: 'hsla(var(--h-bg) calc(var(--s-bg) + 1%) calc(var(--l-bg) + 1%) / 1)',
          3: 'hsla(var(--h-bg) calc(var(--s-bg) + 2%) calc(var(--l-bg) + 2%) / 1)',
          4: 'hsla(var(--h-bg) calc(var(--s-bg) + 3%) calc(var(--l-bg) + 3%) / 1)',
          5: 'hsla(var(--h-bg) calc(var(--s-bg) + 5%) calc(var(--l-bg) + 5%) / 1)',
        },
      },
      colors: {
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
          teal: '#7fdbca',
        },
        theme: {
          text: 'var(--color-text)',
          heading: 'var(--color-heading)',
          subtitle: 'var(--color-subtitle)',
          background: 'var(--color-bg)',
          info: 'var(--color-info)',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.theme.text'),
            a: false, // Override the link color as we'll use the one in defined in useAnchorClassNames()
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.theme.text'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.theme.text'),
            },
            'ol li:before': {
              color: theme('colors.theme.subtitle'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.theme.subtitle'),
            },
            code: {
              color: theme('colors.theme.text'),
            },
            li: {
              '&::marker': {
                color: theme('colors.theme.text'),
              },
            },
            strong: {
              color: theme('colors.theme.text'),
            },

            'a code': {
              color: theme('colors.theme.secondary'),
              textDecoration: 'none',
              fontWeight: '400',
              '&:hover': {
                color: theme('colors.theme.text'),
              },
            },
            pre: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.900'),
            },
            blockquote: {
              quotes: 'none',
              color: theme('colors.theme.text'),
              borderLeftColor: theme('colors.theme.subtitle'),
            },
          },
        },
      }),
    },
  },
  variants: {
    display: ['last'],
  },
  plugins: [require('@tailwindcss/typography')],
};
