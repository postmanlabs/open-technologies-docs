/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../../components/layout';
import RightNavLinks from '../../../components/RightNavLinks';
import { leftNavItems } from '../../../components/LeftNav/LeftNavItems';
import LeftNav from '../../../components/LeftNav/LeftNav';
import SEO from '../../../components/seo';
import styled from 'styled-components';
// const { v4: uuidv4 } = require('uuid');
import BreadCrumbsLinks from '../../../components/modules/BreadCrumbsLinks';
import PreviousAndNextLinks from '../../../components/modules/PreviousAndNextLinks';
import ConceptCardFilter from '../../../components/ConceptCardFilter';
import { DocWrapper } from '../../../../styles/DocWrapper';


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

const GraphQLPage = ({ data }) => {

  const { parentLink, subParentLink, previous, next } = data;

  return (
    <Layout>
      <SEO title="Postman GraphQL"
        description='GraphQL activities deliver both internal and external value for Postman.'
        slug="/graphql/" />
      <DocWrapper className="container-fluid">
        <div className="row row-eq-height">
          <nav className="col-md-4 col-lg-3 left-nav-re">
            <LeftNav leftNavItems={leftNavItems} />
          </nav>
          <div className="col">
            <div className="row row-eq-height">
              <main className="col-lg-9 offset-lg-0 col-xl-7 doc-page ml-xl-5">
                <BreadCrumbsLinks data={{ parentLink, subParentLink }} />
                <h2 className="mb-3">Concepts</h2>
                <p>
                These cards contain the fundamental building blocks of modern GraphQL APIs. Many of them come from the GraphQL Specification, tagged spec, and the others don't, tagged non-spec. Breaking down complex technology structures into singular concepts is an important technique for simplifying technology, making it more accessible to a wider audience, and improving communication and collaboration across the technology community.</p>

                <p>A primary goal of this presentation of GraphQL concepts in addition to those listed above is clarity. When we focus on one concept at a time, we can gain a clearer understanding of that concept and its role within the larger technology structure. This can help us to better understand how the different parts of the technology work together and how we can use them to achieve our goals. A secondary goal is content reuse. It is easy to imagine how we might combine concepts to build API Blueprints, for example.</p>

                <p>NOTE: To view the full concept entry, click on the card.</p>
                        
                <div className="row justify-content-evenly">
                  <div className="container-fluid">
                    <div className="row">
                      <ConceptCardFilter />
                    </div>
                  </div>
                </div>
                {/* Qualtrics */}
                <PreviousAndNextLinks data={{ previous, next }} />
              </main>
              <RightColumnWrapper className="col-lg-2 offset-lg-0 col-xl-3 offset-xl-1 right-column">

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
