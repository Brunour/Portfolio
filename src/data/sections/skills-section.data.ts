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
      title: 'For Data Analysis',
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
      skills: [html(), css(), astro(), blogger()],
    },
    {
      title: 'I Would Like To Learn And Work With',
      skills: [azure(), aws(), tensorflow(), databricks(), pytorch(), tableau(), apacheSpark(), docker()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Spanish - Native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
