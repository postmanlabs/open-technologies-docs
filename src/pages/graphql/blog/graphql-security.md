---
title: "The Why of GraphQL Security"
order: 2
page_id:  "how-to-build-an-echo-service-for-graphQL"
warning: false
updated: 2023-02-13
author: Doc Jones
tag: "security, graphql"

---

Many hours, words and efforts are spent expressing the whats and hows of building GraphQL APIs and their protection. I was reminded twice last week of the importance of asking the question why. Why are we building these services and capabilities?

First, it came up in a discussion about Good API Design when a colleague, Arnaud Lauret [(LinkedIn)](https://www.linkedin.com/in/arnaudlauret/), suggested starting the discussion of “Good API Design” with some questions including, “Why are you building this API?”. The second was in a discussion with Postman’s Head of Labs, Shamasis Bhattacharya [(LinkedIn)](https://www.linkedin.com/in/shamasis/). The discussion turned to the topic of GraphQL Security and he posed an important question. “What are the results of not implementing recommended security protections in GraphQL?” In other words, why are we doing this? In this article we consider the vulnerabilities specific to GraphQL and why we are focusing on securing GraphQL.

### Why Does GraphQL Security Matter Now?

GraphQL is in a hyper growth phase. Today just over 10% of enterprises are using GraphQL APIs, but by 2025 that number will grow to over 50%, according to Gartner. At the same time data continues to be a critical resource for all companies along with the preference for using mobile devices. Data and mobile clients are the use cases where the advantages of GraphQL are realized.

There are combinations of API technologies that allow databases, microservices, data warehouses, logs, observability data to combine to create new data sources feeding ever more sophisticated applications. GraphQL is becoming the technology of choice when creating data and services inside an enterprise network referred to as the data layer. All of these new API impletmentations create a sort of super storm of security concerns.

GraphQL is newer than other API technologies like REST or gRPC. It only became community driven and broadly invested in after the GraphQL Foundation was created in 2019. It doesn’t leverage any of the capabilities of HTTP and tooling remains a custom built solution by the mostly large tech companies that have implemented it. There are many startups entering the GraphQL ecosystem, but they are small and solution leaders in distributed systems, cache, and security haven’t yet been determined.

### Security and The GraphQL Specification

GraphQL is defined by a specification that was first developed by Facebook and posted online in 2015. The creation of the GraphQL Foundation in 2019 ushered in the era of the specification being owned by the GraphQL community. There are monthly meetings that anyone can attend and anyone can contribute to the continuing development and new features of the specification. There is a fairly long process to getting new features or changes made to the spec and multiple levels of evaluation to ensure that additions don’t frequently result in breaking changes that would have negative impact on the interoperability that vendors and tools maker rely upon.

The spec focuses on GraphQL’s query language and its runtime. There are a few implementation specific but critical aspects of a well designed API that were omitted. Caching is one and another is authorization and authentication. There are no security features in the GraphQL specification.

NOTE: these security practices don’t replace the standard good practices for securing any API which include authentication, authorization, encryption, input validation, monitoring, logging and tracing. Those are at a higher level of abstraction and outside the scope of this article.

### Examples of GraphQL Vulnerabilities

Below are some examples of what can go wrong with GraphQL when security protections are overlooked or in some cases unknown. This isn’t meant to be an exhaustive list of all the ways that GraphQL can leak data or be overwhelmed by malicious queries. These few examples illustrate where and why data delivered to clients or applications can be exploited through GraphQL APIs.

**Normailizing GraphQL Queries can leak fields**  
Normalizing GraphQL queries refers to the process of converting complex queries into a simpler, standardized form.

Consider this example schema.

```scheme
type User {
  id: ID!
  name: String!
  email: String!
}

type Query {
  user(id: ID!): User
}
```

```scheme
query {
  user(id: 1) {
    name
    email
  }
}
```

A malicious query could include sensitive data in this case, email. When the query is normalized by the GraphQL server email could remain even if the requester isn’t authorized to recieve it.

**GraphQL operation validation**  
The GraphQL vulnerability involving operation validation refers to a security issue that occurs when a GraphQL API fails to properly validate the operations (queries, mutations, and subscriptions) sent by clients.

Consider this example schema.

```scheme
type User {
  id: ID!
  name: String!
  email: String!
}

type Mutation {
  updateUser(id: ID!, name: String, email: String): User
}

type Query {
  user(id: ID!): User
}
```

```scheme
mutation {
  updateUser(id: 1, email: "attacker@example.com") {
    id
    name
    email
  }
}
```

Failing to properly validate the mutation operation may execute the malicious operation and update the email address for the user, potentially compromising the security of the user’s data.

**GraphQL Denial of Service Attacks**  
Denial of Service (DoS) attacks on GraphQL APIs can take many forms. Here are some examples:

1. Resource exhaustion attack: This type of attack involves overwhelming the server with an excessive number of requests, causing it to run out of resources such as memory or CPU. This can lead to a denial of service for legitimate requests.
2. Nested query attack: GraphQL APIs allow clients to specify deeply nested queries, which can lead to server-side performance issues if not properly optimized.

    ```scheme
    query {
      user(id: 1) {
        name
        posts {
          title
          comments {
            text
            author {
              name
              friends {
                name
                friends {
                  name
                  friends {
                    name
                    ...and so on
                  }
                }
              }
            }
          }
        }
      }
    }
    ```

3. Malformed query attack: An attacker can send a malformed query that is difficult or impossible for the server to process. This can cause the server to crash or hang, leading to a denial of service for legitimate requests.

```scheme
query {
  user(id: 1) {
    name
    posts {
      title
      comments(limit: "not a number") {
        text
      }
    }
  }
}
```

An attacker could exploit this by sending a maliciously crafted query that generates an excessive amount of computation on the server, causing the server to crash or hang.

**GraphQL Authorization traversal attack**  
An authorization traversal attack attempts to access resources that are not authorized for access by exploiting the relationships between the objects and fields in the API.

Consider this example schema.

```scheme
type User {
  id: ID!
  name: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  text: String!
}

type Query {
  user(id: ID!): User
}
```

This query traverses the relationship between User and Post and returns the text of a post even though the attacker isn’t authorized to do so.

```scheme
query {
  user(id: 1) {
    posts {
      text
    }
  }
}
```

**GraphQL Proxy/Gateway Injection of arguments into subrequests**  
This type of attack occurs when an attacker is able to inject malicious arguments into the subrequests sent by the proxy/gateway to the backend API, potentially compromising the security of the API. Subrequests frequently are used to pass client requests to other types of APIs, for example REST.

```scheme
query {
  user(id: 1) {
    name
    posts(clientId: "abc") {
      title
      text
    }
  }
}
```

In the example below, the injected argument clientId: "abc; DROP TABLE users;" could potentially cause the backend API to execute the malicious SQL command DROP TABLE users, compromising the data resource of the API.

```scheme
query {
  user(id: 1) {
    name
    posts(clientId: "abc; DROP TABLE users;") {
      title
      text
    }
  }
}
```

### Good Security Practices and GraphQL

GraphQL has benefitted from use in some large enterprises. Today the most common use cases are in social networks, media companies and ecommerce. Lessons learned from Facebook (now Meta), Airbnb, Twitter, Shopify, Yelp, Reddit and Netflix have solidified the basics of good security practices specific to GraphQL. Of course there are security practices that apply to all APIs, but here the focus will be on those specific to GraphQL.

- Remove introspection from a GraphQL API in production.
- Prevent returning error message hinting in responses.
- Ensure validation of Custom Scalars
- Limit Query Depth
- Timeouts for Queries
- Use Query Cost Anaylsis

### Why Do Good Practices Matter?

As stated by Gartner’s analysis more and more enterprises are choosing GraphQL to buildout their data layer, exposing the enterprise’s most valuable resource, their user’s sensitive information and company propriety data. Most security solutions today are custom built by adopters of GraphQL. They build their own because as with any new or newish technologies the tooling is lagging. This is the case with GraphQL. More tooling is definitely needed and the tools to assist with well secured APIs is a critical need as more enterprises provide access to their data via APIs for developers, partners and consumers.

### The Why of a Better Future for GraphQL Security

As GraphQL becomes central to the operations of more enterprises the investment in security it will increase. GraphQL is the vehicle for enabling access to all kinds of data sources inside the networks of enterprises and it’s security is central to the protection of PPI and company proprietary data. There are efforts and experiments underway in established GraphQL vendors and among startups to reduce the attack surface and prevent data loss.

- Compliers for the query language to replace the execution engine
- Apollo and Shopify are adopting Rust for its speed, memory safety and data race protections.
- Startups and OSS projects that are building GraphQL specific security solutions: graphql-armor, Inigo, Escape Technologies security scans, Pangea Cyber: security via APIs
- Adoption of JSON Schema to validate inbound queries, operations, and gateway variables

There is much work to be done, but the good news is that much of that work is underway across the GraphQL ecosystem from open source projects to startups and the enterprises building out their internal data layer.
