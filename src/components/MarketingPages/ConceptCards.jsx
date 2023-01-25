import React from 'react';
const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';
import Highlight, {defaultProps} from "prism-react-renderer";

const CardWrapper = styled.div`
  margin-bottom: 32px;
  text-align: left !important;
  padding: 15px 10px;
  border: 1px solid ${(props) => props.theme.colors.grey_10};
  border-radius: 10px;

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
        background-color: rgb(45, 81, 170);
    }
    .api {
        background-color: rgb(216, 245, 200);
        color: black;
    }
    .schema {
        background-color: rgb(102, 102, 102);
    }
    .type {
        background-color: rgb(163, 198, 252);
        color: black;
    }
    .operation{
        background-color: rgb(250, 216, 122);
        color: black;
    }
    .subscription {
        background-color: rgb(92, 197, 72);
    }
    .real-time {
        background-color: rgb(81, 188,251);
    }
    .non-spec {
        background-color: rgb(203, 243, 234);
        color: black;
    }
    .scalars {
        background-color: rgb(202,89,49);
    }
    .client {
        background-color: rgb(177, 121, 35);
    }

.prism-code {
  height: 100%;
  white-space: pre-wrap;
  font-size: 12px;
}
`

const Tag = styled.p`
    border-radius: 20px;
    width: fit-content;
    padding: 3px 10px;
    color: white;
    font-size: 10px;
    font-weight: bold;
    margin-right: 10px;
`


export const ConceptCard = ({
    title, description, tag, example, code
  }) => {
    // const item = tag.split(', ');
    const exampleCode = `
    (function someDemo() {
      var test = "Hello World!";
      console.log(test);
    })();
    
    return () => <App />;
    `;
return(
    <CardWrapper className="landing-card h-100">
      
      <div className="landing-card__content text-left">
        <h3 className="landing-card__content-title mb-4">{title}</h3>
        <p className='mb-0 text-uppercase small'>description</p>
        <p className="landing-card__content-description"> {description}</p>
        <div>
            <p className='mb-0 text-uppercase small'>tags</p>
            <div className='row ml-1'>          
             {tag.split(", ").map(item => (
              <div key={uuidv4()}>
                {item === 'api' &&  (<Tag className="api" >{item}</Tag>)}
                {item === 'graphql' &&  (<Tag className="graphql" >{item}</Tag>)}
                {item === 'schema' &&  (<Tag className="schema" >{item}</Tag>)}
                {item === 'type' &&  (<Tag className="type" >{item}</Tag>)}
                {item === 'operation' &&  (<Tag className="operation" >{item}</Tag>)}
                {item === 'subscription' &&  (<Tag className="subscription" >{item}</Tag>)}
                {item === 'real-time' &&  (<Tag className="real-time" >{item}</Tag>)}
                {item === 'non-spec' &&  (<Tag className="non-spec" >{item}</Tag>)}     
                {item === 'scalars' &&  (<Tag className="scalars" >{item}</Tag>)}     
                {item === 'client' &&  (<Tag className="operation" >{item}</Tag>)}
              </div>
                ))}    
       </div>
        </div>
        <div>
            <p className='mb-0 text-uppercase small'>Example</p>
            {example && <p>{example}</p>}
            {code && (
              <Highlight  {...defaultProps} code={code} language="scheme">
                 {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                  </Highlight>
            )
                  }
        </div>
      </div>
    </CardWrapper>
)
  };

