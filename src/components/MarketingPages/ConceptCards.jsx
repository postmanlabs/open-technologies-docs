import React from 'react';
const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';
import Highlight, {defaultProps} from "prism-react-renderer";
import owl from "prism-react-renderer/themes/nightOwlLight";
import { TagStyles } from "../filterCards/Tag";

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
.prism-code {
  height: 100%;
  white-space: pre-wrap;
  font-size: 12px;
}
.plain, .punctuation {
  color: rgb(204, 204, 204)!important;
}
.function, .operator {
  color: rgb(240, 141, 73)!important;;
}

.token.string {
  color: rgb(126, 198, 153)!important;
}
`
export const ConceptCard = ({
    title, description, tag, example, code
  }) => {
    
return(
    <CardWrapper className="landing-card h-100">      
      <div className="landing-card__content text-left">
        <h4 className="landing-card__content-title mb-4">{title}</h4>
        <p className='mb-0 text-uppercase small'>description</p>
        <p className="landing-card__content-description"> {description}</p>
        <div>
            <p className='mb-0 text-uppercase small'>tags</p>
            <div className='row ml-1'>      
             {tag.split(", ").map(item => (
              <div key={uuidv4()}>
                <TagStyles data-text={item}>{item}</TagStyles>
              </div>
                ))}    
            </div>
        </div>
        <div>
            <p className='mb-0 text-uppercase small'>Example</p>
            {example && <p>{example}</p>}
            {code && (
              <Highlight theme={owl} {...defaultProps} code={code} language="json">
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

