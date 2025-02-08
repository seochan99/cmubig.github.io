// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Docs with Tailwind',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        { slug: 'people' },
        { slug: 'publications' },
        {
          slug: 'research',
          label: 'Research',
          autogenerate: { directory: 'research' },
        },
        { slug: 'talks' },
        { slug: 'teaching' },
      ],
      components: {
        // Override the default components.
        Header: './src/components/Header.astro',
      },
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
})
