/* eslint-disable react/no-danger */
import React  from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import RightNavLinks from '../../components/RightNavLinks';
import { leftNavItems } from '../../components/LeftNav/LeftNavItems';
import LeftNav from '../../components/LeftNav/LeftNav';
import SEO from '../../components/seo';
import styled from 'styled-components';
const { v4: uuidv4 } = require('uuid');
import BreadCrumbsLinks from '../../components/modules/BreadCrumbsLinks';
import PreviousAndNextLinks from '../../components/modules/PreviousAndNextLinks';
import ConceptCardFilter from '../../components/ConceptCardFilter';
import { DocWrapper } from '../../../styles/DocWrapper.jsx';


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
 
const GraphQLPage = ({data}) => {
  
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
                {/* Qualtrics */}

              <h2 className="mt-5 mb-3">GraphQL Concepts</h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam vitae ratione eveniet fuga assumenda id dolor corrupti. Aperiam ab a reiciendis, odit dignissimos tempore minima autem cum animi pariatur!
              </p>
          
              <div className="row justify-content-evenly">           
                <div className="container-fluid">
                      <div className="row">
                        {/* {gatsbyRepoData.resultData.records.map((item) => (
                          <div className="col-lg-6 mb-3 mb-md-4"  key={uuidv4()}>    
                            <ConceptCard title={item.fields.Term}
                                  description={item.fields.Description}
                                  tag={item.fields.Tags}
                                  // code={item.code}
                                  example={item.fields.Example} />
                          </div>
                          ))} */}
                          <ConceptCardFilter />
                      </div>
                </div>     
              </div>             
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
