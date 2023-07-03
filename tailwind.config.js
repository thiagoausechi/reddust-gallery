/** @type {import('tailwindcss').Config} */

const GUI_LIGHT      = '#515151'
const GUI_SHADOW     = '#1B1B1B'
const GUI_OUTLINE    = '#000000'
const GUI_BACKGROUND = '#262626'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        tiles: 'url("/images/tiles_background.png")',
      },
      colors: {
        gui: {
          DEFAULT: GUI_BACKGROUND,
          400: GUI_LIGHT,
          500: GUI_BACKGROUND,
          900: GUI_SHADOW,
        },
      },
      boxShadow: {
        gui: `
         4px  0px 0px 0px ${GUI_SHADOW},
         0px  4px 0px 0px ${GUI_SHADOW},
         2px  2px 0px 0px ${GUI_SHADOW},
        -4px  0px 0px 0px ${GUI_LIGHT},
         0px -4px 0px 0px ${GUI_LIGHT},
        -2px -2px 0px 0px ${GUI_LIGHT},
         2px  4px 0px 0px ${GUI_SHADOW},
         4px  2px 0px 0px ${GUI_SHADOW},
        -2px -4px 0px 0px ${GUI_LIGHT},
        -4px -2px 0px 0px ${GUI_LIGHT},
         0px  0px 0px 2px ${GUI_BACKGROUND},
         4px -2px 0px 0px ${GUI_OUTLINE},
         2px -4px 0px 0px ${GUI_OUTLINE},
        -4px  2px 0px 0px ${GUI_OUTLINE},
        -2px  4px 0px 0px ${GUI_OUTLINE},
        -4px -4px 0px 0px ${GUI_OUTLINE},
         4px  4px 0px 0px ${GUI_OUTLINE},
        -6px  0px 0px 0px ${GUI_OUTLINE},
        -6px -2px 0px 0px ${GUI_OUTLINE},
         6px  0px 0px 0px ${GUI_OUTLINE},
         6px  2px 0px 0px ${GUI_OUTLINE},
         0px -6px 0px 0px ${GUI_OUTLINE},
        -2px -6px 0px 0px ${GUI_OUTLINE},
         0px  6px 0px 0px ${GUI_OUTLINE},
         2px  6px 0px 0px ${GUI_OUTLINE};
        `,
      },
    },
  },
  plugins: [],
}
