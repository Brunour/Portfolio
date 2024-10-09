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
    title: 'Bruno Urzua - Business Intelligence • Data Analyst',
    description: 'Business, finance and more with AI and big data.',
    faviconPath: '/public/favicon-32x32.png',
  },
  //pdf: {
  //footer:
  //'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  //},
} as const satisfies ReadonlyDeep<Config>;

export default config;
