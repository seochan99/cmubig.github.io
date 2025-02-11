// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://cmubig.github.io',
  base: 'cmubig.github.io',
  integrations: [
    starlight({
      title: 'BIG',
      favicon: './src/assets/cmubig.svg',
      // logo: {
      //   src: './src/assets/my-logo.svg',
      // },
      social: {
        twitter: 'https://twitter.com/jeanoh',
        github: 'https://github.com/cmubig',
        youtube: 'https://www.youtube.com/c/JeanohOrg',
      },
      sidebar: [
        { slug: 'people' },
        { slug: 'publications' },
        {
          slug: 'research',
          label: 'Research',
          autogenerate: { directory: 'research' },
        },
        { slug: 'talks', label: 'Talks' },
        { slug: 'teaching' },
      ],
      // credits: true,
      pagination: false,
      components: {
        // Override the default components.
        Header: './src/components/Header.astro',
        Footer: './src/components/Footer.astro',
      },
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
})
