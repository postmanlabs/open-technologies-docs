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
  
  // {
  //   name: 'Collections',
  //   parentSlug: 'collections',
  //   url: '/collections/page1',
  //   subMenuItems1: [
  //     {
  //       name: 'Page1',
  //       url: '/collections/page1/',
  //     },     
  //     {
  //       name: 'Page2',
  //       url: '/collections/page2/',
  //     },         
  //   ],
  // },
  {
    name: 'GraphQL',
    parentSlug: 'graphql',
    url: '/graphql/graphqlHub/',
    subMenuItems1: [
      {
        name: 'Introduction',
        url: '/graphql/introduction/',
      },
      {
        name: 'GraphQL Concepts',
        url: '/graphql/graphqlConcepts/',
      },
    
      {
        name: 'Blog',
        slug: '/graphql/blog/echoservice/',
        subParentSlug: 'blog',
        subMenuItems2: [
          {
          name: 'How to Build an Echo Service for GraphQL',
          url: '/graphql/blog/echoservice/',
          }
        ]
      },
      {
        name: 'Page2',
        url: '/graphql/page2/',
      },
      {
        name: 'Page3',
        url: '/graphql/page3/',
      },
    ],
  },
  {
    name: 'Specifications',
    parentSlug: 'specifications',
    url: '/specifications/asyncapi/',
    subMenuItems1: [
      {
        name: 'Testing',
        url: '/specifications/testing/',
      },
      {
        name: 'Collections',
        url: '/specifications/asyncapi/',
      },     
      {
        name: 'OpenAPI',
        url: '/specifications/openapi/',
      },  
      {
        name: 'gRPC',
        url: '/specifications/grpc/',
      },
    ],
  },
  {
    name: 'Lifecycle',
    parentSlug: 'lifecycle',
    url: '/lifecycle/',
    subMenuItems1: [
      {
        name: 'Lifecycle',
        url: '/lifecycle/'
      },
      {
        name: 'Gateways',
        url: '/lifecycle/gateways/',
      },
    ],
  },
];

// export default parentSlugItems;
