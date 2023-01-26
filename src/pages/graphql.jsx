/* eslint-disable react/no-danger */
import React, { useState }  from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { ConceptCard } from '../components/MarketingPages/ConceptCards';
import DynamicLink from '../components/Shared/DynamicLink';
import EditDoc from '../components/Shared/EditDoc';
import { leftNavItems } from '../components/LeftNav/LeftNavItems';
import LeftNav from '../components/LeftNav/LeftNav';
import SEO from '../components/seo';
const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';
import 'prismjs/themes/prism-tomorrow.css';
import BreadCrumbsLinks from '../components/modules/BreadCrumbsLinks';
import PreviousAndNextLinks from '../components/modules/PreviousAndNextLinks';
import { BaseLinkStyles } from 'aether-marketing';
import Data from './Data';

const DocWrapper = styled.div`
  /* Used for Deeplinking */   
h2, h3, h4 {
  scroll-margin-top: 2em;
}

.doc-page {
  a {
    ${BaseLinkStyles.componentStyle.rules}
  }
  padding-left: 40px !important;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 40px;

  @media (min-width:992px) and (max-width: 1199px) {
    padding-right: 32px;
  }

  @media (min-width:992px) {
    padding-top: 64px;
  }

  img {
    max-width: 100%;
    height: auto;
    image-rendering: -webkit-optimize-contrast;
  }
  img[src$='#icon'] {
    margin-bottom: 0;
  }

  ul {
    margin-left: 16px;
    margin-bottom: 24px;

    li::marker {
      padding-inline-start: 39px;
      color: ${(props) => props.theme.colors.orange_30};
    }

    &::after,
      &::before {
      display: inline-block;
      direction: rtl !important;
      margin-left: -28px !important;
      padding-right: 16px !important;
      width: 28px !important;
      } 
    
    li {
      margin-bottom: 8px;
      line-height: 1.625;
      padding: 0 0 0 16px;

      li::before {
        direction: rtl !important;
        margin-left: -28px !important;
        padding-right: 16px !important;
        width: 28px !important;
      }
    }
    li::before {
      direction: rtl !important;
      margin-left: -28px !important;
      padding-right: 16px !important;
      width: 28px !important;
    }

    list-style-type: '✦';

    li::marker {
      color: ${(props) => props.theme.colors.orange_30};
  }

  ol {
    li {
      padding-left: 10px;
      margin-bottom: 8px;
    }
    li::marker {
      color: $${(props) => props.theme.colors.grey_70};
    }
  } 

  @media (max-width: 765px) {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
} 


/* Blockquotes */
blockquote {
  box-sizing: border-box;
  width: 100%;
  border: solid ${(props) => props.theme.colors.grey_20} 1px;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: 16px 24px;
  background-color: ${(props) => props.theme.colors.grey_05};
  margin-left: 0;
}
blockquote code.language-text {
  background-color: ${(props) => props.theme.colors.grey_00};
}


table {
  font-size: 16px !important;
  line-height: 1.5;
}

td {
  padding: 10px;
}

thead:first-child:hover tr{
  background-color: ${(props) => props.theme.colors.grey_00};
}


/**
* add syntax highlighting
*/
.language-text {

  background-color: ${(props) => props.theme.colors.grey_10};
  color: ${(props) => props.theme.colors.grey_90};
}
:not(pre) > code[class*="language-"] {
  background-color: ${(props) => props.theme.colors.grey_10};
  color: ${(props) => props.theme.colors.grey_90};
  padding: 1px 4px 2px !important;
  font-size: 1.5rem !important;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.grey_30};
  border-radius: ${(props) => props.theme.borderRadius.medium};
}

code[class*="language-"] {
  word-break: break-word !important;
  overflow-wrap: break-word !important;
  
}

.gatsby-highlight {
  background-color: ${(props) => props.theme.colors.grey_80};
  border-radius: ${(props) => props.theme.borderRadius.small};
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;

  code[class*="language-"],
  .token.comment, 
  .token.string,
  .token.number,
  .token.boolean,
  .token.class-name,
  .token.constant,
  .token.parameter,
  .token.keyword,
  .token.operator,
  .token.function,
  .token.property,
  .token.attr-name,
  .token.attr-value,
  .token.tag,
  .token.punctuation {
    font-family: 'IBM Plex Mono';
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.666rem;
  }

  /**
  * Remove the default PrismJS theme background-color, border-radius, margin,
  * padding and overflow.
  * 1. Make the element just wide enough to fit its content.
  * 2. Always fill the visible space in .gatsby-highlight.
  * 3. Adjust the position of the line numbers
  */
  pre[class*="language-"] {
    font-family: 'IBM Plex Mono';
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: calc(100% - 3em);
    white-space: pre-wrap;
    word-break: break-word;
  }
}

.previous-next-links {
  display: flex;
  justify-content: space-between;
}
}
.left-nav-re {
  padding: 32px 0px 8px 0px;
  background-color: ${(props) => props.theme.colors.grey_05};
  font-size: 14px;

  & ul {
    margin-left: 0;
    margin-bottom: 1.6rem !important;
    & ul {
      margin-left: 32px;
      margin-top: 8px;
      & ul {
        margin-left: 32px;
        margin-top: 12px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }

  & li {
    &:hover {
      cursor: pointer;
    }
  }
}

.events__alert {
    border: 4px dashed ${(props) => props.theme.colors.blue_10};
    border-radius: ${(props) => props.theme.borderRadius.medium};
    padding: .75rem 1.25rem;
    /* color: #0C5460; */
    color: ${(props) => props.theme.colors.blue_80};
}
`

