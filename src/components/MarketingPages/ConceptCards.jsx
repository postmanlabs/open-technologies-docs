import React from 'react';
const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';
import 'prismjs/themes/prism-tomorrow.css';

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
        background-color: #049604;
    }
    .schema {
        background-color: grey;
    }
    .type {
        background-color: lightblue;
        color: black;
    }
code {
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

`

const Tag = styled.p`
    border-radius: 20px;
    width: fit-content;
    padding: 3px 10px;
    color: white;
    font-size: 10px;
    font-weight: bold;
`


export const ConceptCard = ({
    title, description, tagG, tagA,  example, code
  }) => {
    // const tags = tag.split(', ');

return(
    <CardWrapper className="landing-card h-100">
      
      <div className="landing-card__content text-left">
        <h3 className="landing-card__content-title mb-4">{title}</h3>
        <p className='mb-0 text-uppercase small'>description</p>
        <p className="landing-card__content-description"> {description}</p>
        <div>
            <p className='mb-0 text-uppercase small'>tags</p>
            <div className='row ml-1'>
           {tagG && <Tag className='mr-2 graphql'>{tagG}</Tag>}
            {tagA && <Tag className='mr-2 api'>{tagA}</Tag>}
            </div>
            {/* {console.log(tags)} */}
            {/* {tags.map((tag) => {(
                <div key={uuidv4()}>
                {tags === 'graphql' && <p className="graphql">{tags}</p>}
                {tags === 'api' && <Tag className="api">{tags}</Tag>}
                {tags === 'schema' && <Tag className="schema">{tags}</Tag>}
                      
                    </div>
             )})}  */}
        </div>
        <div>
            <p className='mb-0 text-uppercase small'>Example</p>
            {example && <p>{example}</p>}
            {code && <code>{code}</code>}
        </div>
      </div>
    </CardWrapper>
)
  };

