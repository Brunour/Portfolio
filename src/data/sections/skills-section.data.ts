import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  azure,
  googleColab,
  matplotlib,
  seaborn,
  scikitLearn,
  powerBI,
  astro,
  excel,
  mysql,
  jupyterNotebook,
  html,
  css,
  blogger,
  aws,
  python,
  pandas,
  numpy,
  apacheSpark,
  tableau,
  tensorflow,
  docker,
  pytorch,
  databricks,
  dialogflow,
  slack,
  clickup,
  rasa,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'For Data Work',
      skills: [
        mysql(),
        python(),
        powerBI(),
        excel(),
        googleColab(),
        numpy(),
        pandas(),
        matplotlib(),
        seaborn(),
        scikitLearn(),
        jupyterNotebook(),
      ],
    },
    {
      title: 'I Used It On Occasion',
      skills: [slack(), clickup(), html(), css(), astro(), blogger()],
    },
    {
      title: 'I Would Like To Learn And Work With',
      skills: [
        azure(),
        aws(),
        tensorflow(),
        databricks(),
        pytorch(),
        tableau(),
        apacheSpark(),
        docker(),
        dialogflow(),
        rasa(),
      ],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Spanish - Native' },
        { icon: 'circle-flags:us', name: 'English - B2 Upper Intermediate' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
