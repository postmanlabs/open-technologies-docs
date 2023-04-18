import React from 'react';
import { withPrefix } from 'gatsby';
const { v4: uuidv4 } = require('uuid');
import { SectionHeader, Feature, Hero, Divider } from 'aether-marketing';
import '../../styles/config/normalize.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../../styles/config/_pm-icons.css';
import peopleData from './peopleData.json';
import CardPresenterHorizontal from '../components/CardPresenterHorizontal';


const header = {
  title: "Meet the teams and their tech in Postman Open Technologies",
  body: [
    'As Postman\'s central instance for open source - using, contributing to, and creating open source software, specifications and libraries - we\'re all about the people, and empowering everyone to build a robust and open API industry of tomorrow. ',
    ' These are the people who care about standards, tooling, specifications, and data.'
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
        "",
      ],
      colWidth: "col-sm-6",
      media: {
        src: withPrefix("/images/Governance.png"),
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
        "",
      ],
      colWidth: "col-sm-6",
      media: {
        src: "https://voyager.postman.com/logo/external/graphql-icon.svg",
        alt: "GraphQL. Illustration.",
      },
      link: {
        text: "Learn more",
        src: withPrefix("/specifications/graphql/graphql/"),
        target: "same-tab",
      },
    },
    {
      imageSize: "icon",
      title: "gRPC",
      subtitle: [
        "",
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
        "",
      ],
      colWidth: "col-sm-6",
      media: {
        src: withPrefix("/images/Websockets.png"),
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
        "",
      ],
      colWidth: "col-sm-6",
      media: {
        src: withPrefix("/images/Integration.png"),
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

const data = {
  heroLayout: "sideXSide",
  sideXSideLayout: "xlarge",
  divider: true,
  title: ["Postman Open Technologies"],
  subtitle: ["<p class=\"subtitle\">Understand the technologies behind Postman Open Technologies.<br/> Check out the docs and support resources!</p>"],
  media: {
    class: "mt-5 mt-lg-0",
    src: "https://voyager.postman.com/illustration/ventura-abled.png",
    alt: "Venutra abled. Illustration.",
  },
  button: [
    {
      buttonType: "secondary",
      text: "Explore the docs",
      src: withPrefix("/specifications/overview/"),
      target: "",
      id: "explore-the-docs",
      gaCategory: "explore-the-docs",
      gaLabel: "explore-the-docs"
    },

  ],
};
class IndexPage extends React.Component {
  
  render() {
    return (
      <Layout>
        <SEO title="Learning Center" slug="/" />
        <div className="container-fluid">
          <Hero
            heroLayout={data.heroLayout}
            sideXSideLayout={data.sideXSideLayout}
            divider={data.divider}
            title={data.title}
            subtitle={data.subtitle}
            media={data.media}
            button={data.button}
          />

        </div>
        <div className="container mt-4 pt-4">
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
                    // media={{
                    //   alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    //   src: people.media.src
                    // }}
                    speaker={{
                      name: people.speaker.name,
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
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
                    // media={{
                    //   alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    //   src: people.media.src
                    // }}
                    speaker={{
                      name: people.speaker.name,
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
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
                    // media={{
                    //   alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    //   src: people.media.src
                    // }}
                    speaker={{
                      name: people.speaker.name,
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
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
                    // media={{
                    //   alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    //   src: people.media.src
                    // }}
                    speaker={{
                      name: people.speaker.name,
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
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
                    // media={{
                    //   alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    //   src: people.media.src
                    // }}
                    speaker={{
                      name: people.speaker.name,
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
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
                    // media={{
                    //   alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    //   src: people.media.src
                    // }}
                    speaker={{
                      name: people.speaker.name,
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
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
                    // media={{
                    //   alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    //   src: people.media.src
                    // }}
                    speaker={{
                      name: people.speaker.name,
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
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
                    // media={{
                    //   alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    //   src: people.media.src
                    // }}
                    speaker={{
                      name: people.speaker.name,
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
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
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      // github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
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
                    // media={{
                    //   alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    //   src: people.media.src
                    // }}
                    speaker={{
                      name: people.speaker.name,
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
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
                    // media={{
                    //   alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    //   src: people.media.src
                    // }}
                    speaker={{
                      name: people.speaker.name,
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
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
                    // media={{
                    //   alt: `${people.speaker.name}, ${people.speaker.title} ${people.speaker.company}`,
                    //   src: people.media.src
                    // }}
                    speaker={{
                      name: people.speaker.name,
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
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
                      pronouns: people.speaker.pronouns,
                      title: people.speaker.title,
                      linkedin: people.speaker.linkedin,
                      twitter: people.speaker.twitter,
                      website: people.speaker.website,
                      mastodon: people.speaker.mastodon,
                      github: people.speaker.github,
                      book: people.speaker.book,
                      reddit: people.speaker.reddit
                    }}
                  /> : null
              ))
              }
            </div>
          </section>
          <section>
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
