/* eslint-disable react/no-danger */
import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"

import DynamicLink from "../../components/Shared/DynamicLink"
import EditDoc from "../../components/Shared/EditDoc"
import { leftNavItems } from "../../components/LeftNav/LeftNavItems"
import LeftNav from "../../components/LeftNav/LeftNav"
import SEO from "../../components/seo"

import styled from "styled-components"
import "prismjs/themes/prism-tomorrow.css"
import BreadCrumbsLinks from "../../components/modules/BreadCrumbsLinks"
import PreviousAndNextLinks from "../../components/modules/PreviousAndNextLinks"
import { BaseLinkStyles } from "aether-marketing"

const DocWrapper = styled.div`
  /* Used for Deeplinking */
  h2,
  h3,
  h4 {
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

    @media (min-width: 992px) and (max-width: 1199px) {
      padding-right: 32px;
    }

    @media (min-width: 992px) {
      padding-top: 64px;
    }

    img {
      max-width: 100%;
      height: auto;
      image-rendering: -webkit-optimize-contrast;
    }
    img[src$="#icon"] {
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

      list-style-type: "✦";

      li::marker {
        color: ${(props) => props.theme.colors.orange_30};
      }

      ol {
        li {
          padding-left: 10px;
          margin-bottom: 8px;
        }
        li::marker {
          color: $ ${(props) => props.theme.colors.grey_70};
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

    thead:first-child:hover tr {
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
        font-family: "IBM Plex Mono";
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
        font-family: "IBM Plex Mono";
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
    padding: 0.75rem 1.25rem;
    /* color: #0C5460; */
    color: ${(props) => props.theme.colors.blue_80};
  }
`

