---
title: "Collections"
order: 1
page_id: "collections"
warning: false
updated: 2023-02-08
contextual_links:
  - type: section
    name: "Blog Posts"
  - type: link
    name: "Postman Essentials: Exploring the Collection Format"
    url: "https://blog.postman.com/postman-essentials-exploring-the-collection-format/"
  - type: link
    name: "Travelogue of Postman Collection Format v2"
    url: "https://blog.postman.com/travelogue-of-postman-collection-format-v2/"

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

### Collections are human-readable and machine-readable

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

#### Working with workflows

Collections do not just define the structure of an API, but also gives you everything you need to successfully run an API request. Requests in collections can be structured together to build a step by step workflow for your API. With variables and events, you can define dynamic components/data in your collection and have each request programmatically interract with each other. For example, a collection can be used define a complete user authentication workflow(Sign Up -> Login -> Token Verification).

## Structure

Collections are designed to be simple and portable. Their structure are as shown in the diagram below.

![Collection Structure Image](https://firebasestorage.googleapis.com/v0/b/collection-format-docs.appspot.com/o/reference-images%2Fcollection%20format%20overview%20(plain)%402x%20(1).jpg?alt=media&token=e9b6dc17-e9a3-4300-8199-8cfd80c375fc)

**Item**: An Item contains an HTTP request, along with the associated metadata.

**Info**: The info object contains the collection name, version, description, and schema.

**Item groups**: An item group is a container for items. You can think of it as a folder for items. The folder has its own `name`, `id`, and `description`.

**Request**: A request represents an HTTP request. A request can be found within an item. Requests can be specified as a string, or as a JSON object.

**Events**: Events let you declare scripts that can run at certain stages in the lifecycle of your request or collection. The scripts are written in JavaScript and can be run using the [Postman Sandbox](https://github.com/postmanlabs/postman-sandbox).

## Toolings

Collections have a wide range of toolings for different things. Here are a few of the toolings around collections and what they do.

* **[Collection SDK](https://github.com/postmanlabs/postman-collection)**: The collection SDK is a JavaScript module that makes it easy to programmatically work with the units of a collection.
* **[Collection Runtime](https://github.com/postmanlabs/postman-runtime)**: This is a low-level library used as the backbone for all collection running & request sending functionality. Open Source tools like [Newman](https://github.com/postmanlabs/newman) are built atop of the collection runtime.
* **[Newman](https://github.com/postmanlabs/newman)**: Newman is a command line library for running collections.
* **[Collection Code Generator](Collection Code Generator)**: This is a Javascript module for converting collections to code snippets in over 10 programming languages.
* **[Open API to Postman](https://github.com/postmanlabs/openapi-to-postman)**: This is a library for converting Open API definitions to collections.
* **[Postman to Open API](https://github.com/kevinswiber/postman2openapi)**: This library converts a postman collection to an OpenAPI definition.

To learn more about the collection format, head over to the [documentation](https://schema.postman.com) to understand the different units of a collection and how they are related.
