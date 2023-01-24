import React from 'react';
const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';


const CardWrapper = styled.div`
  margin-bottom: 32px;
  text-align: left !important;
  padding: 15px 10px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  .landing-card__top {
    background: transparent;
    margin: 0;
  }
  .landing-card__image {
    margin-bottom: 16px;
    width: 50px;
    & img {
      max-width: 100%;
    }
  }
  .landing-card__content {
    &-description {
      margin-bottom: 25px;
      font-size: 16px;
      
    }
    &-title{
      width: 85%;
     
    }
    a {
      
      margin-bottom: 48px;
      
    }
  }
  .title_link  {
    color: black !important;
  }
  
   a:hover {
    color: ${(props) => props.theme.colors.blue_60} !important;
    text-decoration: none;
    border: none !important;
  }
  .graphql {
        background-color: blue;
    }
    .api {
        background-color: lime;
    }
    .schema {
        background-color: grey;
    }
    .type {
        background-color: lightblue;
        color: black;
    }
`

const Tag = styled.p`
    border-radius: 20px;
    width: fit-content;
    padding: 5px 10px;
    color: white;
`


export const ConceptCard = ({
    title, description, tag,  example, code
  }) => {
    const tags = tag.split(', ');

return(
    <CardWrapper className="landing-card h-100">
      
      <div className="landing-card__content text-left">
        <h3 className="landing-card__content-title mb-4">{title}</h3>
        <p className='mb-0 text-uppercase'>description</p>
        <p className="landing-card__content-description"> {description}</p>
        <div>
            <p className='mb-0 text-uppercase'>tags</p>
            {/* <p className='mr-2'>{tags}</p> */}
            {console.log(tags)}
            {/* {tags.map((tag) => {( */}
                <div key={uuidv4()}>
                {tags === 'graphql' && <Tag className="graphql">{tags}</Tag>}
                {tags === 'api' && <Tag className="api">{tags}</Tag>}
                {tags === 'schema' && <Tag className="schema">{tags}</Tag>}
                      
                    </div>
            {/* )})} */}
        </div>
        <div>
            <p className='mb-0 text-uppercase'>Example</p>
            {example && <p>{example}</p>}
            {code && <code>{code}</code>}
        </div>
      </div>
    </CardWrapper>
)
  };

