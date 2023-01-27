![Postman logo](https://assets.getpostman.com/common-share/postman-github-logo.png "Postman logo")

# Open Technology Docs

The [Postman Open Technology Docs](https://learning.postman.com/open-technologies-docs) has the resources you need quickly spin up a new repository and page with approved styling and logic in place. This repo is for cloning only, please do not use this repo to create microsites.

## Tech stack

The Docs are build with ReactJS, GatsbyJS Framework and styled components for styling.

The primary header on top and the footer consume the header and footer API from Marketing Engineering.
The secondary top navbar as well as the left and right navbars can be adjusted/edited.

## How to get started

**TLDR;
Clone down repo, create new GitHub repo, push up changes to new repo, contact MarketingEngineering for deployment**

- Clone down this repo and rename it.
- In your terminal run:

```

npm run nvmrc; nvm use; npm i

```

- Create a new GitHub repo under the PostmanLabs organisation.
- In your terminal run:

```shell

git remote rename origin old-origin
git remote add origin <url of your new repo>
git push origin main:main

```

This sets renames your origin and then points the origin to your new remote github repo.
Please reach out to MarketingEngineering and provide the desired path, so that we can spin up a new infra for you.

## License

[Apache License 2.0](LICENSE)
