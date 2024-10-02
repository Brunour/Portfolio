import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, dashboard, website } from '../helpers/links';
import {
  googleColab,
  excel,
  mysql,
  html,
  css,
  blogger,
  python,
  pandas,
  numpy,
  powerBI,
  seaborn,
  matplotlib,
  scikitLearn,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Machine Learning Property Valuation',
      image: import('@/assets/portfolio/ml-proyect.png'),
      dates: [new Date('2023'), new Date('2024')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Researcher', 'Analyst'] },
        { label: 'Company', value: 'Personal Proyect' },
        { label: 'Category', value: ['Machine Learning', 'Data science'] },
      ],
      //pdfDetails: [
      //{ label: 'Demo', value: '#', url: '#' },
      //{ label: 'Repository', value: '#', url: '#' },
      //],
      description:
        'This project explores the relationship between the selling prices of properties and the socioeconomic and infrastructure characteristics of different neighborhoods in Buenos Aires, Argentina, to determine if sellers are pricing properties fairly based on location and surrounding conditions, and to identify the most influential factors in property pricing.',
      tagsList: {
        title: 'Technologies',
        tags: [python(), pandas(), numpy(), seaborn(), matplotlib(), scikitLearn(), googleColab()],
      },
      links: [github({ url: 'https://github.com/Brunour/ML-Property-Valuation' })],
    },
    {
      name: 'History Resume Company',
      image: import('@/assets/portfolio/bi-other-proyect.png'),
      dates: [new Date('2022'), new Date('2024')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Data Analyst', 'Business Analyst'] },
        { label: 'Company', value: 'Private Security' },
        { label: 'Category', value: ['Dashboard', 'Report', 'BI'] },
      ],
      //pdfDetails: [
      //{ label: 'Demo', value: '#', url: '#' },
      //{ label: 'Repository', value: '#', url: '#' },
      //],
      screenshots: [
        { src: import('@/assets/portfolio/dashboard-aussie-security-001.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/dashboard-aussie-security-002.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/dashboard-aussie-security-003.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/dashboard-aussie-security-004.png'), alt: 'Four screenshot' },
      ],
      description:
        'Interactive dashboard for an Australian security company, designed to present potential clients with a detailed analysis of the company current status and financial performance.',
      tagsList: {
        title: 'Technologies',
        tags: [powerBI(), excel()],
      },
      links: [dashboard({ url: '#' }), github({ url: 'https://github.com/Brunour/Bi-Historic-Report' })],
    },
    {
      name: 'Dashboard Annual Report',
      image: import('@/assets/portfolio/bi-proyect.png'),
      dates: [new Date('2018'), new Date('2020')],
      details: [
        { label: 'Team size', value: '5 people' },
        { label: 'My role', value: ['BI Developer', 'User Support'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Business Analysis', 'BI Report'] },
      ],
      //pdfDetails: [
      //{ label: 'Demo', value: '#', url: '#' },
      //{ label: 'Repository', value: '#', url: '#' },
      //],
      screenshots: [{ src: import('@/assets/portfolio/dashboard-market-001.png'), alt: 'First screenshot' }],
      description:
        'Annual financial dashboard for a supermarket chain, providing shareholders with a clear and concise summary of financial performance, broken down by regions and branches.',
      tagsList: {
        title: 'Technologies',
        tags: [powerBI(), mysql(), excel()],
      },
      links: [dashboard({ url: '#' }), github({ url: 'https://github.com/Brunour/Bi-Performace-Report' })],
    },
    {
      name: 'ReFood',
      image: import('@/assets/portfolio/data-proyect.png'),
      dates: [new Date('2022-08'), new Date('2022-12')],
      details: [
        { label: 'Team size', value: '4 people' },
        { label: 'My role', value: 'Design, Develop' },
        { label: 'Company', value: 'UM' },
        { label: 'Category', value: ['Comercial Proyect', 'Mobile App', 'Eviroment'] },
      ],
      //pdfDetails: [
      //{ label: 'Demo', value: '#', url: '#' },
      //{ label: 'Repository', value: '#', url: '#' },
      //],
      description:
        'Conceptualized and developed a university project focused on reducing food waste by connecting restaurants and grocery stores with consumers. The app promotes sustainability by communicating discounts on near-expiry products, helping businesses minimize waste while offering affordable options to the community. ',
      tagsList: {
        title: 'Technologies',
        tags: [blogger(), html(), css()],
      },
      links: [website({ url: 'https://refoodmdz.blogspot.com/?m=1' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
