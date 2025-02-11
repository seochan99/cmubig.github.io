import colors from 'tailwindcss/colors'
import starlightPlugin from '@astrojs/starlight-tailwind'

// // Your preferred accent color. Indigo is closest to Starlight’s defaults.
// const accent = colors.indigo;
// // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
// const gray = colors.zinc;

colors.pink = {
  50: '#FEF1F3',
  100: '#FCE3E7',
  200: '#F9C2CB',
  300: '#F7A6B4',
  400: '#F48698',
  500: '#F16A80',
  600: '#EE4964',
  700: '#EC2D4D',
  800: '#E01537',
  900: '#C41230',
  950: '#620918',
}

// const accent = colors.rose
const accent = colors.pink
const gray = colors.zinc

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { accent, gray },
      fontFamily: {
        // // Your preferred text font. Starlight uses a system font stack by default.
        // sans: ['"Atkinson Hyperlegible"'],
        sans: [
          'ui-serif, "Iowan Old Style", Charter, Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif',
        ],
        // // Your preferred code font. Starlight uses system monospace fonts by default.
        // mono: ['"IBM Plex Mono"'],
      },
    },
  },
  plugins: [starlightPlugin()],
}
