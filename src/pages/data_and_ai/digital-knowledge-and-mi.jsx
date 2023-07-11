/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, withPrefix } from 'gatsby';

import Layout from '../../components/layout';
import RightNavLinks from '../../components/RightNavLinks';
import { leftNavItems } from '../../components/LeftNav/LeftNavItems';
import LeftNav from '../../components/LeftNav/LeftNav';
import SEO from '../../components/seo';
import 'prismjs/themes/prism-tomorrow.css';
import BreadCrumbsLinks from '../../components/modules/BreadCrumbsLinks';
import PreviousAndNextLinks from '../../components/modules/PreviousAndNextLinks';
import EditDoc from '../../components/Shared/EditDoc';
import { RightColumnWrapper } from '../../../styles/RightColumnWrapper';
import { DocWrapper } from '../../../styles/DocWrapper';

const DigitalKnowledge = ({ data }) => {

  const { parentLink, subParentLink, previous, next } = data;
  return (
    <Layout>
      <SEO title="Digital Knowledge and Machine Intelligence"
        description='AI, APIs, metadata, and data: the digital knowledge and machine intelligence ecosystem'
        slug="/data_and_ai/digital-knowledge-and-mi/" />
      <DocWrapper className="container-fluid">
        <div className="row row-eq-height">
          <nav className="col-sm-12 col-md-4 col-lg-3 left-nav-re">
            <LeftNav leftNavItems={leftNavItems} />
          </nav>
          <div className="col">
            <div className="row row-eq-height">
              <main className="col-sm-12 col-md-12 col-lg-9 offset-lg-0 col-xl-7 doc-page ml-xl-5">
                <BreadCrumbsLinks data={{ parentLink, subParentLink }} />
                <section className='mb-5'>
                  <h1>Digital Knowledge and Machine Intelligence</h1>
                  <p>
                    Artificial intelligence, APIs, data, and metadata form an ecosystem which is the foundation of digital knowledge management and machine intelligence.
                  </p>
                  <p>
                    Postman Open Technologies is keen to stay at the forefront of these constantly evolving fields.
                    We are actively exploring related topics to ensure the Postman Platform remains responsive to the dynamic needs of developers, researchers, enterprise customers, and the open data and AI communities.
                  </p>
                  <p>
                    A parallel can be drawn between the Data-Information-Knowledge-Wisdom (DIKW) pyramid, a model that represents the transition from raw data to valuable wisdom, and our ecosystem, illustrating the interplay between its four integral components:
                  </p>
                  <img src={withPrefix("/images/wisdom-illustration.png")} alt="Wisdom chart. Illustration" className='mb-4' />
                  <p>
                    To support this vision, we work in close collaboration with both internal and external stakeholders to help advance knowledge and build tools in these areas.
                  </p>
                  <p>
                    Our R&D efforts translate into innovative platform features, contribution to open source projects, and participation in various events and initiatives surrounding standards and best practices.
                  </p>
                  <h2>Research Areas</h2>
                  <p>
                    Our R&D cover a wide range of subjects, the following being of particular interest to us at this time:
                  </p>
                  <ul>
                    <li><em>Generative AI:</em> Like everyone, we are naturally investigating the potential roles and uses of AI for API development, and to broadly support the vision of the above ecosystem. This includes developing Postman features, evaluating Large Language Models (LLMs), exploring LangChain, keeping up to speed with latest news, while alongside strengthening our AI knowledge and expertise.</li>
                    <li><em>Knowledge Base:</em> We are gathering and analyzing vast amounts of information around APIs, Postman Collections, JSON schemas, and related resources, to better understand common practices, governance, and quality issues, or use as a data source for machine learning purposes.</li>
                    <li><em>Quality:</em> Ensuring the highest quality of APIs, collections, and documentation is critical. Based on findings from the knowledge base and user feedback, we are developing new tools and techniques to assess and address quality issues, in particular leveraging Spectral and AI.</li>
                    <li><em>Discovery:</em> There are myriads of APIs out there, and finding the right one for your needs can be challenging. We are researching and implementing innovative metadata driven approches to strengthen API search and discovery capabilities.</li>
                    <li><em>Semantic Web:</em> RDF/SPARQL and related semantic web technologies, specifications, and practices provide robust mechanisms to capture and manage digital knowledge. We are examining ways to leverage RDF for managing and querying metadata around APIs and data, or to supplement and support AI.</li>
                    <li><em>GraphQL:</em> We are paying particular attention to GraphQL as an innovative and rapidly growing API technology for data management, discovery, and analysis. This includes supporting the standard, exploring potential integration with SPARQL and AI, or improving GraphQL metadata capabilities.</li>
                    <li><em>(Meta)Data Modernization:</em> Data without metadata can be an indecipherable jumble. We are investigating ways to promote the use of APIs by data custodians and users, improve data discoverability, access, use, privacy, and support the establishment of related standards and best practices.</li>
                    <li><em>Machine2Machine:</em> We often think about APIs from a user perspective, but the primary consumers are actually applications, websites, and AIs. We are investigating how this  impacts API design, and how to ensure the smooth exchange of digital information and the dialog between applications, machines, and AIs.</li>
                  </ul>
                  <p>
                    Collaboration is key to success. Do reach out if these topics excite you or you have questions or suggestions.
                  </p>
                </section>
                <section className='mb-5'>
                  <h2>Digital Knowledge</h2>
                  <p className='mb-5'>
                    Data and metadata are the commodities that, through APIs and AI, power machine intelligence.
                    They are the building blocks of digital knowledge.
                  </p>
                  <h4>Data</h4>
                  <p>
                    Data is the fundamental resource that captures the raw knowledge and ultimately fuels analysis and research.
                    The quality and relevance of data are therefore paramount.
                    It is not just about quantity; it's about having the right data in the right shape and form.
                  </p>
                  <p>Humans and AIs have a symbiotic relationship with data, each feeding into and enhancing the other.
                    Data is the main input for machine learning, research, innovation, monitoring, and decision making.
                    And all these activities in turn produce new data.
                  </p>
                  <p>
                    Managing data in effective and responsible ways is therefore essential.
                    Data traditionally resides in files and databases, and there is an urgent need to elevate it to a 21st century commodity, by making it  discoverable and accessible over APIs, and complement it with metadata.
                  </p>
                  <p>
                    This can be achieved through the modernization of data infrastructures and services, collaborating with data custodians and users, and fostering the adoption of standards and best practices.
                  </p>
                </section>
                <section className='mb-5'>
                  <h4>Metadata</h4>
                  <p>
                    Metadata is the key that unlocks the meaning and potential of data.
                    Without metadata, data can be an indecipherable jumble.
                    Metadata makes data understandable and usable by both humans and AIs.
                    It also plays a critical role when it comes to provenance, privacy, and transparency.
                  </p>
                  <p>The metadata challenge is not new and is an issue that the data producers, researchers, and scientific communities have been tackling for decades.
                    Several standards and best practices have emerged, with the <a href='https://www.go-fair.org/' target="_blank"
                      rel="noopener noreferrer nofollow">FAIR initiative</a> and <a href='https://www.w3.org/TR/dwbp/' target="_blank"
                        rel="noopener noreferrer nofollow">Data on the Web Best Practices</a> providing good entry points into the matter.
                  </p>
                  <p>
                    Many organizations struggle to adopt and implement these practices effectively due to various factors such as lack of awareness and resources, limited technology expertise, or complexity of the standards.
                    There's a pressing need to pay more attention to this area, to strengthen data management and ensure the integrity, effectiveness, and transparency of data and AI.
                  </p>
                </section>
                <section className='mb-5'>
                  <h2>Machine Intelligence</h2>
                  <p className='mb-5'>
                    Artificial Intelligence and APIs are the components that support the emergence of machine intelligence and cognitive capabilities.
                  </p>
                  <h4>APIs</h4>
                  <p>
                    We live and operate in an interconnected world, where the direct digital information consumers are not users, but applications, websites, and AIs that need to communicate with each other in fast and efficient ways.
                    Information must be accessible in digital form through standard-based interfaces.
                  </p>
                  <p>
                    APIs are the connective tissue of our digital ecosystem, often an unseen yet essential facilitator in the background.
                    Moreover, APIs play a pivotal role in ensuring security by establishing secure pathways for in exchange, or safeguarding the integrity and confidentiality of information.
                  </p>
                  <p className='mb-5'>
                    Tools, techniques, best practices, and collaboration around APIs are fundamental, which have been Postman's mission since inception.
                    As the industry leader, we expect to continue to support and help communities and stakeholders leverage the power of APIs.
                  </p>

                  <h4>Artificial Intelligence</h4>
                  <p>
                    Generative AI has taken the world by storm and demonstrated its potential to drastically change the way we work.
                    Where this will lead us is anyone's guess, but AI-driven chatbots, platforms, and tools will inevitably rapidly become our day to day expert assistants and potentially replace traditional solutions.
                  </p>
                  <p >
                    We can't lose sight, however, that AI is an end product of our ecosystem that includes APIs, metadata, and data.
                    AI cannot exist without this supporting cast that truly powers its performance.
                    Together, these components form the backbone of our digital world.
                  </p>
                  <p>
                    AI also plays a significant role as data producer, by creating new findings and knowledge, holding great potential for enhancing the quality of data, metadata, and APIs, or generating safe synthetic data for training and research purposes.
                  </p>
                  <p>
                    There are many facets to explore and dots to be connected when it comes to the complex and rapidly evolving AI field, which we are eager to investigate.
                  </p>
                  <p>
                    <em>For further information on our Digital Knowledge and Machine Intelligence program, contact <a href="mailto:pascal.heus@postman.com">pascal.heus@postman.com</a></em>
                  </p>
                </section>

                <PreviousAndNextLinks data={{ previous, next }} />
              </main>
              <RightColumnWrapper className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">
                <EditDoc />
                <RightNavLinks />

              </RightColumnWrapper>
            </div>
          </div>
        </div>
      </DocWrapper>
    </Layout >
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
export default DigitalKnowledge;
/* eslint-enable */