const RightColumnWrapper = styled.aside`
  margin-top: 0px;
  padding-left: 40px !important;

  @media (min-width:992px) {
    margin-top: 119px;
    padding-right: 24px;
    padding-left: 0px !important;
  }

.sticky {
  margin-top: 64px;
  position: -webkit-sticky;
  position: sticky !important;
  top: 160px;
}

.postmanaut-dab {
  max-width: 250px;
}
.dynamic-link  {
  width: 100;
}
`
const ContextualStyles = styled.div`

   .contextual-links__section {
    margin-top: 24px;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grey_80};
  }
  .contextual-links__link {
    margin-bottom: 0;
    padding: 4px 0;
    display: block;
    
    a {
      color: ${(props) => props.theme.colors.grey_50};
      font-size: 14px;
      text-decoration: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.grey_00};
      transition: ${(props) => props.theme.transitions.all};
    }
    
    &:hover {
      a {
        color: ${(props) => props.theme.colors.blue_60};
        border-bottom: 1px solid ${(props) => props.theme.colors.blue_60};
        transition: ${(props) => props.theme.transitions.all};
      }
    }
  }

  .contextual-links__subtitle {
    color: ${(props) => props.theme.colors.grey_60};
    font-size: 15px;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: .7rem;
  }

  .contextual-links__alert {
    border: 4px dashed ${(props) => props.theme.colors.grey_10};
    border-radius: ${(props) => props.theme.borderRadius.small};
    padding: .75rem 1.25rem;
    color: #0C5460;
  }

  // tablet view
  @media (min-width: 767px) and (max-width: 990px) {
      padding-bottom: 80px;
  }


  // mobile view
  @media (max-width: 767px) {
    padding-bottom: 80px;
  }


`
// const IntrospectionCode = `
// {
//   __schema {                     
//    types {                    
//       name                     
//     }                     
//   }  
//  }
// `

//  const QueryCode = `
// type Query { 
//     users: [User]
//     user(id: ID!): User
//   }
// `

//  const MutationCode = `
// type Mutation {
//     createUser(name: String!, email: String!): User  
//     updateUser(id: ID!, name: String, email: String): User  
//     deleteUser(id: ID!): User 
//   }
// `
//  const SubscriptionCode = `
// {
//   subscription onFilmAdded(id: ID!, filmID: ID) {
//     filmAdded(id: $id, filmID: $filmID) {
//       title
//     }
//   }
// }
// `
//  const LiveQueryCode = `
// // Subscribe to real-time updates on the current temperature in a city
// const query = 
//   subscription {                    
// temperature(city: "San Francisco")                    
//   }
// ;

// // Create a function to handle updates from the server
// const handleUpdate = (temperature) => {                   
  
// };   
// // Send the subscription request to the server and pass the update handler function         
// client.subscribe({ query, handleUpdate });
// `
//  const CustomScalarCode = `
// type Cake {
//     id: ID!
//     name: String!
//     price: Float
//     available: Boolean!
//     hasFrosting: Boolean!
//     hasFilling: Boolean!
//     hasToppingOption: Boolean!
//     toppingKind: String
//     whenCreated: DateTime!
//     lastUpdated: DateTime!
//     }
// `

const Tag = styled.button`
    border-radius: 20px;
    border: transparent;
    width: fit-content;
    padding: 3px 10px;
    color: white;
    font-size: 10px;
    font-weight: bold;
    margin-right: 5px;
    &.graphql[data-text=graphql] {
        background-color: rgb(45, 81, 170)!important;
    }
    &.api {
        background-color: rgb(216, 245, 200);
        color: black;
    }
    &.schema {
        background-color: rgb(102, 102, 102);
    }
    &.type {
        background-color: rgb(163, 198, 252);
        color: black;
    }
    &.operation{
        background-color: rgb(250, 216, 122);
        color: black;
    }
    &.subscription {
        background-color: rgb(92, 197, 72);
    }
    &.real-time {
        background-color: rgb(81, 188,251);
    }
    &.non-spec {
        background-color: rgb(203, 243, 234);
        color: black;
    }
    &.scalars {
        background-color: rgb(202,89,49);
    }
    &.client {
        background-color: rgb(177, 121, 35);
    }
    &.all {
      background-color: orange;
    }
`

 
const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.tag === curcat; 
          // comparing category for displaying data
    });
    setItem(newItem);
  };

