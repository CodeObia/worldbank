import {
  GeneralConfigs,
  ComponentDashboardConfigs
} from './generalConfig.interface';

/**
 * * componentConfigs.source determine where
 * * this component will get it's data from the store
 * * `search for getBuckets in the Store`
 * * IF you want to change the chart type
 *    * change the type
 * * IF you want to add new component add an id to it
 *    * in the `ComponentsIdsToScroll`
 */

export const dashboardConfig: GeneralConfigs[] = [
  // {
  //   show: false,
  //   class: 'col-md-3 no-side-padding',
  //   component: 'SimiCircleComponent',
  //   componentConfigs: {
  //     id: 'SimiCircle',
  //     title: 'Info Products by Type',
  //     source: 'status',
  //     chartType: 'pie',
  //     description: `
  //         All the available :${
  //           icons.export
  //         } to export this graphic, click on ICONS:${
  //       icons.arrowUp
  //     } to collapse it.
  //     `,
  //   } as ComponentDashboardConfigs,
  //   scroll: {
  //     linkedWith: 'topLists',
  //   },
  //   tour: true,
  // },
  // {
  //   show: false,
  //   class: 'col-md-9 no-side-padding',
  //   component: 'LineComponent',
  //   componentConfigs: {
  //     id: 'lineChart',
  //     title: 'Info Products by Type',
  //     source: 'status',
  //     chartType: 'line',
  //     description: `
  //         All the available :${
  //           icons.export
  //         } to export this graphic, click on ICONS:${
  //       icons.arrowUp
  //     } to collapse it.
  //     `,
  //   } as ComponentDashboardConfigs,
  //   scroll: {
  //     linkedWith: 'topLists',
  //   },
  //   tour: true,
  // },
  {
    show: true,
    class: 'col-md-6 no-side-padding',
    component: 'PieComponent',
    componentConfigs: {
      id: 'pie',
      title: 'Info Products by Type',
      source: 'type',
      description: `
          All the available information products are represented here and disaggregated by Type.
          You can toggle on/off individual type of visualization in the list at the right side of
          the graphic. Click on ICONS:view_headline to export this graphic, click on ICONS:expand_less to collapse it.
      `
    } as ComponentDashboardConfigs,
    scroll: {
      icon: 'pie_chart'
    },
    tour: true
  },
  {
    class: 'col-md-6 no-side-padding',
    show: true,
    component: 'WordcloudComponent',
    componentConfigs: {
      id: 'wordcloud',
      title: 'Info Products by Subject',
      source: 'subject',
      description: `
          Top Subjects tags for all the information products are represented here, the greater the word,
          the higher the number of information. Products tagged to that specific Subject. Click on ICONS:view_headline
          to export this graphic, click on ICONS:expand_less to collapse it.
      `
    } as ComponentDashboardConfigs,
    scroll: {
      linkedWith: 'pie'
    },
    tour: true
  },
  {
    show: true,
    class: 'col-md-12 mt-3 no-side-padding',
    component: 'BarComponent',
    componentConfigs: {
      id: 'column',
      source: ['type', 'year.keyword'],
      title: 'Info Products Analytics',
      chartType: 'column',
      description: `
            All Information Products are represented here and can be further disaggregated by two variables at the same time
            choosing from “Type", "Year", "Author", "CRP" and "Funder". The "Year" pre-selects the five most recent years. The
            other filters automatically pre-select those options that have the most results, helping you to access your
            information faster. Click on ICONS:view_headline to export
            this graphic, click on ICONS:expand_less to collapse it.
      `
    } as ComponentDashboardConfigs,
    scroll: {
      icon: 'bar_chart'
    },
    tour: true
  },
  {
    class: 'col-md-6 mt-3 no-side-padding',
    show: true,
    component: 'ListComponent',
    componentConfigs: {
      id: 'topLists',
      title: 'Top Contributors',
      source: 'author',
      description: `
          The top twenty Authors by number of information products.
          Click on ICONS:expand_less to collapse the list.
      `
    } as ComponentDashboardConfigs,
    scroll: {
      icon: 'list_alt'
    },
    tour: true
  },
  {
    class: 'col-md-6 mt-3 no-side-padding',
    show: true,
    component: 'ListComponent',
    componentConfigs: {
      id: 'funders',
      title: 'Funders',
      source: 'sponsorship',
      description: `
          All funders tagged across all information products are represented here and
          orderd by quantity of tags for each funder. Scroll down to see more results.
          Click on ICONS:expand_less to collapse the list.
      `
    } as ComponentDashboardConfigs,
    scroll: {
      linkedWith: 'topLists'
    },
    tour: true
  },
  {
    class: 'col-md-6 mt-3 no-side-padding',
    show: true,
    component: 'ListComponent',
    componentConfigs: {
      id: 'topTopics',
      title: 'Top Topics',
      source: 'topic',
      description: `
          The top twenty Topics by number of information products.
          Click on ICONS:expand_less to collapse the list.
      `
    } as ComponentDashboardConfigs,
    scroll: {
      icon: 'list_alt'
    },
    tour: true
  },
  {
    class: 'col-md-6 mt-3 no-side-padding',
    show: true,
    component: 'ListComponent',
    componentConfigs: {
      id: 'publishers',
      title: 'Top Publishers',
      source: 'publisher',
      description: `
          All Publishers tagged across all information products are represented here and
          orderd by quantity of tags for each funder. Scroll down to see more results.
          Click on ICONS:expand_less to collapse the list.
      `
    } as ComponentDashboardConfigs,
    scroll: {
      linkedWith: 'topTopics'
    },
    tour: true
  },
  {
    class: 'col-md-12 mt-3 no-side-padding',
    show: true,
    component: 'ListComponent',
    componentConfigs: {
      id: 'paginatedList',
      title: 'Info Producs List of Results',
      description: `
          All information products found are represented here, You can sort this list by "Date",
          "Type", "Authors", "Altmetric: Attention Score" and "Views & Downloads" info.
          Click on ICONS:expand_less to collapse the list.
      `,
      content: {
        title: 'title',
        icon: 'repo',
        identifierUri: 'uri',
        altmetric: true,
        description: 'abstract',
        tags: {
          Publisher: 'publisher',
          Subject: 'subject',
          Type: 'type',
          'Date issued': 'date',
          'Attention Score': 'altmetric',
        },
        filterOptions: [
          { display: 'Date', value: 'date', sort: 'desc' },
          { display: 'Type', value: 'type.keyword', sort: 'desc' },
          {
            display: 'Authors',
            value: 'citation.keyword',
            sort: 'desc'
          },
          {
            display: 'Altmetric: Attention Score',
            value: 'altmetric.score',
            sort: 'desc'
          }
        ]
      }
    } as ComponentDashboardConfigs,
    scroll: {
      icon: 'view_list'
    },
    tour: true
  }
];
