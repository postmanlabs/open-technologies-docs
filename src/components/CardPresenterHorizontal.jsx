import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paragraph } from 'aether-marketing';
import { withPrefix } from 'gatsby';
const SVG = styled.svg`
  &:hover {
    opacity: 0.7;
  }
`;
function CardPresenterHorizontal({
  col, // bootstrap classes for col width
  media, // image object
  speaker // details about presenter
}) {
  return (
    <div className={`${col || 'col-lg-6 col-xl-4'}`}>
      <div className="container pl-0 pr-0">
        <div className="row my-auto justify-content-center">
          <div className="col-5 col-md-4 my-auto">
            <img className="img-fluid rounded-circle" src={withPrefix(media.src)} alt={media.alt} />
          </div>
          <div className="col-7 col-md-8 d-flex align-items-center">
            <div className="d-flex flex-column justify-content-center">
              <Paragraph
                textColor="grey_50"
                className="strong mb-1 subtitle"
              >
                {speaker.name}
              </Paragraph>
              {speaker.title && <Paragraph textColor="grey_50" className="mb-1 subtitle">
                {speaker.title}
              </Paragraph>}
              {speaker.company && <Paragraph textColor="grey_50" className="mb-3 subtitle">
                {speaker.company}
              </Paragraph>}
              <div className="d-flex flex-row">
                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    title={`Follow ${speaker.name} on LinkedIn`}
                  >
                    <SVG
                      width="30"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.134 7.363H.537v14.044h4.597zM5.437 3.019C5.407 1.642 4.44.593 2.866.593 1.293.593.265 1.642.265 3.019c0 1.348.998 2.427 2.541 2.427h.03c1.603 0 2.601-1.079 2.601-2.427zM21.714 13.354c0-4.313-2.268-6.32-5.293-6.32-2.44 0-3.534 1.362-4.144 2.319v-1.99H7.68c.06 1.318 0 14.044 0 14.044h4.598v-7.843c0-.42.03-.839.151-1.139.333-.839 1.09-1.707 2.36-1.707 1.664 0 2.329 1.288 2.329 3.175v7.514h4.597v-8.053z"
                        fill="#FF6C37"
                        fillRule="evenodd"
                      />
                    </SVG>
                  </a>
                )}
                {speaker.twitter && (
                  <a
                    href={speaker.twitter}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mr-1"
                    title={`Follow ${speaker.name} on Twitter`}
                  >
                    <SVG
                      width="34"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.955 10.483c-.032.25-.097.492-.162.734-.583 2.175-1.647 4.222-2.986 6.01-3.93 5.163-9.79 7.257-15.664 5.683-2.76-.74-5.257-2.334-7.143-4.542.376.138.784.285 1.17.388 2.31.619 4.747.384 6.952-.654-2.141-.61-3.651-2.68-3.733-5.07a4.73 4.73 0 0 0 2.339.516c-2.237-1.156-3.4-3.873-2.643-6.445l.019-.07a5.09 5.09 0 0 0 2.126 1.31C5.063 6.921 4.682 5.005 5.172 3.175c.26-.967.743-1.873 1.414-2.582 1.684 4.115 4.95 7.21 8.961 8.545.015-.44.094-.863.205-1.278.814-3.038 3.75-4.879 6.575-4.122 1.38.37 2.562 1.352 3.229 2.715a10.32 10.32 0 0 0 3.594-.443c-.719 1.14-1.817 2.03-3.052 2.402 1.055.172 2.1.119 3.152-.08a10.71 10.71 0 0 1-3.295 2.151z"
                        fill="#FF6C37"
                        fillRule="evenodd"
                      />
                    </SVG>
                  </a>
                )}
                {speaker.website && (
                  <a
                    href={speaker.website}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mr-1"
                    title={speaker.website}
                  >
                    <SVG
                      height="20"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m10.2817.203613c-1.87888 0-3.71561.557165-5.27788 1.601037-1.56226 1.04387-2.7799 2.52757-3.49893 4.26347-.719035 1.7359-.907167 3.64603-.540608 5.48888.366558 1.8428 1.271348 3.5355 2.599948 4.8641s3.02133 2.2334 4.86415 2.6c1.84282.3665 3.75292.1784 5.48882-.5406 1.7359-.7191 3.2196-1.9367 4.2635-3.499 1.0439-1.5622 1.601-3.399 1.601-5.27789-.0029-2.51864-1.0048-4.93328-2.7857-6.71423-1.781-1.78095-4.1956-2.782795-6.7143-2.785767zm-7.72173 10.363587h2.56327c.05019 2.0998.58393 4.1597 1.55973 6.0196-1.1267-.5902-2.09162-1.4475-2.81037-2.4969-.71875-1.0493-1.16944-2.2588-1.31263-3.5227zm2.56327-1.72722h-2.56327c.14319-1.26384.59388-2.47334 1.31263-3.5227.71875-1.04937 1.68367-1.90665 2.81037-2.49685-.9758 1.85991-1.50954 3.9198-1.55973 6.01955zm4.29486 8.34792c-1.24622-.8084-2.39659-3.2767-2.56845-6.6207h2.56845zm0-8.34792h-2.56845c.17186-3.344 1.32223-5.81228 2.56845-6.62064zm1.7273 8.34792v-6.6207h2.5684c-.1718 3.344-1.3222 5.8123-2.5684 6.6207zm0-8.34792v-6.62064c1.2462.80836 2.3966 3.27664 2.5684 6.62064zm2.7351 7.74682c.9758-1.8599 1.5095-3.9198 1.5597-6.0196h2.5633c-.1432 1.2639-.5939 2.4734-1.3126 3.5227-.7188 1.0494-1.6837 1.9067-2.8104 2.4969zm1.5597-7.74682c-.0502-2.09975-.5839-4.15964-1.5597-6.01955 1.1267.5902 2.0916 1.44748 2.8104 2.49685.7187 1.04936 1.1694 2.25886 1.3126 3.5227z"
                        fill="#ff6c37"
                      />
                    </SVG>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardPresenterHorizontal.propTypes = {
  col: PropTypes.string,
  media: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  speaker: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    company: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    website: PropTypes.string
  })
};

CardPresenterHorizontal.defaultProps = {
  col: null,
  media: {
    alt: null,
    src: null
  },
  speaker: {
    name: null,
    title: null,
    company: null,
    twitter: null,
    linkedin: null,
    website: null
  }
};

export default CardPresenterHorizontal;
