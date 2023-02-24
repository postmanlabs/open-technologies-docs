/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, withPrefix } from 'gatsby';

import Layout from '../../../components/layout';
import DynamicLink from '../../../components/Shared/DynamicLink';
import RightNavLinks from '../../../components/RightNavLinks';
import { leftNavItems } from '../../../components/LeftNav/LeftNavItems';
import LeftNav from '../../../components/LeftNav/LeftNav';
import SEO from '../../../components/seo';
// const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';
import 'prismjs/themes/prism-tomorrow.css';
import BreadCrumbsLinks from '../../../components/modules/BreadCrumbsLinks';
import PreviousAndNextLinks from '../../../components/modules/PreviousAndNextLinks';
import { DocWrapper } from '../../../../styles/DocWrapper';
import CalendarDates from '../../../components/calendarDates';
import EditDoc from '../../../components/Shared/EditDoc';
import { RightColumnWrapper } from '../../../../styles/RightColumnWrapper';

const HubWrapper = styled.section`
.calendar a {
  border: none !important;
}
.bloc {
  border: 1px solid ${(props) => props.theme.colors.grey_20};
  margin-top: 25px;
  padding-inline: 12px;
  padding-block-end: 10px;
}
.header {
  background-color: ${(props) => props.theme.colors.grey_10};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey_20};
  margin-bottom: 10px;
  padding-block-start: 15px;
  padding-left: 10px;
  
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

const GraphQLPage = ({ data }) => {

  const { parentLink, subParentLink, previous, next } = data;

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
              <main className="col-lg-9 offset-lg-0 col-xl-7 doc-page ml-xl-5">
                <BreadCrumbsLinks data={{ parentLink, subParentLink }} />
                <div className='row mb-4'>
                  <img src="https://voyager.postman.com/logo/external/graphql-icon.svg" alt="graphql icon" className='mr-3' width="50px" />
                  <h1>GraphQL</h1>
                </div>
                <section className="pb-4">
                  <h3 >What is GraphQL?</h3>
                  <p>
                    GraphQL is a query language for APIs, and a server-side runtime for executing queries using a type system you define for your data.</p>
                  <h3>Why use GraphQL?</h3>
                  <p>GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.</p>
                </section>
                <HubWrapper className='mb-5'>
                  <div className="row justify-content-evenly">
                    <div className="col-lg-6 mb-5">
                      <div className="mb-2">
                        <img src={withPrefix("/images/Community.png")} alt="community Icon" width="50px" className='mr-2' />
                        <h4 >Meet the Team</h4>
                        <div className='mb-2'>
                          <DynamicLink url="https://www.linkedin.com/in/doc-jones" name="Doc Jones - GraphQL Lead →" />
                        </div>
                        <div >
                          <DynamicLink url="https://www.linkedin.com/in/meenakshi-dhanani" name="Meenakshi Dhanani - Developer Relations Engineer →" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                      <div className="mb-2">
                        <img src={withPrefix("/images/Info.png")} alt="community Icon" width="50px" className='mr-2' />
                        <h4>GraphQL News</h4>
                        <div className="mb-2">
                          <DynamicLink url="/specifications/graphql/getting-started-with-graphql-client/" name="Postman's New GraphQL Client →" />
                        </div>
                        <div className="mb-2">
                          <DynamicLink url="/specifications/graphql/getting-started-with-graphql-client/" name="Getting Started Guide for New GraphQL Client →" />
                        </div>
                        <div className="mb-2">
                          The GraphQL Conference 2023 CFP Open March 20th
                        </div>
                        <div className="mb-2">
                          New Directives to be released in GraphQL Spec 2023
                        </div>
                        <div className="mb-2">
                          <DynamicLink url="https://newsroom.ibm.com/IBM-Acquires-StepZen-to-Help-Enterprises-Get-More-Business-Value-from-Their-Data-and-APIs" name="IBM acquires StepZen →" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                      <div className="mb-2">
                        <img src={withPrefix("/images/description.png")} alt="description. Icon" width="50px" className='mr-2' />
                        <h4>GraphQL Specifications</h4>
                        <div className='mb-2'>
                          <DynamicLink url="https://spec.graphql.org/October2021/" name="GraphQL Specification 2021 →" />
                        </div>
                        <div >
                          <DynamicLink url="https://github.com/graphql/graphql-over-http" name="GraphQL Over HTTP →" />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-5">
                      <div className="">
                        <img src={withPrefix("/images/Events.svg")} alt="community Icon" width="50px" className='mr-2' />
                        <h4>Calendar</h4>
                        <div className='mb-2'>
                          <CalendarDates />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-5">
                      <div className="mb-2">
                        <img src={withPrefix("/images/Contract.png")} alt="contract. Icon" width="50px" className='mr-2' />
                        <h4>GraphQL Meeting Notes</h4>
                        <div className='mb-2'>
                          <DynamicLink url="https://github.com/graphql/graphql-wg/tree/main/notes" name="GraphQL working group →" />
                        </div>
                        <div className='mb-2'>
                          <DynamicLink url="https://github.com/graphql/composite-schemas-wg/tree/main/notes" name="GraphQL Composite Schema →" />
                        </div>
                        <div >
                          GraphQL Board
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                      <div className="mb-2">
                        <img src={withPrefix("/images/Community-love.png")} alt="community with heart. Icon" width="50px" className='mr-2' />
                        <h4>GraphQL Community</h4>
                        <div className='mb-2'>
                          <DynamicLink url="https://discord.gg/MmBhseqESR" name="Discord →" />
                        </div>
                        <div className='mb-2'>
                          <DynamicLink url="https://stackoverflow.com/search?q=graphql&s=8b4cbe4a-d3db-4a53-b7e9-48a56ccd5a74/" name="Stack Overflow →" />
                        </div>
                        <div className='mb-2'>
                          <DynamicLink url="https://www.reddit.com/r/graphql/" name="Reddit →" />
                        </div>
                        <div>
                          <DynamicLink url="https://twitter.com/GraphQL" name="Twitter →" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                      <div className="">
                        <img src={withPrefix("/images/Engagement.png")} alt="community Icon" width="50px" className='mr-2' />
                        <h4 >Contribute to GraphQL</h4>
                        <div className='mb-2'>
                          <DynamicLink url="https://github.com/graphql/graphql-wg" name="GraphQL working group →" />
                        </div>
                        <div className='mb-2'>
                          <DynamicLink url="https://github.com/graphql/dataloader" name="DataLoader →" />
                        </div>
                        <div className='mb-2'>
                          <DynamicLink url="https://github.com/graphql/graphql-js-wg" name="GraphQL.js →" />
                        </div>
                        <div className='mb-2'>
                          <DynamicLink url="https://github.com/graphql/composite-schemas-wg" name="Composite Schema working group →" />
                        </div>
                        <div className='mb-2'>
                          <DynamicLink url="https://github.com/graphql/graphiql" name="GraphiQL →" />
                        </div>
                        <div className='mb-2'>
                          <DynamicLink url="https://github.com/graphql/graphql-playground" name="GraphQL Playground →" />
                        </div>
                      </div>
                    </div>
                  </div>
                </HubWrapper>
                {/* Qualtrics */}
                <PreviousAndNextLinks data={{ previous, next }} />
              </main>
              <RightColumnWrapper className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">
                <EditDoc />

                <ContextualStyles >
                  <div className='contextual-links__section'>
                    GraphQL resources
                  </div>
                  <div className="contextual-links__link">
                    <DynamicLink name="Postman joins GraphQL Foundation" url="https://blog.postman.com/postman-joins-graphql-foundation/" />
                  </div>
                  <div className="contextual-links__link">
                    <DynamicLink name="What is GraphQL part one the Facebook years" url="https://blog.postman.com/what-is-graphql-part-one-the-facebook-years/" />
                  </div>
                  <div className="contextual-links__link">
                    <DynamicLink name="How to build secure GraphQL APIs" url="https://blog.postman.com/how-to-build-secure-graphql-apis/" />
                  </div>
                </ContextualStyles>
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