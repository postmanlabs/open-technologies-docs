import React from 'react';
import DynamicLink from '../components/Shared/DynamicLink';
import EditDoc from '../components/Shared/EditDoc';
import styled from 'styled-components';

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

export default function RightNavLinks() {
    return (
        <>
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
        </>
    )
}