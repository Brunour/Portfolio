import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const mysql = createSkillFactory({
  name: 'MySQL',
  icon: 'simple-icons:mysql',
  iconColor: '#4479A1',
  url: 'https://www.mysql.com/',
});

export const excel = createSkillFactory({
  name: 'Excel',
  icon: 'simple-icons:microsoftexcel',
  iconColor: '#217346',
  url: 'https://www.microsoft.com/en-us/microsoft-365/excel',
});

export const powerBI = createSkillFactory({
  name: 'Power BI',
  icon: 'simple-icons:powerbi',
  iconColor: '#F2C811',
  url: 'https://powerbi.microsoft.com/',
});

export const msOffice = createSkillFactory({
  name: 'Microsoft Office',
  icon: 'simple-icons:microsoftoffice',
  iconColor: '#D83B01',
  url: 'https://www.microsoft.com/microsoft-365',
});

export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'simple-icons:amazonaws',
  iconColor: '#FF9900',
  url: 'https://aws.amazon.com/',
});

export const azure = createSkillFactory({
  name: 'Microsoft Azure',
  icon: 'simple-icons:microsoftazure',
  iconColor: '#0078D4',
  url: 'https://azure.microsoft.com/',
});

export const pandas = createSkillFactory({
  name: 'Pandas',
  icon: 'simple-icons:pandas',
  iconColor: '#150458',
  url: 'https://pandas.pydata.org/',
});

export const numpy = createSkillFactory({
  name: 'NumPy',
  icon: 'simple-icons:numpy',
  iconColor: '#013243',
  url: 'https://numpy.org/',
});

export const apacheSpark = createSkillFactory({
  name: 'Apache Spark',
  icon: 'simple-icons:apachespark',
  iconColor: '#E25A1C',
  url: 'https://spark.apache.org/',
});

export const tableau = createSkillFactory({
  name: 'Tableau',
  icon: 'simple-icons:tableau',
  iconColor: '#E97627',
  url: 'https://www.tableau.com/',
});

export const msSqlServer = createSkillFactory({
  name: 'MS SQL Server',
  icon: 'simple-icons:microsoftsqlserver',
  iconColor: '#CC2927',
  url: 'https://www.microsoft.com/en-us/sql-server',
});

export const tensorflow = createSkillFactory({
  name: 'TensorFlow',
  icon: 'simple-icons:tensorflow',
  iconColor: '#FF6F00',
  url: 'https://www.tensorflow.org/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const databricks = createSkillFactory({
  name: 'Databricks',
  icon: 'simple-icons:databricks',
  iconColor: '#FF3621',
  url: 'https://databricks.com/',
});

export const pytorch = createSkillFactory({
  name: 'PyTorch',
  icon: 'simple-icons:pytorch',
  iconColor: '#EE4C2C',
  url: 'https://pytorch.org/',
});

export const blogger = createSkillFactory({
  name: 'Blogger',
  icon: 'simple-icons:blogger',
  iconColor: '#FF5722',
  url: 'https://www.blogger.com/',
});

export const html = createSkillFactory({
  name: 'HTML',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
});

export const css = createSkillFactory({
  name: 'CSS',
  icon: 'simple-icons:css3',
  iconColor: '#1572B6',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
});

export const jupyterNotebook = createSkillFactory({
  name: 'Jupyter Notebook',
  icon: 'simple-icons:jupyter',
  iconColor: '#F37626',
  url: 'https://jupyter.org/',
});

export const googleSheets = createSkillFactory({
  name: 'Google Sheets',
  icon: 'simple-icons:googlesheets',
  iconColor: '#0F9D58',
  url: 'https://www.google.com/sheets/about/',
});

export const googleColab = createSkillFactory({
  name: 'Google Colab',
  icon: 'simple-icons:googlecolab',
  iconColor: '#F9AB00',
  url: 'https://colab.research.google.com/',
});

export const seaborn = createSkillFactory({
  name: 'Seaborn',
  icon: 'simple-icons:ea',
  iconColor: '#3776AB',
  url: 'https://seaborn.pydata.org/',
});

export const matplotlib = createSkillFactory({
  name: 'Matplotlib',
  icon: 'simple-icons:plotly',
  iconColor: '#11557C',
  url: 'https://matplotlib.org/',
});

export const scikitLearn = createSkillFactory({
  name: 'Scikit-Learn',
  icon: 'simple-icons:scikitlearn',
  iconColor: '#F7931E',
  url: 'https://scikit-learn.org/',
});

export const keras = createSkillFactory({
  name: 'Keras',
  icon: 'simple-icons:keras',
  iconColor: '#D00000',
  url: 'https://keras.io/',
});

export const plotly = createSkillFactory({
  name: 'Plotly',
  icon: 'simple-icons:plotly',
  iconColor: '#3F4F75',
  url: 'https://plotly.com/',
});

export const scipy = createSkillFactory({
  name: 'SciPy',
  icon: 'simple-icons:scipy',
  iconColor: '#8CAAE6',
  url: 'https://scipy.org/',
});

export const statsmodels = createSkillFactory({
  name: 'Statsmodels',
  icon: 'simple-icons:autodesk',
  iconColor: '#AA3754',
  url: 'https://www.statsmodels.org/',
});

export const slack = createSkillFactory({
  name: 'Slack',
  icon: 'simple-icons:slack',
  iconColor: '#4A154B',
  url: 'https://slack.com/',
});

export const clickup = createSkillFactory({
  name: 'ClickUp',
  icon: 'simple-icons:clickup',
  iconColor: '#7B68EE',
  url: 'https://clickup.com/',
});

export const dialogflow = createSkillFactory({
  name: 'Dialogflow',
  icon: 'simple-icons:dialogflow',
  iconColor: '#FF9800',
  url: 'https://dialogflow.cloud.google.com/',
});

export const rasa = createSkillFactory({
  name: 'Rasa',
  icon: 'simple-icons:rasa',
  iconColor: '#5A3E85',
  url: 'https://rasa.com/',
});

export const huggingFaceTransformers = createSkillFactory({
  name: 'Hugging Face Transformers',
  icon: 'simple-icons:c',
  iconColor: '#FFD857',
  url: 'https://huggingface.co/transformers/',
});

