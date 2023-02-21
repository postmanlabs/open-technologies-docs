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

const SvgWrapper = styled.i`
  // gets rid of weird background bug with our icons. We need to redo these.
  background: 0 0;
  
  svg.button-icon--left {
    margin-right: 7px;
    overflow: hidden;
    vertical-align: middle;
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
                          <DynamicLink url="https://www.linkedin.com/in/meenakshi-dhanani" name="Meenakshi Dhanani Developer - Relations Engineer →" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                      <div className="mb-2">
                        <img src={withPrefix("/images/Info.png")} alt="community Icon" width="50px" className='mr-2' />
                        <h4>Latest Updates</h4>
                        <div className="mb-2">
                          <DynamicLink url="https://spec.graphql.org/October2021/" name="Getting Started Guide for New GraphQL Client →" />
                        </div>
                        <div className="mb-2">
                          <DynamicLink url="https://spec.graphql.org/October2021/" name="The GraphQL Conference 2023 CFP Open March 20th →" />
                        </div>
                        <div className="mb-2">
                          <DynamicLink url="https://spec.graphql.org/October2021/" name="New Directives to be released in GraphQL Spec 2023 →" />
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

                        <DynamicLink url="https://calendar.google.com/calendar/u/0/embed?src=linuxfoundation.org_ik79t9uuj2p32i3r203dgv5mo8@group.calendar.google.com&ctz=America/New_York" name="GraphQL Public Calendar →">
                        </DynamicLink>
                      </div>
                    </div>
                    
                    <div className="col-lg-6 mb-5">
                      <div className="mb-2">
                        <img src={withPrefix("/images/Contract.png")} alt="contract. Icon" width="50px" className='mr-2' />
                        <h4>GraphQL Meeting Notes</h4>
                        <div className='mb-2'>
                          <DynamicLink url="https://github.com/graphql/graphql-wg" name="GraphQL working group →" />
                        </div>
                        <div className='mb-2'>
                          <DynamicLink url="https://www.postman.com" name="GraphQL Composite Schema →" />
                        </div>
                        <div >
                          <DynamicLink url="https://www.postman.com" name="GraphQL Board →" />
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
                          <DynamicLink url=" https://stackoverflow.com/search?q=graphql&s=8b4cbe4a-d3db-4a53-b7e9-48a56ccd5a74/" name="Stack Overflow →" />
                        </div>
                        <div className='mb-2'>
                          <DynamicLink url=" https://www.reddit.com/r/graphql/" name="Reddit →" />
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
