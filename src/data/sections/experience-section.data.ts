import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';
import { excel, mysql, googleSheets, powerBI, msOffice, clickup, slack, python } from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Data Solution Specialist',
      company: 'Freelance',
      image: import('@/assets/logos/freelance.png'),
      dates: [new Date('2023-01'), new Date('2024-07')],
      description: `
        - Developed Power BI and Excel reports for non-technical stakeholders, improving report accessibility and user engagement by 40%.
        - Designed data-driven strategies with MySQL, leading to a 20% increase in operational efficiency through better KPI tracking.
        - Worked with cross-functional teams in 4 different industries, fostering a data-driven mindset and improving data literacy for better decision-making.
        - Maintained KPI reports, enabling real-time performance monitoring.
        - Created filing systems for client documentation, improving access to critical information.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [python(), powerBI(), googleSheets(), mysql(), msOffice(), clickup()],
      },
      links: [],
    },
    {
      role: 'Busines Data Analyst',
      company: 'Special Seguridad',
      image: import('@/assets/logos/company-1.jpg'),
      dates: [new Date('2019-09'), new Date('2022-11')],
      description: `
        - In Over 5 years, I progressed through several roles, ultimately becoming a key contributor in implementing a data-driven approach across the company.
        - Optimize internal processes with a data-driven and technological approach, improving both internal and external communication and access to key information for strategic decision-making.
        - Design and maintain interactive dashboards to present analysis and results to senior executives.
        - Analyze digital metrics using Google Analytics and Google Ads to evaluate digital performance.
        - Manage databases with SQL and Google Sheets, and implement ETL processes, data models, and pipelines to ensure data reliability and efficiency.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [powerBI(), excel(), googleSheets(), mysql(), clickup(), slack()],
      },
      links: [
        website({ url: 'https://specialseguridad.com/' }),
        linkedin({ url: 'https://ar.linkedin.com/company/specialseguridad' }),
      ],
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
