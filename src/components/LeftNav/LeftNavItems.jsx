/*
  use this file to create the left nav information architecture.
*/

export const leftNavItems = [ 
  
  {
    name: 'Specifications',
    parentSlug: 'specifications',
    url: '/specifications/overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/specifications/overview/',
      },  
      {
        name: 'Collections',
        url: '/specifications/collections/',
      },   
      {
        name: 'GraphQL',
        subParentSlug: 'graphql',
        slug: '/specifications/graphql/graphql/',
        subMenuItems2: [
          {
            name: 'GraphQL',
            url: '/specifications/graphql/graphql/',
          },
          {
            name: 'Concepts',
            url: '/specifications/graphql/concepts/',
          },   
          {
            name: 'Getting started with new GraphQL Client',
            url: '/specifications/graphql/getting-started-with-graphql-client/',
          }, 
          {
            name: 'How to build an Echo Service for GraphQL',
            url: '/specifications/graphql/echo-service/',
          }, 
        ],
      },  
      {
        name: 'OpenAPI',
        subParentSlug: 'openapi',
        slug: '/specifications/openapi/openapi/',
        subMenuItems2: [
        {
          name: 'OpenAPI',
          url: '/specifications/openapi/openapi/',
        },
        {
          name: 'Structure',
          url: '/specifications/openapi/structure/',
        },
        {
          name: 'History',
          url: '/specifications/openapi/history/',
        },
        {
          name: 'Lifecycle',
          url: '/specifications/openapi/lifecycle/',
        },
        {
          name: 'Governance',
          url: '/specifications/openapi/governance/',
        }
        ],
      }
    ],
  },
  {
    name: 'Lifecycle',
    parentSlug: 'lifecycle',
    url: '/lifecycle/api-lifecycle/',
    subMenuItems1: [
      {
        name: 'API lifecycle',
        url: '/lifecycle/api-lifecycle/'
      },
      {
        name: 'Gateways',
        url: '/lifecycle/gateways/',
      }
    ],
  },
  {
    name: 'Data & AI',
    parentSlug: 'data_and_ai',
    url: '/data_and_ai/digital-knowledge-and-mi/',
    subMenuItems1: [
      {
        name: 'Digital knowledge and machine intelligence',
        url: '/data_and_ai/digital-knowledge-and-mi/'
      }
    ],
  },
  {
    name: 'Blog',
    url: '/blog/graphql-security/',
    parentSlug: 'blog',
    subMenuItems1: [
      {
        name: 'The Whys of GraphQL Security',
        url: '/blog/graphql-security/',
      },
      {
        name: 'Error Handling in GraphQL',
        url: '/blog/graphql-error-handling/',
      }
    ]
  }
];
