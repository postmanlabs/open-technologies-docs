/* eslint-disable react/no-danger */
import React, {useState} from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import FilterCard from "../components/filterCards/FilterCard";
import FilterButtons from "../components/filterCards/FilterButtons";
import RightNavLinks from '../components/RightNavLinks';
import { leftNavItems } from '../components/LeftNav/LeftNavItems';
import LeftNav from '../components/LeftNav/LeftNav';
import SEO from '../components/seo';
// const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';
import 'prismjs/themes/prism-tomorrow.css';
import BreadCrumbsLinks from '../components/modules/BreadCrumbsLinks';
import PreviousAndNextLinks from '../components/modules/PreviousAndNextLinks';
import { BaseLinkStyles } from 'aether-marketing';
import Data from '../components/filterCards/Data';

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
 
const GraphQLPage = ({data}) => {
  const [item, setItem] = useState(Data);

  const cardItems = [...new Set(Data.map((info) => info.tag))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newInfo) => {
      return newInfo.tag === curcat;
    });
    setItem(newItem);
  };
  const { parentLink, subParentLink, previous, next } = data;

  return (
    <Layout>
      <SEO title="Postman GraphQL"
          description='GraphQL activities deliver both internal and external value for Postman.'
          slug="/graphql/" />
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
          
              <div className="row justify-content-evenly">
                
              <div className="container-fluid">
                    <div className="row">

                    <FilterButtons
                        filterItem={filterItem}
                        setItem={setItem}
                        cardItems={cardItems}
                    />
                    {/* {console.log(item, "test")} */}
                    <FilterCard item={item} />
                    </div>
                </div>
               
                </div>
              
              
                <PreviousAndNextLinks data={{ previous, next }} />
              </main>
              <RightColumnWrapper className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">
                
                <RightNavLinks />
                 
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
