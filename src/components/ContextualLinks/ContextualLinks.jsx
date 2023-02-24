import React from 'react';
const { v4: uuidv4 } = require('uuid');
import DynamicLink from '../Shared/DynamicLink';
import recentBlogPosts from '../../../bff-data/blog.json';
import { ContextualStyles } from '../../../styles/ContextualStyles';

const ContextualLinks = ({ links }) => (
  <ContextualStyles>
    {
      links.map((item) => {
        if (item.type === 'link') {
          return (
            <div className="contextual-links__link" key={uuidv4()}>
              <DynamicLink url={item.url} name={item.name} />
            </div>
          );
        }
        if (item.type === 'subtitle') {
          return (
            <div className="contextual-links__subtitle" key={uuidv4()}>
              {item.name}
            </div>
          );
        }
        if (item.type === 'dynamic_blog' && item.blog_tag) {
          if (Object.keys(recentBlogPosts).length === 0) {
            // If recentBlogPosts.length === 0, then either there is no .env.development,
            // it has a bad blog url, or the endpoint returned something bad
            return (
              <div className="contextual-links__alert" role="alert">
                <p>
                  You are currently in develop mode.
                  Dynamic blog posts will not be displayed locally.
                  <a style={{ fontSize: 'inherit' }} href="https://github.com/postmanlabs/open-technologies-docs/blob/develop/CONTRIBUTING.md#to-use-the-dynamic-blog-posts-feature" target="_blank" rel="noopener">See Contributing doc for details</a>
                  .
                </p>
              </div>
            );
          }
          if (recentBlogPosts.index && recentBlogPosts.index[item.blog_tag]) {
            const dynamicLinks = recentBlogPosts.index[item.blog_tag].slice(0, 3).map((post) => (
              <div className="contextual-links__link" key={uuidv4()}>
                <DynamicLink url={post.link.url} name={post.title} />
              </div>
            ));
            return (
              <div key={uuidv4()}>
                <div className="contextual-links__subtitle" key={item.name}>
                  {item.name}
                </div>
                {dynamicLinks}
              </div>
            );
          }

          // If there are no related blog posts within blogs.json
          // (written in /bff-data/ at build time), we simply return nothing.

          // This will likely be the case when you are developing locally,
          // and do not have a .env.development file with the BFF endpoints.
          return null;
        }

        return (
          <div className="contextual-links__section" key={uuidv4()}>{item.name}</div>
        );
      })
    }
  </ContextualStyles>
);

export default ContextualLinks;
