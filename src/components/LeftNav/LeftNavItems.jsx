/*
  use this file to create the left nav information architecture.
*/

export const leftNavItems = [ 
  
  {
    name: 'Specifications',
    parentSlug: 'specifications',
    url: '/specifications/collections/',
    subMenuItems1: [
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
        slug: '/specifications/openapi/openapi',
        subMenuItems2: [
        {
          name: 'OpenAPI',
          url: '/specifications/openapi/openapi',
        },
        {
          name: 'Test1',
          url: '/specifications/openapi/test1',
        },
        {
          name: 'Test2',
          url: '/specifications/openapi/test2',
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
    name: 'Blog',
    url: '/blog/graphql-security/',
    parentSlug: 'blog',
    subMenuItems1: [
      {
        name: 'The Whys of GraphQL Security',
        url: '/blog/graphql-security/',
      },
      {
        name: 'The GraphQL Execution Engine',
        url: '/blog/graphql-execution/',
      }
    ]
  }
];