const GraphQLPage = ({data}) => {

  const [item, setItem] = useState(Data);
  const { parentLink, subParentLink, previous, next } = data;
  
  
const tagItems = [...new Set(Data.map((Val) => Val.tag))]
  return (
    <Layout>
      <SEO title="Postman GraphQL"
          description='GraphQL activities deliver both internal and external value for Postman.'
          slug="/auto-flex-policy/" />
      <DocWrapper className="container-fluid">
        <div className="row row-eq-height">
          <nav className="col-sm-12 col-md-4 col-lg-3 left-nav-re">
            <LeftNav leftNavItems={leftNavItems} />
          </nav>
          <div className="col">
            <div className="row row-eq-height">
              <main className="col-sm-12 col-md-12 col-lg-9 offset-lg-0 col-xl-7 doc-page ml-xl-5">
              <BreadCrumbsLinks data={{ parentLink, subParentLink }} />
                {/* Qualtrics */}

                <h1>GraphQL</h1>
              <h2 className="mt-5 mb-3">GraphQL Concepts</h2>

              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam vitae ratione eveniet fuga assumenda id dolor corrupti. Aperiam ab a reiciendis, odit dignissimos tempore minima autem cum animi pariatur!
              </p>
     
                  <p className=''>Filter by tag:</p>
                <div className="d-flex justify-content-center mb-3">
        {tagItems.map((Val, id) => {
          return (
            <Tag
            className={Val}
              data-text={Val}
              key={id}
              onClick={() => filterItem(Val)}
            >
              {Val}
            </Tag>
          );
        })}
        <Tag
          className="all"
          onClick={() => setItem(Data)}
        >
          All
        </Tag>
       </div>
     
              <div className="row justify-content-evenly">
              {item.map((Val) => (  <div key={uuidv4()} className="col-lg-6 mb-3 mb-md-4 ">
              
                  <ConceptCard
                  
                       title={Val.title}
                       description={Val.description}
                       tag={Val.tag}
                       code={Val.code}
                      />
                      
                  </div>))}
                
               
                </div>
              
              
                <PreviousAndNextLinks data={{ previous, next }} />
              </main>
              <RightColumnWrapper className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">
                
                <EditDoc />
                <ContextualStyles >
                  <div className='contextual-links__section'>
                  Latest News
                  </div>
                <div className="contextual-links__link" >
                  <DynamicLink url="https://www.postman.com/downloads/" name="API-First Transformation Book" />
                </div>
                {/* <div className="contextual-links__link" >
                  <DynamicLink  url="https://www.postman.com/downloads/" name="API-First Transformation Book" />
                  </div> */}
                  </ContextualStyles>
                  <ContextualStyles >
                  <div className='contextual-links__section'>
                 Blogs
                  </div>
                <div className="contextual-links__link" >
                  <DynamicLink url="https://www.docdocgo.dev/" name="DocDocGo" />
                  </div> <div className="contextual-links__link" >
                  <DynamicLink url="https://www.docdocgo.dev/tag/graphql-101/" name="GraphQL Series" />
                  </div>
                  <div className="contextual-links__link" >
                  <DynamicLink url="https://www.blog.postman.com/" name="Postman Blog" />
                </div>
                <div className='contextual-links__section'>
                 Events
                  </div>
                  <div className="contextual-links__link" >
                  <DynamicLink url="https://www.apollographql.com/events/virtual-event/graphql-summit/" name="GraphQL Summit" />
                </div>
                <div className='contextual-links__section'>
                 Resources
                  </div>
                  <div className="contextual-links__link" >
                  <DynamicLink url="https://github.com/postman-open-technologies/graphql/" name="Postman GraphQL Repo" />
                </div>
                <div className="contextual-links__link" >
                  <DynamicLink url="https://2022.stateofgraphql.com/en-US/" name="The State of GraphQL 2022" />
                </div>
                {/* <div className='contextual-links__section'>
                 Social
                  </div>
                  <div className="contextual-links__link" >
                  <DynamicLink url="https://github.com/postman-open-technologies/graphql/" name="Postman GraphQL Repo" />
                </div> */}
                  </ContextualStyles>
                <div className="sticky">
                  <div> 
                    <p>
                      <span className="font-weight-bold">Open Technologies</span> 
                      <br></br>
                       help with providing a safe space to grow and flourish.
                    </p>

                  </div>
                  
                  <figure className="postmanaut-dab mt-1">
                    <img src="https://voyager.postman.com/illustration/postmanaut-posing-dancing-postman-illustration.svg" alt="Posmanaut dancing. Illustration." className="img-fluid" />
                  </figure>
                </div>
              </RightColumnWrapper>
            </div>
          </div>
        </div>
      </DocWrapper>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
    nodes {
      fields {
        slug
        lastModifiedDate
        lastModifiedTime
      }
    }
  }
  }
`;
export default GraphQLPage;
/* eslint-enable */
