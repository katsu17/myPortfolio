import { Favorite, Social, Portfolio } from './types'

export const favorites: Favorite[] = [
  {
    title: 'React',
    description: 'Web framework. Started using it because everybody is using it.',
    imagePath: 'images/react.svg',
  },
  {
    title: 'TailwindCSS',
    description: 'Simple to use CSS framework. This website uses it. ',
    imagePath: 'images/tailwindcss.svg',
  },
  {
    title: 'Figma',
    description: 'Design tool. So awesome and it&apos;s free. Use it if you haven&apos;t.',
    imagePath: 'images/figma.svg',
  },

  {
    title: 'Supabase',
    description:
      'Firebase with SQL database. Still lot more work to be done, but I am excited for it.',
    imagePath: 'images/supabase.svg',
  },
  {
    title: 'PostgreSQL',
    description: 'Database for Supabase. Made me re-realize how great SQL databases are.',
    imagePath: 'images/posgresql.svg',
  },
  // {
  //   title: 'Firebase',
  //   description: 'Backend for apps. Go to backend tool. Wish if they had SQL database though.',
  //   imagePath: 'images/firebase.svg',
  // },
  // {
  //   title: 'Flutter',
  //   description: 'Mobile app framework. Could not love it more.',
  //   imagePath: 'images/flutter.svg',
  // },
  // {
  //   title: 'HubSpot',
  //   description:
  //     'CRM/Sales tools/CMS/Marketing tools/many other things. Great tool. Use it if you haven&apos;t.',
  //   imagePath: 'images/hubspot.svg',
  // },
]

export const socials: Social[] = [
  {
    name: 'github',
    url: 'https://github.com/katsu17',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/tandaikatsuaki/',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/katsu_workout',
  },
]

export const portfolios: Portfolio[] = [
  {
    title: 'Naoko Sakurai',
    description: 'Naoko Sakurai’s official website',
    imagePath: 'images/NaokoSakuraiImage.jpg',
  },
  // {
  //   title: 'TailwindCSS',
  //   description: 'Simple to use CSS framework. This website uses it. ',
  //   imagePath: 'images/tailwindcss.svg',
  // },
  // {
  //   title: 'Figma',
  //   description: 'Design tool. So awesome and it&apos;s free. Use it if you haven&apos;t.',
  //   imagePath: 'images/figma.svg',
  // },
]