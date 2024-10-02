import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Bruno Urzua - Data & Business Analyst',
    description: 'Business, finance and more with AI and big data.',
    faviconPath: '/src/assets/my-image.jpg',
  },
  //pdf: {
  //footer:
  //'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  //},
} as const satisfies ReadonlyDeep<Config>;

export default config;
