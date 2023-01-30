---
title: "Collections"
order: 1
page_id: "collections"
warning: false
updated: 2021-09-29
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: link
    name: "Installation and updates"
    url: "/docs/getting-started/installation-and-updates/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to APIs playlist"
    url:  "https://youtube.com/playlist?list=PLM-7VG-sgbtA-MUiVgE-SwK_RkYgesikH"
  - type: link
    name: "Intro to Postman playlist"
    url: "https://youtube.com/playlist?list=PLM-7VG-sgbtAgGq_pef5y_ruIUBPpUgNJ"
  - type: link
    name: "Postman Intergalactic: An Introduction for Developers"
    url: "https://youtu.be/8MOzaTsVRKg"
  - type: link
    name: "Postman Community Forum | Postman Level Up"
    url:  "https://youtu.be/Ks_4H58eCQc"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "First 5 Things to Try If You’re New to Postman"
    url: "https://blog.postman.com/postman-first-5-things-to-try/"
  - type: link
    name: "10 Postman Features Everyone Should Know"
    url: "https://blog.postman.com/10-postman-features-everyone-should-know/"
  - type: link
    name: "What Do 37,000 Developers Say About Postman? 3 Key Things"
    url: "https://blog.postman.com/what-developers-say-about-postman/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "30 days of Postman for developers"
    url:  "https://www.postman.com/postman/workspace/30-days-of-postman-for-developers/overview"
  - type: link
    name: "Sending your first request"
    url: "/docs/getting-started/sending-the-first-request/"
---

A collection is an API specification that provides a format for representing, modeling, and organizing different parts of an API request or workflow. The format both human-readable and machine-readable, and lets you create executable workflows for your APIs.

Collections let you:

* Share and execute API requests seamlessly.
* Define different aspects of your API.
* Create and model workflows for your APIs.
* Work across the lifecycle of your API.
* Document and test your API.

The collection format is [open source](https://github.com/postmanlabs/schemas/tree/develop/schemas/draft-07) and is the basis of [collections in Postman](https://www.postman.com/collection/). The format's portability makes it possible to share in a distributed team and run in different environments without any information loss. A single collection file can contain API requests and their parameters, multiple responses to each request, documentation, tests, execution flows, and metadata. This in turn helps developer teams collaborate, increase productivity, and work faster with APIs in any environment.



## Advantages of the collection format

Collections have the following advantages:

#### Collections are human-readable and machine-readable

Collections are written in JSON. Each property has an intuitive and understandable name with a relatable structure, making it readable to humans without having to consult a lot external documentation. Collections are structurally sub-divided into tiny parts called units, and being coupled with JSON structure makes them readable by computers.

#### Collections are interoperable

With the help of tooling, collections are interoperable. You can convert a collection to an API definition in a different format and vice versa. In Postman’s API Builder, you can import your API definitions in a variety of formats, such as OpenAPI and GraphQL, and use them to generate collections for different purposes, including mocking, documentation, and testing.

#### Collections are highly portable

Collections are portable, which makes it possible to share and use them across multiple environments.

#### Everything you need in a single place

Collections include everything you need to work with your API, including documentation, testing, API requests and workflows, and scripting.

#### Code and documentation generation

Because collections are machine-readable, they can be used to generate both client and server-side codes for your APIs in any programming language. This means developers can generate SDKs for their APIs, saving time that would have been used to write one from scratch. For example, [Postman code generators](https://github.com/postmanlabs/postman-code-generators) let you generate code from your collections in over 10 programming languages.

Aside from code, documentation is another important aspect of building APIs. Collections support documentation by default, and this documentation can be converted into a more presentable form for better consumption.


## Toolings
Collections have a wide range of toolings for different things. Here are a few of the toolings around collections and what they do.

- Collection SDK
- Collection Runtime
- OpenAPI to Collection
- Collection Code Generator