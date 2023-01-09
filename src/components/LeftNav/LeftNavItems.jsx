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
        name: 'OpenAPI',
        url: '/specifications/openapi',
      },     
    ],
  },
  {
    name: 'Patterns',
    parentSlug: 'patterns',
    url: '/patterns/graphql/',
    subMenuItems1: [
      {
        name: 'GraphQL',
        url: '/patterns/graphql/',
      },
    ],
  },
  {
    name: 'Lifecycle',
    parentSlug: 'lifecycle',
    url: '/lifecycle/gateways/',
    subMenuItems1: [
      {
        name: 'Gateways',
        url: '/lifecycle/gateways/',
      },
    ],
  },
];

// export default parentSlugItems;
