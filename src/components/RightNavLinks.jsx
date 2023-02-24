import React from 'react';
import DynamicLink from '../components/Shared/DynamicLink';
import { ContextualStyles } from '../../styles/ContextualStyles';

export default function RightNavLinks() {
  return (
    <>
      {/* <EditDoc /> */}
      <ContextualStyles >
        <div className='contextual-links__section'>
          Get to know us
        </div>
        <div className="contextual-links__link" >
          <DynamicLink url="https://www.postman.com/company/open-philosophy/" name="The Postman Open Philosophy" />
        </div>
        <div className="contextual-links__link" >
          <DynamicLink url="https://www.blog.postman.com/" name="Postman Blog" />
        </div>
        <div className='contextual-links__section'>
          Collaborate with us
        </div>
        <div className="contextual-links__link" >
          <DynamicLink url="https://github.com/postmanlabs" name="Postman's GitHub" />
        </div>
        <div className="contextual-links__link" >
          <DynamicLink url="https://github.com/postman-open-technologies" name="Open Technologies GitHub" />
        </div>
        <div className='contextual-links__section'>
          Specs we contribute to
        </div>
        <div className="contextual-links__link" >
          <DynamicLink url="https://json-schema.org/" name="JSON Schema" />
        </div>
        <div className="contextual-links__link" >
          <DynamicLink url="https://www.asyncapi.com/" name="Async API" />
        </div>
        <div className="contextual-links__link" >
          <DynamicLink url="https://www.openapis.org/" name="OpenAPI" />
        </div>
        <div className="contextual-links__link" >
          <DynamicLink url="https://graphql.org/" name="GraphQL" />
        </div>
      </ContextualStyles>
      <div className="sticky">
        <div>
          <p>
            <span className="font-weight-bold">Open Technologies</span>
            <br></br>
            Postman's hub for Open Source software, specs, libraries, and other components that the API industry relies on.
          </p>

        </div>
        <figure className="postmanaut-dab mt-1">
          <img src="https://voyager.postman.com/illustration/ventura-abled.png" alt="Venutra abled. Illustration." className="img-fluid" />
        </figure>
      </div>
    </>
  )
}