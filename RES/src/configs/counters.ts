import {
  GeneralConfigs,
  ComponentCounterConfigs,
} from './generalConfig.interface';

export const countersConfig: GeneralConfigs[] = [
  {
    show: true,
    componentConfigs: {
      id: 'counters',
      title: 'Total Items',
      source: 'total',
      description: `
        Total number of information product found
      `,
    } as ComponentCounterConfigs,
    scroll: {
      icon: 'dashboard',
    },
    tour: true,
  },
  {
    show: true,
    componentConfigs: {
      id: 'authors',
      title: 'Authors',
      source: 'author.keyword',
      description: `
        Total number of Authors involved with the information
        product found
      `,
    } as ComponentCounterConfigs,
    tour: true,
  },
  {
    show: true,
    componentConfigs: {
      id: 'subjectcount',
      title: 'Subjects',
      source: 'subject.keyword',
      description: `
        Total number of Subjects involved with the information
        product found
      `,
    } as ComponentCounterConfigs,
    tour: true,
  },
  {
    show: true,
    componentConfigs: {
      id: 'topiccounts',
      title: 'Topics',
      source: 'topic.keyword',
      description: `
        Total number of Topics involved with the information
        product found
      `,
    } as ComponentCounterConfigs,
    tour: true,
  }
  ,
  {
    show: true,
    componentConfigs: {
      id: 'publishercounts',
      title: 'Publishers',
      source: 'publisher.keyword',
      description: `
        Total number of Publishers involved with the information
        product found
      `,
    } as ComponentCounterConfigs,
    tour: true,
  },
  {
    show: true,
    componentConfigs: {
      id: 'regionscounts',
      title: 'Regions',
      source: 'region.keyword',
      description: `
        Total number of Regions involved with the information
        product found
      `,
    } as ComponentCounterConfigs,
    tour: true,
  }
  ,
  {
    show: true,
    componentConfigs: {
      id: 'sponsorcounts',
      title: 'Funders',
      source: 'sponsorship.keyword',
      description: `
      Total number of Funders involved with the information
      product found
      `,
    } as ComponentCounterConfigs,
    tour: true,
  },
  {
    show: true,
    componentConfigs: {
      id: 'languages',
      title: 'Languages',
      source: 'language.keyword',
      description: `
      Total number of Languages involved with the information
      product found
      `,
    } as ComponentCounterConfigs,
    tour: true,
  }
];
