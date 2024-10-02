import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Business Administration',
      institution: 'University of Mendoza',
      image: import('@/assets/logos/um-logo.png'),
      dates: [new Date('2018'), new Date('2022')],
      description: 'BBA, Bachelor of Business Administration.',
      links: [website({ url: 'https://um.edu.ar/en/carreras/licenciado-en-administracion-de-negocios/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
