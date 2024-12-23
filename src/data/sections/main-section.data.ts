import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, mail } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Bruno L. Urzúa',
  role: 'Business & Data Analyst',
  details: [
    //{ label: 'Phone', value: '#', url: '#' },
    //{ label: 'Email', value: 'L.brunourzua@gmail.com', url: 'mailto:L.brunourzua@gmail.com' },
    //{ label: 'From', value: 'Argentina' },
  ],
  pdfDetails: [
    //{ label: 'Phone', value: '#' },
    { label: 'Email', value: 'L.brunourzua@gmail.com' },
    { label: 'LinkedIn', value: '/in/bruno-urzua', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/Brunour', url: 'https://github.com' },
    { label: '#', value: '#', url: '/', fullRow: true },
  ],
  description:
    'Hi, I’m Bruno, a data and tech professional with 3+ years of experience transforming business issues into innovative, data-driven solutions. I excel at automating processes, streamlining access to information, and optimizing workflows. Let’s work together to achieve impactful results.',
  tags: [{ name: 'Data Analitycs' }, { name: 'Business Analytics' }, { name: 'Business Intelligence' }],
  action: {
    label: 'Download CV',
    url: '/CV-Bruno-Urzua.pdf',
    downloadedFileName: 'Cv-Bruno-Urzua-2024.pdf',
  },
  links: [
    mail({ url: 'mailto:L.brunourzua@gmail.com' }),
    github({ url: 'https://github.com/Brunour' }),
    linkedin({ url: 'https://www.linkedin.com/in/bruno-urzua/' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
