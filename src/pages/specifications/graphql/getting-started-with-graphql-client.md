---
title: "Getting started with new GraphQL Client"
order: 1
page_id: "getting-Started-with-new-graphql-client"
warning: false
updated: 2023-02-15

---
### What is this?

This document will serve as your quick-start guide for the early release of Postman's new GraphQL Client. Below are a few screenshots with the highlighted areas of the client to get an example schema loaded. From there, you can experiment with the new features and perform the operations common to building queries and testing a GraphQL API.

### Why did we make this?

#### The problems with GraphQL APIs we set out to solve

1. A growing GraphQL API often needs guidance to explore its evolving data structure.

2. GraphQL is a relatively new protocol, and there is a learning curve for individuals to get started.

3. Starting with introspection and building queries with an explorer delivers an optimized GraphQL workflow and query design experience.

#### The approach we took

The new GraphQL experience starts with introspection and schema support at its core. Simply typing in an introspection-enabled URL, or importing a GraphQL schema, presents a new Query Explorer that paints an intricate experience of your API definition. Searching the schema and visually selecting the data you need automatically constructs the GraphQL query. It is a great place to explore as well as learn how GraphQL query works.

Ability to save a GraphQL query into a Collection and then document it takes it to the next level of demonstrating usage of your APIs in your Workspace and even to the whole world in the Public API Network.

Scripting around the query retains the power of API testing, be it data sanity or structural sanity, or simply establishing contracts - they remain as easy as it is with HTTP.

We are also bringing Subscription support closer to the overall GraphQL experience and working on making it equally easy to learn, debug and test how they work.

#### The objective of our first release

Make a client that celebrates the power of exploring data and is purpose-built for GraphQL.

### Get started with our Echo Service

The [GraphQL Echo Postman collection](https://www.postman.com/postman/workspace/published-postman-templates/collection/63c7d7701bfb72333ca216d4?action=share&creator=13059338) contains requests to help you get started using the [GraphQL Echo API](https://graphql.postman-echo.com/graphql) using the new GraphQL client. Here are a few screenshots from the collection:

<img  src="/images/graphqlv2-introspection.gif"  alt="Load the schema using intropsection. gif" />

>Load the schema using intropsection

<img  src="/images/description.png"  alt="Querying the Echo API. gif" />

>Querying the Echo API

<img  src="/images/graphqlv2-mutation.gif"  alt="Mutation example. gif" />

>Mutation example

<img  src="/images/graphqlv2-subscription.gif" alt="Subscription example. gif" />

>Subscription example

### Example Collections to explore

You can use Postman collections from public GraphQL APIs to try out our new GraphQL client or choose your own.

* [GitHub](https://docs.github.com/en/graphql/reference)

* [Zoom](https://marketplace.zoom.us/docs/graphql/overview/)

* [Escape Technologies](https://www.postman.com/escape-tech/workspace/escape-public-graphql-security-workspace/overview)

* [GraphQL Public APIs](https://github.com/IvanGoncharov/graphql-apis)

### How to submit your feedback

You can provide us with your feedback, including screenshots if you would like to use those, and share your general experience using the new GraphQL Client.  We are eager to learn of any bugs you encounter or features you believe need to be added to future versions of the client.

[Feedback Form.](https://docs.google.com/forms/d/1nq3s_PsYHA4BgozVlVilkIo_ira8_uu1pfpqWCjxozw/edit)
