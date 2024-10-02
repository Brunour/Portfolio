import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'Certifications',
    slug: 'favorites',
    icon: 'fa6-solid:award',
    visible: true,
  },
  books: {
    title: 'Courses',
    data: [
      {
        image: import('@/assets/favorites/books/course-1.png'),
        title: 'Essentials of Corporate Finance',
        author: 'University of Melbourne',
        url: 'https://www.coursera.org/account/accomplishments/specialization/VHRDET2DZWLD',
      },
      {
        image: import('@/assets/favorites/books/course-2.png'),
        title: 'Python and Statistics for Financial Analysis',
        author: 'The Hong Kong University of Science and Technology',
        url: 'https://www.coursera.org/account/accomplishments/verify/645BD3AW4UTN',
      },
      {
        image: import('@/assets/favorites/books/alura.png'),
        title: 'SQL With MySQL',
        author: 'Alura Latam',
        url: 'https://app.aluracursos.com/degree/certificate/2175effa-db70-4acc-9627-8218e8d7448a',
      },
      {
        image: import('@/assets/favorites/books/one.png'),
        title: 'Oracle Next Education Program',
        author: 'Oracle + Alura Latam',
        url: 'https://app.aluracursos.com/program/certificate/981a6f3c-b812-4cbb-a7de-0928d612ac48',
      },
    ],
  },
  /* people: {
    title: 'People I learn from',
    data: [
      {
        image: import('@/assets/favorites/people/person-1.jpg'),
        name: 'Kent C. Dodds',
        url: 'https://kentcdodds.com/',
      },
      {
        image: import('@/assets/favorites/people/person-2.jpeg'),
        name: 'Kent Beck',
        url: 'https://www.kentbeck.com/',
      },
      {
        image: import('@/assets/favorites/people/person-3.jpeg'),
        name: 'Eric Evans',
        url: 'https://www.domainlanguage.com/',
      },
      {
        image: import('@/assets/favorites/people/person-4.jpeg'),
        name: 'Martin Fowler',
        url: 'https://martinfowler.com/',
      },
      {
        image: import('@/assets/favorites/people/person-5.jpg'),
        name: 'Robert C. Martin',
        url: 'http://cleancoder.com/',
      },
      {
        image: import('@/assets/favorites/people/person-6.jpeg'),
        name: 'Adam Dymitruk',
        url: 'https://eventmodeling.org/',
      },
    ],
  },
  videos: {
    title: 'Videos I watched',
    data: [
      {
        image: import('@/assets/favorites/videos/video-1.jpeg'),
        title: 'Building Resilient Frontend Architecture • Monica Lent • GOTO 2019',
        url: 'https://youtu.be/TqfbAXCCVwE',
      },
      {
        image: import('@/assets/favorites/videos/video-2.jpeg'),
        title: 'Scaling Yourself • Scott Hanselman • GOTO 2012',
        url: 'https://youtu.be/FS1mnISoG7U',
      },
      {
        image: import('@/assets/favorites/videos/video-3.jpeg'),
        title: "Why Isn't Functional Programming the Norm? - Richard Feldman",
        url: 'https://youtu.be/QyJZzq0v7Z4',
      },
    ],
  },
  medias: {
    title: 'Media I follow',
    data: [
      {
        image: import('@/assets/favorites/media/media-1.jpeg'),
        title: 'Fireship.io',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/c/Fireship',
      },
      {
        image: import('@/assets/favorites/media/media-2.jpeg'),
        title: 'Healthy Software Developer',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ',
      },
      {
        image: import('@/assets/favorites/media/media-3.png'),
        title: 'Bytes',
        type: 'Newsletter',
        url: 'https://bytes.dev/',
      },
      {
        image: import('@/assets/favorites/media/media-4.png'),
        title: 'TypeScript Weekly',
        type: 'Newsletter',
        url: 'https://typescript-weekly.com/',
      },
      {
        image: import('@/assets/favorites/media/media-5.jpeg'),
        title: 'Front End Happy Hour',
        type: 'Podcast',
        url: 'https://www.frontendhappyhour.com/',
      },
      {
        image: import('@/assets/favorites/media/media-6.webp'),
        title: '.cult by Honeypot',
        type: 'Blog',
        url: 'https://cult.honeypot.io/',
      },
    ],
  }, */
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
