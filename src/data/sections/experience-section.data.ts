import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin,  website } from '../helpers/links';
import {
  excel,
  mysql,
  googleSheets,
  powerBI,
  msOffice,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Business Office Manager',
      company: 'Special Seguridad',
      image: import('@/assets/logos/company-1.jpg'),
      dates: [new Date('2019-09'), new Date('2024-06')],
      description: `
        - Over 4 years, I progressed through several roles, ultimately becoming a key contributor in implementing a data-driven approach across the company.
        - Automated data reporting and optimized processes using Power BI and SQL, reducing manual workflows by 30%.
        - Introduced business intelligence tools to simplify operations, improving resource allocation and decision-making.
        - Empowered leadership with tailored dashboards, enabling data-based decision-making and real-time insights into key metrics.
        - Streamlined financial and operational workflows using Excel automation, enhancing productivity and reducing errors.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [powerBI(), excel(), googleSheets(), mysql(), msOffice()],
      },
      links: [website({ url: 'https://specialseguridad.com/' }), linkedin({ url: 'https://ar.linkedin.com/company/specialseguridad' })],
    },
    {
      role: 'Administrative Data Entry & Analyst ',
      company: 'Security Company',
      image: import('@/assets/logos/company-2.png'),
      dates: [new Date('2018-06'), new Date('2019-09')],
      description: `
        - Ensured 98% accuracy in operational and financial data entry.
        - Automated administrative processes in Excel, reducing processing time by 40%.
        - Maintained daily KPI reports, enabling real-time performance monitoring.
        - Created filing systems for client documentation, improving access to critical information.

      `,
      tagsList: {
        title: 'Technologies',
        tags: [ excel(), googleSheets(), msOffice()],
      },
      links: [],
    },
/*     {
      role: 'Team Lead',
      company: 'Security Company',
      image: import('@/assets/logos/gitlab-logo.png'),
      dates: [new Date('2017-09'), new Date('2018-04')],
      description: `
        Nulla volutpat justo ante, rhoncus posuere massa egestas in:

        - Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.
        - Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.
        - Donec non vulputate augue 🤓
      `,
      tagsList: {
        title: 'Technologies',
        tags: [powerBI(), excel(), googleSheets(), mysql(), msOffice()],
      },
      links: [website({ url: '#' }), facebook({ url: '#' })],
    }, */
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