const RightColumnWrapper = styled.aside`
  margin-top: 0px;
  padding-left: 40px !important;

  @media (min-width: 992px) {
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
`
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
    margin-bottom: 0.7rem;
  }

  .contextual-links__alert {
    border: 4px dashed ${(props) => props.theme.colors.grey_10};
    border-radius: ${(props) => props.theme.borderRadius.small};
    padding: 0.75rem 1.25rem;
    color: #0c5460;
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
const TestingPage = ({ data }) => {
  const { parentLink, subParentLink, previous, next } = data

  return (
    <Layout>
      <SEO
        title="Auto-Flex Team Policy"
        description='Effective April 8, 2021, Postman offers a more flexible model that simplifies how you
                       can add Users to your Postman team. With the "auto-flex" model, you can authorize
                       additional Users at any time through the administrative dashboard of your Postman
                       Service, instead of having to purchase each additional User license with Postman prior
                       to enablement.'
        slug="/auto-flex-policy/"
      />
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

                <h1>TESTing 1, 2, 3...</h1>
                <h2 className="mt-5 mb-3">Auto-Flex Team Policy</h2>
                <p>
                  Read our blog post -{" "}
                  <a href="https://blog.postman.com/introducing-auto-flex-for-teams/">
                    Auto-Flex Team Policy
                  </a>
                </p>
                <p>
                  Effective April 8, 2021, Postman offers a more flexible model
                  that simplifies how you can add Users to your Postman team.
                  With the &quot;auto-flex&quot; model, you can authorize
                  additional Users at any time through the administrative
                  dashboard of your Postman Service, instead of having to
                  purchase each additional User license with Postman prior to
                  enablement.
                </p>
                <p>
                  We will bill you for any additional Users on a monthly basis
                  for monthly plans, and on a quarterly basis for annual plans,
                  measured from the date of your initial purchase. Shortly
                  before the applicable billing date, your Billing and Admin
                  User will receive a notification that reflects the number of
                  added Users during that monthly or quarterly cycle. Your Admin
                  User can make adjustments to the number of Users on your plan
                  through the administrative dashboard at any time prior to the
                  billing date, provided however, once you have been billed you
                  may not reduce the number of Users until the end of your
                  then-current Subscription Term. Then, on the billing date, you
                  will be billed for the number of additional Users on your plan
                  as of the billing date.
                </p>
                <h2 id="summary">Summary</h2>
                <ul>
                  <li>
                    On the day you purchase a paid plan, you will be charged for
                    the initial number of Users you select.
                  </li>
                  <li>
                    If you add more Users to your plan after the initial
                    purchase, those User subscriptions will be co-termed with
                    your original User subscriptions.
                  </li>
                  <li>
                    Billing calculations and any changes to the number of Users
                    on your plan will be reflected in your billing statements.
                    For annual plans, we will bill you quarterly for any
                    additional Users; for monthly plans, we will bill you
                    monthly.
                  </li>
                </ul>
                <h2 id="examples">Examples</h2>
                <p>Here&#39;s an example of a monthly plan:</p>
                <p className="font-italic">
                  Your workspace is on the Basic plan and you&#39;re paying
                  monthly — $15 per User per month. You add 4 new Users ten days
                  into your monthly billing cycle. You deprovision 2 Users
                  before the next regular billing date. You will be charged $15
                  each for the total number of Users on your plan as of the
                  billing date, including the 2 Users you added during the
                  preceding month and retained as of the billing date.
                </p>
                <p>Here&#39;s an example of an annual plan:</p>
                <p className="font-italic">
                  Your workspace is on the Basic plan and you&#39;re paying
                  annually — $144 per User per year. Your &quot;auto-flex&quot;
                  billing cycle happens at the end of every quarter of your
                  annual Subscription Term. You add 4 new Users two months into
                  your billing cycle. You deprovision 2 Users before the next
                  regular billing date (i.e. the end of the third month of your
                  annual Subscription Term). You will be charged for the 2
                  incremental Users you added during the preceding three month
                  period and retained as of the billing date, at the prorated
                  price for the remaining nine months of your annual
                  Subscription Term (i.e. $216 total).
                </p>
                <p className="alert alert-info font-weight-bold text-dark ">
                  Paying by annual invoice? We invoice you for a set number of
                  Users for the full year. If your team grows larger than
                  anticipated, we’ll send you an invoice once per quarter to
                  settle any outstanding balances.
                </p>
                <h2 id="credit-card-charges">Credit card charges</h2>
                <p>
                  You&#39;ll see the first credit card charge from Postman on
                  the day you purchase any paid subscriptions. Here are some
                  other times you&#39;ll see charges:
                </p>
                <ul>
                  <li>
                    On the monthly renewal date if your team is on a monthly
                    payment plan. This will include any charges for adding new
                    Users as described in the Auto-Flex team policy sections
                    above.
                  </li>
                  <li>
                    On the annual renewal date if you are on an annual payment
                    plan.
                  </li>
                  <li>
                    On the last day of the quarter, if you are on an annual
                    payment plan and there are any charges due for adding new
                    Users as described in the Auto-Flex team policy sections
                    above.
                  </li>
                </ul>
                <p className="alert alert-info mb-5">
                  <span className="font-weight-bold text-dark">Tip:</span> To
                  learn more about the different types of roles and permissions
                  you can assign in Postman, visit{" "}
                  <a href="https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/">
                    Defining Roles
                  </a>
                  .
                </p>

                <PreviousAndNextLinks data={{ previous, next }} />
              </main>
              <RightColumnWrapper className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">
                <hr className="d-block d-lg-none" />
                <EditDoc />
                <ContextualStyles>
                  <div className="contextual-links__section">Latest News</div>
                  <div className="contextual-links__link">
                    <DynamicLink
                      url="https://www.postman.com/downloads/"
                      name="API-First Transformation Book"
                    />
                  </div>
                </ContextualStyles>
                <div className="sticky">
                  <div>
                    <p>
                      <span className="font-weight-bold">
                        Open Technologies
                      </span>
                      <br></br>
                      help with providing a safe space to grow and flourish.
                    </p>
                  </div>
                  <figure className="postmanaut-dab mt-1">
                    <img
                      src="https://voyager.postman.com/illustration/postmanaut-posing-dancing-postman-illustration.svg"
                      alt="Posmanaut dancing. Illustration."
                      className="img-fluid"
                    />
                  </figure>
                </div>
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
`
export default TestingPage
/* eslint-enable */
