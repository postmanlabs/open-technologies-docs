/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, withPrefix } from 'gatsby';

import Layout from '../../components/layout';

import RightNavLinks from '../../components/RightNavLinks';
import { leftNavItems } from '../../components/LeftNav/LeftNavItems';
import LeftNav from '../../components/LeftNav/LeftNav';
import SEO from '../../components/seo';
// const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';
import 'prismjs/themes/prism-tomorrow.css';
import BreadCrumbsLinks from '../../components/modules/BreadCrumbsLinks';
import PreviousAndNextLinks from '../../components/modules/PreviousAndNextLinks';
import { BaseLinkStyles, IconList } from 'aether-marketing';
// import { BaseLinkStyles } from 'aether-marketing';

const DocWrapper = styled.div`
  /* Used for Deeplinking */   
h2, h3, h4 {
  scroll-margin-top: 2em;
}

.doc-page {
  a {
    ${BaseLinkStyles.componentStyle.rules}
  }
  padding-left: 40px !important;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 40px;

  @media (min-width:992px) and (max-width: 1199px) {
    padding-right: 32px;
  }

  @media (min-width:992px) {
    padding-top: 64px;
  }

  img {
    max-width: 100%;
    height: auto;
    image-rendering: -webkit-optimize-contrast;
  }
  img[src$='#icon'] {
    margin-bottom: 0;
  }

  ul {
    margin-left: 16px;
    margin-bottom: 24px;

    li::marker {
      padding-inline-start: 39px;
      color: ${(props) => props.theme.colors.orange_30};
    }

    &::after,
      &::before {
      display: inline-block;
      direction: rtl !important;
      margin-left: -28px !important;
      padding-right: 16px !important;
      width: 28px !important;
      } 
    
    li {
      margin-bottom: 8px;
      line-height: 1.625;
      padding: 0 0 0 16px;

      li::before {
        direction: rtl !important;
        margin-left: -28px !important;
        padding-right: 16px !important;
        width: 28px !important;
      }
    }
    li::before {
      direction: rtl !important;
      margin-left: -28px !important;
      padding-right: 16px !important;
      width: 28px !important;
    }

    list-style-type: '✦';

    li::marker {
      color: ${(props) => props.theme.colors.orange_30};
  }

  ol {
    li {
      padding-left: 10px;
      margin-bottom: 8px;
    }
    li::marker {
      color: $${(props) => props.theme.colors.grey_70};
    }
  } 

  @media (max-width: 765px) {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
} 


/* Blockquotes */
blockquote {
  box-sizing: border-box;
  width: 100%;
  border: solid ${(props) => props.theme.colors.grey_20} 1px;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: 16px 24px;
  background-color: ${(props) => props.theme.colors.grey_05};
  margin-left: 0;
}
blockquote code.language-text {
  background-color: ${(props) => props.theme.colors.grey_00};
}


table {
  font-size: 16px !important;
  line-height: 1.5;
}

td {
  padding: 10px;
}

thead:first-child:hover tr{
  background-color: ${(props) => props.theme.colors.grey_00};
}


/**
* add syntax highlighting
*/
.language-text {

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

  /**
  * Remove the default PrismJS theme background-color, border-radius, margin,
  * padding and overflow.
  * 1. Make the element just wide enough to fit its content.
  * 2. Always fill the visible space in .gatsby-highlight.
  * 3. Adjust the position of the line numbers
  */
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

.previous-next-links {
  display: flex;
  justify-content: space-between;
}
}
.left-nav-re {
  padding: 32px 0px 8px 0px;
  background-color: ${(props) => props.theme.colors.grey_05};
  font-size: 14px;

  & ul {
    margin-left: 0;
    margin-bottom: 1.6rem !important;
    & ul {
      margin-left: 32px;
      margin-top: 8px;
      & ul {
        margin-left: 32px;
        margin-top: 12px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }

  & li {
    &:hover {
      cursor: pointer;
    }
  }
}

.events__alert {
    border: 4px dashed ${(props) => props.theme.colors.blue_10};
    border-radius: ${(props) => props.theme.borderRadius.medium};
    padding: .75rem 1.25rem;
    /* color: #0C5460; */
    color: ${(props) => props.theme.colors.blue_80};
}
`

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
        slug="/auto-flex-policy/" />
      <DocWrapper className="container-fluid">
        <div className="row row-eq-height">
          <nav className="col-sm-12 col-md-4 col-lg-3 left-nav-re">
            <LeftNav leftNavItems={leftNavItems} />
          </nav>
          <div className="col">
            <div className="row row-eq-height">
              <main className="col-sm-12 col-md-12 col-lg-9 offset-lg-0 col-xl-7 doc-page ml-xl-5">
                <BreadCrumbsLinks data={{ parentLink, subParentLink }} />
                {/* Qualtrics */}
                <section className='mb-5'>
                  <h1>The API Lifecycle</h1>
                  <p>
                    The API lifecycle is a common aspect of API operations that every business faces when it comes to delivering APIs. While there are some variances to how teams, companies, and different types of APIs are delivered, most API lifecycles are the same, despite what beliefs are on the ground floor amongst developers. When you ask different teams at different levels within the enterprise you will get many different responses about what the lifecycle is, resulting in misalignment across operations that can reduce velocity and introduce friction on a regular basis.
                  </p>
                  <h2>A Common Vocabulary</h2>
                  <p>Teams assuming they are on the same page for the stages involved with delivering an API, or each iteration of APIs, is one of the top challenges for organizations. This is why we recommend establishing a common definition for what the API lifecycle is, even if there is dissent amongst ranks around the semantics and details of the definition. A common vocabulary will help stabilize how teams discuss the delivery of APIs, with the underlying definition evolving over time--but you have to start somewhere.</p>

                </section>
                <section className='mb-5'>
                  <h2>Producer Lifecycle Stages</h2>
                  <img src={withPrefix("/images/lifecycle.png")} alt="Lifecycle chart. Illustration" />
                  <p className='mb-5'>After talking with hundreds of enterprises, Postman has distilled down what we see into a common definition of a modern API lifecycle, and we wanted to share it with you as a potential starting point for your own definition. While this lifecycle is not always done in a linear fashion, we recommend you consider these eight separate stages when it comes to crafting your own definition of what the API lifecycle is.
                  </p>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/description.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Define</strong> - Establishing the nature, scope, and meaning of some part of API operations, providing more details about the surface area of an API, or even the lifecycle around each API, providing primary or secondary data that can be used to understand the state and purpose of each API by a human or another machine.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/Vocabulary.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Design </strong> - The functional shape, surface, and details of any type of an API provided in a way that can be collaborated around and shared with other stakeholders, providing a set of human and machine-readable instructions for what each API is able to do that demonstrates a great deal of thought has gone into its form and function.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/Code-generator.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Develop</strong> - The development of some part of APIs and the operations around them, working on something that is entirely new or improving on some existing part of the system by evolving the API or how it is operated, moving forward some part of the enterprise system in response to a new application or integration.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/Contract-testing.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Test</strong> - Establishing a baseline for testing, helping make sure that you are testing for each API contract, understanding availability, and performance, and then considering what other tests are required for each API, while also ensuring a testing base exists across all APIs.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/Security.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Secure</strong> - Ensuring that an API is secure from threats and vulnerabilities, making for a pretty wide spectrum of different processes and technologies that ensure digital resources and capabilities made available via APIs are only accessible to an intended audience and bad actors are not able to find ways to get access via an API.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/API-deployment.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Deploy</strong> - Using an API gateway to deploy and manage APIs provides a single or federated approach to providing access to backend services using well-defined APIs, standardizing how APIs are published to development, staging, production, or other environments, while also consistently applying authentication, logging, and the other elements needed to properly manage APIs at scale.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src="https://voyager.postman.com/icon/appplication-performance-icon-postman.svg" alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Observe</strong> - View dashboards, reports, history, and logs to observe the state of a single API, the operations around it, and even across many different APIs and domains, taking advantage of the existing outputs that exist across operations to develop an awareness of API operations and how everything works.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center mb-5'>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/Coverage.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Distribute</strong> - Approaching the distribution of APIs in a consistent way, ensuring that all APIs are published to relevant portals and networks, but then also investing in the overall experience involved with learning about, onboarding, and putting APIs to work--measuring what is working and what is not working all along the way.</p>
                    </div>
                  </div>
                  <p >There are other elements like documentation or gateways that get thrown in here when talking with different API producers, but we feel strongly that these eight areas encompass the most important aspects of how we are delivering APIs. Providing you with a definition that works for both business and technical stakeholders when it comes to finding alignment across a single API, but more importantly, hundreds or thousands of APIs.</p>
                </section>
                <section className='mb-5'>
                  <h2>Consumer Lifecycle</h2>
                  <img src={withPrefix("/images/consumer-lifecycle.png")} alt="Consumer Lifecycle chart. Illustration" />
                  <p>This is where every API producer needs to take their day-to-day hat off and put on their API consumer hat, doing the work to consider the portion of the lifecycle that speaks to the consumer experience. This portion of the lifecycle is about acknowledging that the API lifecycle is a two-sided affair, and that engagement with consumers is essential to each individual iteration of an API, but also the overall velocity each API will be able to achieve.</p>
                </section>
                <section className='mb-5'>
                  <h3>Consumer Stages</h3>
                  <p className='mb-5'>The stages of the consumer lifecycle represent the other side of the coin for all API producers, but to help you in your journey we have distilled them down into the six stages that shape how not just technical, but also business consumers are engaging with API operations. Providing a handful of stages you can walk through as part of your regular work to ensure you are properly empathizing with your consumers.</p>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/Telescope_Discovery.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Discover</strong> - Consumers will not spend a lot of time looking for new APIs that fit the profile of what they need. Discovering the right API can take hours, days, weeks, or be impossible. Make it easy for your consumers to find APIs by understanding where they already exist, searching, and spending their time, meeting consumers where they are.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/Enable.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Evaluate</strong> - As part of the onboarding process, API consumers should be able to play with and kick the tires on an API, either directly against the production, or via a sandbox environment. The evaluation stage is essential for consumers to understand what is possible, and how an API fits in with their objectives, allowing them to consider deeper integration.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/Integration.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Integrate</strong> - API consumers expect API producers to share their OpenAPI definition and provide SDKs, libraries, and snippets in the programming language of their choice. Over the last five years consumers have also begun to demand onboarding, workflow, and other collections that help them achieve integration quicker--demonstrating how the definition of integration has evolved.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/Contract-testing.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Test</strong> - At a minimum consumers will need access to uptime and availability testing via a dashboard, as well as the tests and monitors behind them. Next, consider exploring user acceptance testing, authentication, and other types of tests that reflect the challenges and needs your API consumers will have.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/API-deployment.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Deploy</strong> - Using an API gateway to deploy and manage APIs provides a single or federated approach to providing access to backend services using well-defined APIs, standardizing how APIs are published to development, staging, production, or other environments, while also consistently applying authentication, logging, and the other elements needed to properly manage APIs at scale.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center mb-5'>
                    <div className='col-2 align-self-center '>
                      <img src="https://voyager.postman.com/icon/appplication-performance-icon-postman.svg" alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Observe</strong> - View dashboards, reports, history, and logs to observe the state of a single API, the operations around it, and even across many different APIs and domains, taking advantage of the existing outputs that exist across operations to develop an awareness of API operations and how everything works.</p>
                    </div>
                  </div>
                  <p>The consumer side of the API lifecycle is about ensuring that as an API producer, you are considering your consumers. All of the top challenges for API producers reveal themselves when it comes to not considering the needs of those who will be consuming an API and empathizing with what they face. Do the work here to properly put yourself in your consumer's shoes on a regular basis and strengthen the trust and feedback loops that exist on this side of your API lifecycle.</p>
                  <img src="https://voyager.postman.com/illustration/producer-consumer-lifecycle.png" alt="producer to consumer lifecycle. Illustration" />
                </section>
                <section className='mb-5'>
                  <h3>The Platform Base</h3>
                  <p>You need to develop the base for your API platform, and the producer and consumer dimensions of your API lifecycle by leveraging your existing investments across your software development lifecycle, but also the API lifecycle you are bringing into alignment.</p>
                  <h4>Your Infrastructure</h4>
                  <p className='mb-5'>Your API platform is built on top of your existing investment in your software development lifecycle and API management. These four areas of enterprise infrastructure represent how you will map a modern API lifecycle to your existing software development lifecycle.</p>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/Source-control.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Source Control</strong> - Git, and potentially GitHub, GitLab, or BitBucket have become the source of truth for the software development lifecycle (SDLC), and it will continue to play the same role when it comes to the API lifecycle. Ensuring that your source control is a seamless part of the API lifecycle, API governance, and as the conveyor build for your API factory floor is foundational for your platform.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src={withPrefix("/images/ci-cd.png")} alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>CI/CD</strong> - CI/CD is the foundation for making the software development lifecycle repeatable, ensuring that deployments into production are as high quality as possible. This transfers to the API lifecycle as well, providing repeatable pipelines that can be used to test, secure, govern, and deploy APIs in a repeatable fashion across teams.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center '>
                    <div className='col-2 align-self-center '>
                      <img src="https://voyager.postman.com/icon/api-gateways-icon-postman.svg" alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Gateways</strong> - Centralized as well as federated gateways have become a cornerstone of enterprise operations and are used to handle not just incoming API traffic, but increasingly external API traffic. The power within the enterprise has been shifting from the database to the API gateway as more business is done external to the enterprise with partners and 3rd party application and integration developers, putting gateways front and center in your platform.</p>
                    </div>
                  </div>
                  <div className='row justify-content-center mb-5'>
                    <div className='col-2 align-self-center '>
                      <img src="https://voyager.postman.com/icon/appplication-performance-icon-postman.svg" alt="illustration" width="50px" height="50px" />
                    </div>
                    <div className='col-10'>
                      <p><strong>Application Performance Management (APM)</strong> - APM solutions are essential to the observability of your APIs, but also the operations behind them. The monitoring and management of performance and availability of APIs, actively detecting and diagnosing performance problems to maintain an expected level of service, and translating API operational metrics into business are essential to realizing the API-first potential at scale--maximizing value at scale across hundreds or thousands of internal or external APIs.</p>
                    </div>
                  </div>
                  {/* <IconList  iconList={platformBase} /> */}
                  <p>Seamless integration with this infrastructure will provide you with the base of your enterprise API platform. However, remember that all of these essential infrastructure solutions also have APIs, allowing you to seamlessly integrate their capabilities into your API operations, automating and standardizing how you deliver APIs across domains and teams.</p>
                  <p>Having a clear definition of how you will bolt the API lifecycle onto your existing software development lifecycle is essential to moving forward at the scale and velocity you desire. Your API lifecycle must map to the existing skills and infrastructure teams are using, but should allow for the growth and adaptability your company will require moving forward.</p>
                </section>

                <p className='col-4 small'>
                  <small className="font-italic">Last modified: 2023 January 30</small>
                </p>
                <PreviousAndNextLinks data={{ previous, next }} />
              </main>
              <RightColumnWrapper className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">

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
