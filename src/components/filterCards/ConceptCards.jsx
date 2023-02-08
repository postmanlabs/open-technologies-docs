import React from 'react';
const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';
import { TagStyles } from "./Tag";

const CardWrapper = styled.div`
  margin-bottom: 32px;
  text-align: left !important;
  padding: 15px 10px;
  border: 1px solid ${(props) => props.theme.colors.grey_20};
  border-radius: 10px;
  max-width: 300px;

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
.code {
  height: 100%;
  background-color: ${(props) => props.theme.colors.grey_10};
  font-size: 12px;
  code{
    white-space: pre-wrap;
    color: rgb(17, 17, 18);
  }
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
div.modal {
  background-color: ${(props) => props.theme.colors.grey_00}!important;
  margin: auto;
  height: fit-content;
  max-width: 550px;
  
  .modal-header {
    border: none;
    padding: .25rem;
  }
  .code {
    background-color: ${(props) => props.theme.colors.grey_20};
    width: 75%;
  }
}
`
export const ConceptCard = ({
  title, description, tag, example
}) => {
const id = title.replaceAll(' ', '-')

  return (
    <>
    <CardWrapper className="landing-card h-100" data-toggle="modal" data-target={`#${id}`}>
      <div className="landing-card__content text-left">
        <h4 className="landing-card__content-title mb-4">{title}</h4>
        <p className='mb-0 text-uppercase small'>description</p>
        <p className="landing-card__content-description"> {description}</p>
        <div>
          <p className='mb-0 text-uppercase small'>tags</p>
          <div className='row ml-1'>
            {tag?.map(item => (
              <div key={uuidv4()}>
                <TagStyles data-text={item}>{item}</TagStyles>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-0 text-uppercase small'>Example</p>
          {/* {example && (<div dangerouslySetInnerHTML={{ __html: example }} />)} */}
          {example && (
            <div className='code'>
              <code>{example}</code></div>
           
          )
          }
        </div>
      </div>
      
  {/* Modal */}
  
      <div className="modal fade " id={id} tabIndex="1" role="dialog" aria-labelledby={title} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="">
            <div className="modal-header">
              <h4 className="landing-card__content-title mb-4">{title}</h4>
             
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

              <p className='mb-0 text-uppercase small'>description</p>
              <p className="landing-card__content-description"> {description}</p>
              <div>
                <p className='mb-0 text-uppercase small'>tags</p>
                <div className='row ml-1'>
                  {tag?.map(item => (
                    <div key={uuidv4()}>
                      <TagStyles data-text={item}>{item}</TagStyles>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className='mb-0 text-uppercase small'>Example</p>
                {/* {example && (<div dangerouslySetInnerHTML={{ __html: example }} />)} */}
                {example && (
                  <div className='code'>
                    <code>{example}</code>
                    </div>
                )
                }
        
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
    </>
  )
};

