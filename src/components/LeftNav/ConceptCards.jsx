import React from 'react';
const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';
import { TagStyles } from "./Tag";
import { Divider } from 'aether-marketing';
import ReactMarkdown from 'react-markdown';

const CardWrapper = styled.div`
  margin-bottom: 32px;
  padding: 15px 10px;
  border: 1px solid ${(props) => props.theme.colors.grey_20};
  border-radius: 10px;
  max-width: 300px;
  .landing-card__content {
  &:hover {
    box-shadow: ${(props) =>
      props.altBoxShadow
        ? props.theme.shadows.card_shadow
        : props.theme.shadows.card_shadow};
    -webkit-box-shadow: ${(props) =>
      props.altBoxShadow
        ? props.theme.shadows.card_shadow
        : props.theme.shadows.card_shadow};
    -moz-box-shadow: ${(props) =>
      props.altBoxShadow
        ? props.theme.shadows.card_shadow
        : props.theme.shadows.card_shadow};
    text-decoration: none;
    transform: translateY(-0.5rem);
  }

  
    /* max-height: 430px; */
    &-description {
      margin-bottom: 25px;
      font-size: 16px;   
    }
    
    a {
      margin-bottom: 48px;
    }
  }

  .truncate{
    padding-inline: 5px;
    white-space: pre-wrap;
    color: rgb(17, 17, 18);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;

    p{
      font-size: 14px;
    }
    code{
    white-space: pre-wrap;
    color: rgb(17, 17, 18);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    font-size: 14px;
  }
    p:not(:first-child) {
      display: none;
    }
 
    }
    
  
  .tag {
    margin-left: 10px;
  }
.code {
  height: 100%;
  background-color: ${(props) => props.theme.colors.grey_10};

  code{
    white-space: pre-wrap;
    color: rgb(17, 17, 18);
    
  }
}

div.modal {
  background-color: ${(props) => props.theme.colors.grey_00}!important;
  margin: auto;
  height: 100vh;
  max-width: 950px;
 
.close {
  font-size: 2rem;
}
  
}
`

export const ConceptCard = ({
  title, description, tag, example, sourceLink
}) => {
  const id = title.replaceAll(' ', '-')

  return (
    <>
      <CardWrapper className="landing-card " data-toggle="modal" data-target={`#${id}`}>
        <div className="landing-card__content text-left">
          <h4 className="landing-card__content-title mb-4">{title}</h4>
          <p className='mb-0 text-uppercase small mb-2'>description</p>
          <p className="landing-card__content-description truncate"> {description}</p>
          <div className='mb-2'>
            <p className='mb-0 text-uppercase small mb-2'>tags</p>
            <div className='row tag'>
              {tag?.map(item => (
                <div key={uuidv4()}>
                  <TagStyles data-text={item}>{item}</TagStyles>
                </div>
              ))}
            </div>
          </div>
          <div>

            <div className='mb-2'>
              <p className='mb-0 text-uppercase small mb-2'>Example</p>
              <div className='code truncate'>
                <ReactMarkdown>{example}</ReactMarkdown>
                {/* <code>{example}</code> */}
              </div>
            </div>
            <div>
                <p className='mb-0 text-uppercase small mb-2'>Source Link</p>
                {sourceLink && <div>
                  <a href={sourceLink}>{sourceLink}</a>
                </div>}
              </div>
          </div>
        </div>

        {/* Modal */}

        <div className="modal fade " id={id} tabIndex="1" role="dialog" aria-labelledby={title} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="">
              <div className="modal-header">

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p className='mb-2'>Term</p>
              <h2 className="landing-card__content-title">{title}</h2>
              <Divider />
              <div className='row mt-2'>
                <p className='col-4 mb-0 text-uppercase'>description</p>
                <p className="col-6 landing-card__content-description"> {description}</p>
              </div>
              <div className='row mb-2'>
                <p className='col-4 mb-0 text-uppercase'>tags</p>
                <div className='col-6 row '>
                  {tag?.map(item => (
                    <div key={uuidv4()}>
                      <TagStyles data-text={item}>{item}</TagStyles>
                    </div>
                  ))}
                </div>
              </div>
              <div className='row mb-2'>
                <p className='col-4 mb-0 text-uppercase'>Example</p>
                <div className='code col-6'>
                  {/* <ReactMarkdown>{example}</ReactMarkdown> */}
                  <code>{example}</code>
                </div>
              </div>
              <div className='row'>
                <p className='col-4 mb-0 text-uppercase'>Source Link</p>
                <a href={sourceLink}>test</a>
                {sourceLink && <div>
                  <a href={sourceLink}>{sourceLink}</a>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
    </>
  )
};

