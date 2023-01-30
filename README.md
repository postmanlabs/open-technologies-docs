![Postman logo](https://assets.getpostman.com/common-share/postman-github-logo.png "Postman logo")

# Open Technology Docs

The [Postman Open Technology Docs](https://learning.postman.com/open-technologies-docs) is the main repository behind the technical documentation that lives at https://learning.postman.com/open-technologies-docs/. The content hosted there has been created with our community for our community and is available for community contributions.

## Contribution guidelines

We would love for you to contribute to the Learning Center! To contribute to this project, please read:

* The [Code of Conduct](https://www.postman.com/code-of-conduct)
* The [Contribution Guidelines](CONTRIBUTING.md)
* The [Documentation Style Guide](DOCS_STYLE_GUIDE.md)

**NOTE:** We've added a new Markdown linter with GitHub Actions. When making a pull request, it will run against this linter. Your changed files are required to pass linting before they will be merged. More information on this can be found in the [contribution guidelines](CONTRIBUTING.md).

## Tech stack

The Docs are build with ReactJS, GatsbyJS Framework and styled components for styling.

The primary header on top and the footer consume the header and footer API from Postman Marketing Engineering.
The secondary top navbar as well as the left and right navbars are custom to this project.

## How to get started

### Build the Open Technologies Docs locally

```shell

   $ git clone https://github.com/postmanlabs/open-technologies-docs.git
   $ cd postman-docs
   $ npm run nvmrc
   $ nvm use
   $ npm install
   $ npm install -g gatsby-cli
   $ npm run dev

```

**NOTE:** this site was built with Node.js v14.17.1. We recommend installing and using [nvm](https://github.com/nvm-sh/nvm) and setting your Node.js version to v14.17.1.

**TLDR;
The usual PR process of Github. This repo can run standalone on your machine. Or you can make modifications to markdown files in https://github.com/postmanlabs/open-technologies-docs/tree/develop/src/pages to develop the content only.

## License

[Apache License 2.0](LICENSE)
