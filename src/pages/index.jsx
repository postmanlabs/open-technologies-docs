import React from 'react';
import { navigate, withPrefix } from 'gatsby';
const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';
import { SectionHeader, Feature } from 'aether-marketing';
import '../../styles/config/normalize.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import { LandingCard } from '../components/MarketingPages/Cards';
import '../../styles/config/_pm-icons.css';
import Button from '../components/Shared/Button';
import peopleData from './peopleData.json';

import CardPresenterHorizontal from '../components/CardPresenterHorizontal';
const HeroWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.grey_06};
  padding: 48px 80px;
    @media (max-width: 991px) {
        padding: 40px !important;
      }
    .hero-image {
        margin: 0px;
    }
    .img-frame {
        border-radius: ${(props) => props.theme.borderRadius.medium};
        border: 8px solid ${(props) => props.theme.colors.grey_20};// $grey_20
        box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.32);
    }

    .section-image {
      width: 100px;
      height: 100px;
    }

    .container {
      min-height: 400px;
    }
`

const HRStyles = styled.hr`
  border: 0;
  margin-top: 0;
  border-top: 1px solid ${(props) => props.theme.colors.grey_30};
  margin-bottom: 0;
`;

const header = {
  title: "Meet the teams and their tech in Postman Open Technologies.",
  body: [
    'As Postman\'s central instance for Open Source - using, contributing to, and creating Open Source software, specifications and libraries - we\'re all about the people, and empowering everyone to build a robust and open API industry of tomorrow.',
    'These are the people who care about standards, tooling, specifications and data.'
  ],
  
};
const feature = {
  paddingTop: "",
  paddingBottom: "",
  divider: false,
  backgroundColor: "",
  title: "Platform",
  body: [
    "These are the foundational ways that our teams contribute to the platform.",
  ],

  items: [
    {
      imageSize: "icon",
      title: "Governance",
      subtitle: [
        "<p>Cake cheesecake sesame snaps cake dessert gingerbread lemon drops cake icing. Powder donut jelly gummies chocolate.</p>",
      ],
      colWidth: "col-sm-6",
      media: {
        src: "/images/Governance.png",
        alt: "Governance. Illustration.",
      },
      link: {
        text: "Learn more",
        src: "/docs/api-governance/api-governance-overview/",
        target: "same-tab",
      },
    },
    {
      imageSize: "icon",
      title: "GraphQL",
      subtitle: [
        "<p>Cake cheesecake sesame snaps cake dessert gingerbread lemon drops cake icing. Powder donut jelly gummies chocolate.</p>",
      ],
      colWidth: "col-sm-6",
      media: {
        src: "https://voyager.postman.com/logo/external/graphql-icon.svg",
        alt: "GraphQL. Illustration.",
      },
      link: {
        text: "Learn more",
        src: "/docs/sending-requests/graphql/graphql/",
        target: "same-tab",
      },
    },
    {
      imageSize: "icon",
      title: "gRPC",
      subtitle: [
        "<p>Cake cheesecake sesame snaps cake dessert gingerbread lemon drops cake icing. Powder donut jelly gummies chocolate.</p>",
      ],
      colWidth: "col-sm-6",
      media: {
        src: "https://voyager.postman.com/icon/grpc-icon-postman.svg",
        alt: "gRPC. Illustration.",
      },
      link: {
        text: "Learn more",
        src: "/docs/sending-requests/grpc/grpc-client-overview/",
        target: "same-tab",
      },
    },
    {
      imageSize: "icon",
      title: "Websockets",
      subtitle: [
        "<p>Cake cheesecake sesame snaps cake dessert gingerbread lemon drops cake icing. Powder donut jelly gummies chocolate.</p>",
      ],
      colWidth: "col-sm-6",
      media: {
        src: "/images/Websockets.png",
        alt: "gRPC. Illustration.",
      },
      link: {
        text: "Learn more",
        src: "/docs/sending-requests/websocket/websocket/",
        target: "same-tab",
      },
    },
    {
      imageSize: "icon",
      title: "Integrations",
      subtitle: [
        "<p>Cake cheesecake sesame snaps cake dessert gingerbread lemon drops cake icing. Powder donut jelly gummies chocolate.</p>",
      ],
      colWidth: "col-sm-6",
      media: {
        src: "/images/Integration.png",
        alt: "gRPC. Illustration.",
      },
      link: {
        text: "Learn more",
        src: "/docs/integrations/intro-integrations/",
        target: "same-tab",
      },
    },
  ],
};


class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        {console.log(peopleData[3].speaker.mastodon)}
        <SEO title="Learning Center" slug="/" />
        <div className="container-fluid">
          <HeroWrapper className="row section align-items-center hero">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-6 align-self-center">
                  <h1>Postman Open Technologies</h1>
                  <p className="subtitle">
                    Understand the specification behind Postman Open Technologies.
                    {' '}
                    <br />
                    Check out the docs and support resources!
                  </p>
                  <Button
                    onClick={() => {
                      navigate("/specifications/collections/")
                    }}
                    className="mb-5 secondary"
                  >
                    Explore the Docs
                  </Button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                  <img src="https://voyager.postman.com/illustration/ventura-abled.png" alt="Venutra abled. Illustration." className="img-fluid" />
                </div>
              </div>
            </div>
          </HeroWrapper>
        </div>
        <div className="container ">
          <div className="container-fluid" >
            <HRStyles />
          </div>

          {/* <section className='col-sm-12 col-md-8 mt-5 mb-5' >
            {header.title && <h2 >{header.title}</h2>}
            {header.body && <p>{header.body}</p>}

          </section> */}
       
          <SectionHeader
            title={header.title}
            body={header.body}
            link={header.link}
            textAlign=""
            className="mt-4 pl-0"
            bottomMargin="40px"
          />
          <section className="section align-items-center">
            <h2>Teams</h2>
            <p className='mb-4'>Open Technologies is 40+ individuals working to strengthen the Postman platform and community.</p>
            <h3 className='mb-4'>Leadership</h3>
            <div className='row mt-4'>
              {peopleData.map((people) => (
                people.company === 'leadership' ?
                <CardPresenterHorizontal
                key={uuidv4()}
                  col={people.col}
                  media={{
                    alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    src: people.media.src
                  }}
                  speaker={{
                    name: people.speaker.name,
                    title: people.speaker.title,
                    linkedin: people.speaker.linkedin,
                    twitter: people.speaker.twitter,
                    website: people.speaker.website,
                    mastodon: people.speaker.mastodon,
                    github: people.speaker.github
                  }}
                /> : null
              ))
              }

            </div>
          </section>
            <h2 className='mb-4'>Specifications</h2>
          <section className="section align-items-center">
            <h3 className='mb-4'>OpenAPI</h3>
              <div className='row mt-4'>
                {peopleData.map(people => (
                 people.company === 'specifications' ?
                  <CardPresenterHorizontal key={uuidv4()}
                    col={people.col}
                    media={{
                      alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                      src: people.media.src
                    }}
                    speaker={{
                      name: people.speaker.name,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github
                    }}
                  /> : null
                ))
                }
              </div>
              </section>
              <section className="section align-items-center">
              <h3 className='mb-4'>JSON Schema</h3>
            
            <div className='row mt-4'>
              {peopleData.map(people => (
               people.company === 'json-schema' ?
                <CardPresenterHorizontal key={uuidv4()}
                  col={people.col}
                  media={{
                    alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    src: people.media.src
                  }}
                  speaker={{
                    name: people.speaker.name,
                    title: people.speaker.title,
                    linkedin: people.speaker.linkedin,
                    twitter: people.speaker.twitter,
                    website: people.speaker.website,
                    mastodon: people.speaker.mastodon,
                    github: people.speaker.github
                  }}
                /> : null
              ))
              }
            </div>
          </section>
          <section className="section align-items-center">
              <h3 className='mb-4'>AsyncAPI</h3>
            
            <div className='row mt-4'>
              {peopleData.map(people => (
               people.company === 'asyncapi' ?
                <CardPresenterHorizontal key={uuidv4()}
                  col={people.col}
                  media={{
                    alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    src: people.media.src
                  }}
                  speaker={{
                    name: people.speaker.name,
                    title: people.speaker.title,
                    linkedin: people.speaker.linkedin,
                    twitter: people.speaker.twitter,
                    website: people.speaker.website,
                    mastodon: people.speaker.mastodon,
                    github: people.speaker.github
                  }}
                /> : null
              ))
              }
            </div>
          </section>
          <section className="section align-items-center">
              <h3 className='mb-4'>GraphQL</h3>
            
            <div className='row mt-4'>
              {peopleData.map(people => (
               people.company === 'graphql' ?
                <CardPresenterHorizontal key={uuidv4()}
                  col={people.col}
                  media={{
                    alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    src: people.media.src
                  }}
                  speaker={{
                    name: people.speaker.name,
                    title: people.speaker.title,
                    linkedin: people.speaker.linkedin,
                    twitter: people.speaker.twitter,
                    website: people.speaker.website,
                    mastodon: people.speaker.mastodon,
                    github: people.speaker.github
                  }}
                /> : null
              ))
              }
            </div>
          </section>
          <section className="section align-items-center">
              <h3 className='mb-4'>Collection Format</h3>
            <div className='row mt-4'>
              {peopleData.map(people => (
               people.company === 'collection-format' ?
                <CardPresenterHorizontal key={uuidv4()}
                  col={people.col}
                  media={{
                    alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    src: people.media.src
                  }}
                  speaker={{
                    name: people.speaker.name,
                    title: people.speaker.title,
                    linkedin: people.speaker.linkedin,
                    twitter: people.speaker.twitter,
                    website: people.speaker.website,
                    mastodon: people.speaker.mastodon,
                    github: people.speaker.github
                  }}
                /> : null
              ))
              }
            </div>
          </section>
            <h2>Tooling</h2>
          <section className="section align-items-center">
              <h3 className='mb-4'>Testing & Mocking</h3>
            <div className='row mt-4'>
              {peopleData.map(people => (
               people.company === 'testing' ?
                <CardPresenterHorizontal key={uuidv4()}
                  col={people.col}
                  media={{
                    alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    src: people.media.src
                  }}
                  speaker={{
                    name: people.speaker.name,
                    title: people.speaker.title,
                    linkedin: people.speaker.linkedin,
                    twitter: people.speaker.twitter,
                    website: people.speaker.website,
                    mastodon: people.speaker.mastodon,
                    github: people.speaker.github
                  }}
                /> : null
              ))
              }
            </div>
          </section>
          <section className="section align-items-center">
            
              <h3 className='mb-4'>CodeGen</h3>
            <div className='row mt-4'>
              {peopleData.map(people => (
               people.company === 'codegen' ?
                <CardPresenterHorizontal key={uuidv4()}
                  col={people.col}
                  media={{
                    alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    src: people.media.src
                  }}
                  speaker={{
                    name: people.speaker.name,
                    title: people.speaker.title,
                    linkedin: people.speaker.linkedin,
                    twitter: people.speaker.twitter,
                    website: people.speaker.website,
                    mastodon: people.speaker.mastodon,
                    github: people.speaker.github
                  }}
                /> : null
              ))
              }
            </div>
          </section>
          <h2>Strategy</h2>
          <section className="section align-items-center">
            
            <h3 className='mb-4'>Communications/PR</h3>
          <div className='row mt-4'>
            {peopleData.map(people => (
             people.company === 'communications' ?
              <CardPresenterHorizontal key={uuidv4()}
                col={people.col}
                media={{
                  alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                  src: people.media.src
                }}
                speaker={{
                  name: people.speaker.name,
                  title: people.speaker.title,
                  linkedin: people.speaker.linkedin,
                  twitter: people.speaker.twitter,
                  website: people.speaker.website,
                  mastodon: people.speaker.mastodon,
                  github: people.speaker.github
                }}
              /> : null
            ))
            }
          </div>
        </section>
        <section className="section align-items-center">
            
            <h3 className='mb-4'>Governance</h3>
          <div className='row mt-4'>
            {peopleData.map(people => (
             people.company === 'governance' ?
              <CardPresenterHorizontal key={uuidv4()}
                col={people.col}
                media={{
                  alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                  src: people.media.src
                }}
                speaker={{
                  name: people.speaker.name,
                  title: people.speaker.title,
                  linkedin: people.speaker.linkedin,
                  twitter: people.speaker.twitter,
                  website: people.speaker.website,
                  mastodon: people.speaker.mastodon,
                  github: people.speaker.github
                }}
              /> : null
            ))
            }
          </div>
        </section>
        <section className="section align-items-center">
            
            <h3 className='mb-4'>Lifecycle</h3>
          <div className='row mt-4'>
            {peopleData.map(people => (
             people.company === 'lifecycle' ?
              <CardPresenterHorizontal key={uuidv4()}
                col={people.col}
                media={{
                  alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                  src: people.media.src
                }}
                speaker={{
                  name: people.speaker.name,
                  title: people.speaker.title,
                  linkedin: people.speaker.linkedin,
                  twitter: people.speaker.twitter,
                  website: people.speaker.website,
                  mastodon: people.speaker.mastodon,
                  github: people.speaker.github
                }}
              /> : null
            ))
            }
          </div>
        </section>
        <section className="section align-items-center">
            
            <h3 className='mb-4'>Products</h3>
          <div className='row mt-4'>
            {peopleData.map(people => (
             people.company === 'products' ?
              <CardPresenterHorizontal key={uuidv4()}
                col={people.col}
                media={{
                  alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                  src: people.media.src
                }}
                speaker={{
                  name: people.speaker.name,
                  title: people.speaker.title,
                  linkedin: people.speaker.linkedin,
                  twitter: people.speaker.twitter,
                  website: people.speaker.website,
                  mastodon: people.speaker.mastodon,
                  github: people.speaker.github
                }}
              /> : null
            ))
            }
          </div>
        </section>
        <section className="section align-items-center">
            
            <h3 className='mb-4'>Data & Intelligence</h3>
          <div className='row mt-4'>
            {peopleData.map(people => (
             people.company === 'data' ?
              <CardPresenterHorizontal key={uuidv4()}
                col={people.col}
                media={{
                  alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                  src: people.media.src
                }}
                speaker={{
                  name: people.speaker.name,
                  title: people.speaker.title,
                  linkedin: people.speaker.linkedin,
                  twitter: people.speaker.twitter,
                  website: people.speaker.website,
                  mastodon: people.speaker.mastodon,
                  github: people.speaker.github
                }}
              /> : null
            ))
            }
          </div>
        </section>
          <section className="row section align-items-center">
            <Feature
              paddingTop={feature.paddingTop}
              paddingBottom={feature.paddingBottom}
              divider={feature.divider}
              title={feature.title}
              body={feature.body}
              media={withPrefix(feature.media)}
              backgroundColor={feature.backgroundColor}
              items={feature.items}
              bodyLink={feature.bodyLink}
            />
          </section>


         
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
