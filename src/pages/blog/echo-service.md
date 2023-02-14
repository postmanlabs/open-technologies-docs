---
title: "How to Build an Echo Service for GraphQL"
order: 1
page_id:  "how-to-build-an-echo-service-for-graphQL"
warning: false
updated: 2023-01-22
author: Meenakshi Dhanani
tag: "echo, graphql"

---

An echo service is a minimalistic API that, like an echo, returns what you request from the server. Echo services for REST, gRPC, and Web Sockets have long been used to test clients in Postman and explore features while learning the fundamentals of each of these protocols. Postman’s GraphQL client v2 currently in pre-release, and what better way to test it than with an Echo GraphQL service? This blog post discusses the procedure for building an echo server for GraphQL, as well as some insights and lessons learned along the way. Check out the [GraphQL Echo collection](https://www.postman.com/postman/workspace/published-postman-templates/collection/63c7d7701bfb72333ca216d4?action=share&creator=13059338) to get started.

### How did we built it?

There were several choices we had to make in order to create a GraphQL API before we even started writing code. We determined that the scope of the project for a basic API would be to handle each of the three operations, namely query, subscription, and mutation. To execute these operations, we’d need a GraphQL engine, therefore we picked GraphQL Yoga - a full featured, simple to set up, performant, and flexible server.
Next, we chose to start with the schema. During this phase, we discussed the fields that may be queried, the types of fields, the input parameters, return types, and so on.

Here’s the schema that we came up with:

```graphql
schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

type Query {
  """
  Says hello to the person. If the person is not specified, says hello to a default person
  """
  hello(person: PersonInput): String!
}
type Person {
  id: ID!
  name: String!
  age: Int
}
input PersonInput {
  name: String!
  age: Int
}
type Mutation {
  createPerson(person: PersonInput!): Person!
}
type Subscription {
  greetings: String!
}
```

Once the schema was defined, we implemented resolver functions to resolve the values for each of the operations’ fields. The yoga library consumes this schema along with the resolvers and launches a GraphQL server.

## Key Learnings

We had some interesting insights and discussions while working on this project. Let’s look at a few of them.

### Input types in GraphQL

In GraphQL, the input keyword is used to describe an object that may be used as an input parameter. Instead of duplicating each individual argument, this object may be reused across different operations. The input type PersonInput for example, has been utilised in both the query and the mutation.

```graphql
type Query {
    hello(person: PersonInput): String!
}
```

```graphql
type Mutation {
    createPerson(person: PersonInput!): Person!
}
```

### Nullability

The GraphQL schema allows you to specify a field or collection of values as non-null. By default, every field is nullable. Using this distinction, many errors caused by null values may be avoided during the parsing step itself.
In the createPerson mutation, the PersonInput parameter is declared as non-null represented by !

```graphql
createPerson(person: PersonInput!): Person!
```

A new person object cannot be created without user input; the non-null check assures that a user cannot perform the mutation if an argument is not given. You will get the following error message:

```graphql
"message": "Field \"createPerson\" argument \"person\" of type \"PersonInput!\" is required, but it was not provided."
```

### Envelop Plugins in Yoga

GraphQL Yoga provides built-in support to add and consume plugins via the Envelop library. We used the useReadinessCheck plugin to add a check if the service is ready to perform.

```graphql
const yoga = createYoga({
  schema,
  plugins: [
    useReadinessCheck({
      endpoint: '/knockknock',
      check: async () => {
        await checkAvailable()
      }
    })
  ]
})
```

The ```knockknock``` endpoint returns a 200 OK if the server is ready.

### Using IDs

In GraphQL, ID is used to uniquely identify objects. Because each GraphQL request is made to a single ‘/graphql’ endpoint, unlike REST, the URL cannot help distinguish between resources or aid in caching. In the echo service, a createPerson mutation returns an object of type Person that includes an id field that uniquely identifies each person.

```graphql
type Person {
    id: ID!
    name: String!
    age: Int
}
```

### Subscription protocols

Subscriptions are events to which you can subscribe. In the above schema, we defined a ```greetings``` event that, when subscribed to, returns a stream of greetings. A web socket connection or server-side events might be utilised to return this stream. Yoga has built-pport for server-side events. We did, however, use a web socket connection for the echo service. More about GraphQL over web sockets is available here.

### Testing

The ```yoga.fetch``` method helped us test the operations we defined. The following is an example of a test we wrote for querying the ```hello``` field.

```graphql
it('should return hello with default name', async () => {
      const response = await yoga.fetch('http://localhost:1337/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{ hello }',
        }),
      })
      assert.ok(response.status === 200, 'Response status should be 200')
      const executionResult = await response.json()
      assert.ok(
        executionResult.data.hello === 'Hello John Doe',
        `Expected 'Hello John Doe' but got ${executionResult.data.hello}`
      )
    })
  ```

Learn more about testing in Yoga [here](https://the-guild.dev/graphql/yoga-server/docs/features/testing).

### Creating your own Envelop plugin

To facilitate onboarding, we wanted to redirect all queries to [https://graphql.postman-echo.com](https://graphql.postman-echo.com) to the Postman GraphQL Echo collection. Each request submitted to the Yoga server is routed through plugins before being resolved. These plugins contain request hooks, request processing hooks, and response hooks. A custom request hook had to be defined in order to redirect a request. The following code snippet defines the custom usePostmanRedirect plugin:

```jsx
function usePostmanRedirect(args: {
    graphqlEndpoint: string
    showLandingPage: boolean
  }): Plugin {
    let urlPattern: URLPattern
    return {
      onRequest({ request, fetchAPI, endResponse, url }) {
        if (!urlPattern) {
          urlPattern = new fetchAPI.URLPattern({
            pathname: args.graphqlEndpoint,
          })
        }
        if (!urlPattern.test(url)) {
          if (
            !args.showLandingPage &&
            request.method === 'GET' &&
            Boolean(request.headers?.get('accept')?.includes('text/html'))
          ) {
            endResponse(
              fetchAPI.Response.redirect(
                'https://www.postman.com/postman/workspace/published-postman-templates/collection/63c7d7701bfb72333ca216d4?action=share&creator=13059338',
                302
              )
            )
            return
          }
          endResponse(
            new fetchAPI.Response('', {
              status: 404,
              statusText: 'Not Found',
            })
          )
        }
      },
    }
  }
  ```

  All in all, developing this service has been a fantastic learning opportunity for us. We’d love for you to test the API with the GraphQL v2 client and share your feedback with us at [https://go.pstmn.io/graphql-feedback](https://go.pstmn.io/graphql-feedback)
  