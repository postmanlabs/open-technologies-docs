/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, withPrefix } from 'gatsby';

import Layout from '../../components/layout';
import DynamicLink from '../../components/Shared/DynamicLink';
import RightNavLinks from '../../components/RightNavLinks';
import { leftNavItems } from '../../components/LeftNav/LeftNavItems';
import LeftNav from '../../components/LeftNav/LeftNav';
import SEO from '../../components/seo';
// const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';
import 'prismjs/themes/prism-tomorrow.css';
import BreadCrumbsLinks from '../../components/modules/BreadCrumbsLinks';
import PreviousAndNextLinks from '../../components/modules/PreviousAndNextLinks';
import { DocWrapper } from '../../../styles/DocWrapper.jsx';

const HubWrapper = styled.section`
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
              <main className="col-sm-12 col-md-12 col-lg-9 offset-lg-0 col-xl-7 doc-page ml-xl-5">
                <BreadCrumbsLinks data={{ parentLink, subParentLink }} />
                {/* Qualtrics */}
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
                    <div className="col-lg-6 mb-3 mb-md-4">

                      <div className="bloc">
                        <div className='header row'>
                          <img src={withPrefix("/images/Community.png")} alt="community Icon" width="30px" className='mr-2' />
                          <h4 >Meet the Team</h4>
                        </div>

                        <div className='mb-1'>
                          <DynamicLink url="https://www.linkedin.com/in/doc-jones" name="Doc Jones" />
                        </div>

                        <div >
                          <DynamicLink url="https://www.linkedin.com/in/meenakshi-dhanani" name="Meenakshi Dhanani" />
                        </div>

                      </div>
                    </div>
                    <div className="col-lg-6 mb-3 mb-md-4">

                      <div className="bloc ">
                        <div className='row header '>
                          <img src={withPrefix("/images/Multi-region.png")} alt="community Icon" width="30px" className='mr-2' /> <h4>Where to find us</h4>
                        </div>

                        <div >
                          <DynamicLink url="https://www.twitter.com/getpostman" name="Postman Talks GraphQL" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3 mb-md-4">

                      <div className="bloc">
                        <div className='row header'>
                          <img src={withPrefix("/images/Multi-region.png")} alt="community Icon" width="30px" className='mr-2' />
                          <h4>New Client Info</h4>
                        </div>

                        <div >
                          <DynamicLink url="https://www.postman.com" name="Documentation" />
                        </div>

                      </div>
                    </div>
                    <div className="col-lg-6 mb-3 mb-md-4">

                      <div className="bloc">
                        <div className='row header'>
                          <img src={withPrefix("/images/Documentation.png")} alt="community Icon" width="30px" className='mr-2' />
                          <h4>Worth reading</h4>
                        </div>


                        <div className='mb-1'>
                          <DynamicLink url="https://www.docdocgo.dev/tag/graphql-101/" name="GraphQL 101 Series" />
                        </div>

                        <div >
                          <DynamicLink url="https://www.docdocgo.dev/" name="docdocgo" />
                        </div>

                      </div>

                    </div>
                    <div className="col-lg-6 mb-3 mb-md-4 bg-grey">


                      <div className="bloc">
                        <div className='row header '>
                          <img src={withPrefix("/images/Events.svg")} alt="community Icon" width="30px" className='mr-2' />
                          <h4>Calender</h4>
                        </div>
                        <div >
                          <DynamicLink url="https://www.postman.com" name="GraphQL Summit" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3 mb-md-4 ">

                      <div className="bloc text-left">
                        <div className='row header'>
                          <img src={withPrefix("/images/Engagement.png")} alt="community Icon" width="30px" className='mr-2' />
                          <h4 >Places to look</h4>
                        </div>

                        <div className='mb-1'>
                          <SvgWrapper >
                            <svg className="button-icon--left" transform="translate(0, -1)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <title>logo-github</title>
                              <g fill="#212121"><path fillRule="evenodd" clipRule="evenodd" fill="#212121" d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z" /></g>
                            </svg> </SvgWrapper>
                          <DynamicLink url="https://www.grapqhl.org/" name="GraphQL Project" />
                        </div>
                        <div className='mb-1'>
                          <SvgWrapper >
                            <svg className="button-icon--left" transform="translate(0, -1)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <title>logo-github</title>
                              <g fill="#212121"><path fillRule="evenodd" clipRule="evenodd" fill="#212121" d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z" /></g>
                            </svg> </SvgWrapper>
                          <DynamicLink url="https://github.com/graphql/foundation" name="GraphQL Foundation Board" />
                        </div>
                        <div >
                          <SvgWrapper >
                            <svg className="button-icon--left" transform="translate(0, -1)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                              <title>logo-github</title>
                              <g fill="#212121"><path fillRule="evenodd" clipRule="evenodd" fill="#212121" d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z" /></g>
                            </svg> </SvgWrapper>
                          <DynamicLink url="https://github.com/graphql/graphql-wg" name="GraphQL Working Group" />
                        </div>
                      </div>

                    </div>
                  </div>
                </HubWrapper>
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
