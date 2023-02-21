/*
  use this file to create the left nav information architecture.

  Example code for parent, child, second level parent, second level child:

  {
    name: 'Title of Parent drawer: Getting started',
    parentSlug: 'Parent path: getting-started',
    url: 'This is the page that the user should land on when clicking on the parent drawer. Can be any url: /getting-started/introduction/',
    subMenuItems1: [
      {
        name: 'first level child: Introduction',
        url: 'path to the first level child: /getting-started/introduction/',
      },
      {
        name: 'This is a first level child that is also the second level parent drawer title: Capturing Request Data',
        subParentSlug: 'second parent path: capturing-request-data',
        slug: 'Page that user should land on when clicking on second level parent. Can be any url: /sending-requests/capturing-request-data/capturing-http-requests/',
        subMenuItems2: [
          {
            name: 'second level child: Capturing HTTP requests',
            url: 'path to second level child: /sending-requests/capturing-request-data/capturing-http-requests/',
          },
        ],
      },
    ],
  }
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
        slug: '/specifications/graphql/graphql-hub/',
        subMenuItems2: [
          {
            name: 'GraphQL',
            url: '/specifications/graphql/graphql-hub/',
          },
          {
            name: 'Concepts',
            url: '/specifications/graphql/graphql-concepts/',
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
        url: '/specifications/openapi/',
      }
    ],
  },
  {
    name: 'Lifecycle',
    parentSlug: 'lifecycle',
    url: '/lifecycle/api-lifecycle/',
    subMenuItems1: [
      {
        name: 'API Lifecycle',
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
      }
    ]
  }
];

// export default parentSlugItems;
