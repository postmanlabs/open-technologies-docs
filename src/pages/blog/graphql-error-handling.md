---
title: "Error Handling in GraphQL"
order: 2
page_id:  "error-handling-in-graphql"
warning: false
updated: 2023-03-15
author: Meenakshi Dhanani
tag: "errors, graphql"

---

Error handling is an essential concept for any programming language. It helps share specific information about a failure or how to recover. For most APIs, error handling is almost synonymous with HTTP codes. 401 - Unauthorized, 200 - OK. However, a GraphQL server, on the contrary, returns a 200 OK despite an error in the response. It might seem ambiguous, but in this post, we'll delve deeper into why error handling in GraphQL is a bit different, the potential challenges, and some ways to tackle them.

## 200 is not OK

The GraphQL specification deliberately does not mention HTTP since GraphQL is transport agnostic. The implementors of the specification can choose the transport mechanism to implement the specification. Hence, GraphQL servers do not depend on HTTP status codes for communicating errors. The example below shows a query.

```graphql
{
  customer(id: "123") {
    id
    name
    age
  }
}
```

The following is an example of an error response for that query:

```graphql
{
  "errors": [
    {
      "message": "Cannot query field 'age' on type 'Customer'.",
      "locations": [
        {
          "line": 5,
          "column": 5
        }
      ],
      "path": [
        "customer",
        "age"
      ]
    }
  ],
  "data": {
    "customer": {
      "id": "123",
      "name": "John Doe"
    }
  }
}
```

In this example, the query requests the ID, name, and age fields for a customer with the ID "123". However, the GraphQL server returns an error indicating that the "age" field cannot be queried on the "Customer" type. The error includes the message "Cannot query field 'age' on type 'Customer'," the location of the error in the query (line 5, column 5), and the path to the field that caused the error ("customer" -> "age").

Despite the error, the response still includes the customer's ID and name fields, which were able to be resolved successfully by the server. This allows the client to still receive valuable data from the server, even though part of the query failed.

## Errors - as described by the GraphQL specification

[The GraphQL specification](https://spec.graphql.org/draft/#sec-Errors) defines how errors should be handled and returned in response to client requests. When a GraphQL server encounters an error during the processing of a query, it is required to return a response that includes the "errors" field, an array of one or more error objects.

Each error object in the "errors" array contains the following fields:

- **message**: A string that describes the error in human-readable form.
- **locations (optional)**: An array of source locations within the GraphQL query where the error occurred. This is used to help clients pinpoint the location of the error within the query.
- **path (optional)**: An array of field names and array indices that indicate which part of the query caused the error. This is used to help clients understand which part of the query is responsible for the error.
- **extensions (optional)**: A map of additional error information that is specific to the GraphQL server implementation. This can be used to provide more detailed information about the error or to provide links to relevant documentation or resources.

In addition to including the "errors" field in the response, the GraphQL server should also return any valid data that could be resolved before the error occurred. This allows clients to receive valuable data from the server still, even if some parts of the query fail.
Two types of errors can occur: top-level errors and field-level errors.

### Top-level errors

Top-level errors occur during the execution of a GraphQL operation that prevents the operation from being completed. These errors can occur for various reasons, such as a network error, a server error, or an authentication error. An example of a top-level error that could occur for a query requesting customer details in GraphQL:

```graphql
{
  customer(id: "123") {
    id
    name
    address
  }
}
```

The following is an example of an error response for that query:

```graphql
{
  "errors": [
    {
      "message": "Not authorized to access customer data",
      "extensions": {
        "code": "AUTHORIZATION_ERROR"
      }
    }
  ]
}
```

The error includes the message "Not authorized to access customer data" and an "extensions" field that provides additional information about the error, in this case indicating that the error was due to an authorization failure.

### Field level errors

On the other hand, field-level errors refer to errors that occur during the execution of a single field in a GraphQL query or mutation. These errors can occur for various reasons, such as invalid input, missing data, or server error. Field-level errors are typically returned as part of the "errors" array in the GraphQL response, along with any valid data that could be resolved before the error occurred. The example mentioned above that returns an error for a customer's age is a field-level error.

## GraphQL over HTTP specification

[The GraphQL over HTTP specification](https://graphql.github.io/graphql-over-http/draft/) provides guidance on how GraphQL could be used over HTTP. It also describes how the status codes need to be returned for different requests according to the specified Content-Type. For instance, this specification allows the use of 4xx or 5xx status codes for failed requests where the response uses the application/json media type, but it is strongly discouraged. To use 4xx and 5xx status codes, please use the application/graphql-response+json media type.

## Challenges GraphQL errors pose

Working with GraphQL errors can present some challenges, including:

### Difficult to parse

It can be difficult to parse GraphQL errors is that queries can be very complex and contain multiple levels of nesting. This complexity can make it challenging to identify the specific cause of an error, as the error may be caused by a field deep within the query.

### No prioritization

Prioritizing GraphQL errors can also be challenging because there may be multiple errors within a single query, and each error may have a different level of severity. For example, one error may be a syntax error that prevents the query from executing at all, while another error may be a missing field that results in incomplete data being returned.

### Exposing sensitive information

GraphQL error messages can contain sensitive information such as database structure, server configuration, and user data. If these error messages are not properly handled, they can be exposed to attackers and used to gain unauthorized access to the system.

## Recommendations for GraphQL error handling

Although there is no single correct answer for dealing with errors while working with GraphQL APIs, we have put together a list of some of the most widely used ways.

### Improve traceability

Shopify provides a request ID feature that can help trace errors for GraphQL APIs. When a GraphQL request is made to the Shopify API, a unique request ID is generated and returned as part of the response. This request ID can be used to trace the entire request lifecycle, from the initial request to the final response.

By including the request ID in error messages, Shopify enables developers to trace the source of errors and investigate the underlying issues. For example, if a GraphQL query results in an error, the error message will include the request ID. Developers can use this request ID to search through logs and other debugging tools to identify the root cause of the error.
The following is an example of an error returned by the Shopify API:

```graphql
{
  "errors": [
    {
      "message": "Internal error. Looks like something went wrong on our end.
        Request ID: 1b355a21-7117-44c5-8d8b-8948082f40a8 (include this in support requests).",
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR"
      }
    }
  ]
}

```

### Mask errors

GraphQL APIs use a technique called [error masking](https://the-guild.dev/graphql/yoga-server/docs/features/error-masking) to hide sensitive information in error responses. This technique involves replacing specific error messages with generic messages that do not provide any information about the underlying issue.
For example, if a user tries to access a resource that they do not have permission to access, the error message returned by the API might be something like "You do not have permission to access this resource." However, this error message could potentially provide information about the resource structure or other sensitive details.
By using error masking, the API can provide a better user experience while also ensuring that sensitive information is not inadvertently exposed in error messages. This is an important security consideration for any GraphQL API, as error messages can potentially provide valuable information to attackers.

The GraphQL Yoga server automatically masks errors to prevent leakage of information in the following manner:

```graphql
{
  "errors": [
    {
      "message": "Unexpected error.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["greeting"]
    }
  ],
  "data": null
}
```

The above response is for a query that requests customer details. Yoga also allows unmasking errors in development mode to enhance the debugging without compromising security.

### Use error codes

GraphQL clients can define their own error codes and extensions to handle errors in a more application-specific way. These error codes can be used by clients to handle errors in a more granular way, and to provide more helpful error messages to users. The [Contentful GraphQL API](https://www.contentful.com/developers/docs/references/graphql/#/reference/graphql-errors/graphql-errors-explained), uses error codes for common error types. The following is an example of a Contentful error:

```graphql
{
  data: {
    ...
  },
  errors: [{
    message: 'Query execution error. Query too complex to be executed in allocated resources', // Human readable error message
    locations: [{line: 4, column: 17}],
    path: ['too', 'many', 'db_ops'],
    extensions: {
      contentful: {
        code: 'RESOURCES_EXHAUSTED', // text error code
        requestId: 'xxx' // id of current request
      }
    }
  }]
}
```

These codes are intended to provide more detailed information about the error, and to help clients handle errors in a more consistent way.

### Treat errors as data

GraphQL has a powerful type system and that can be capitalized on while working with errors. Rather than returning a generic error message, GraphQL APIs can return error metadata as part of the schema itself. [Gitlab GraphQL API](https://docs.gitlab.com/ee/development/api_graphql_styleguide.html#errors-in-mutations) uses the errors as data approach to communicate possible errors for mutations. This is helpful especially if the consumer of the API is a developer and the errors are actionable. The consumer can choose to handle the errors they want. For example, while updating a Pull Request, the result can be modelled as a PullRequest result or a UserError. The UserError could contain more details about the permissions of the user with additional metadata that may make handling the response easier. Often, union types are used to represent the errors as data. A [great post](https://sachee.medium.com/200-ok-error-handling-in-graphql-7ec869aec9bc) by Sasha Solomon explains this concept further.

### Setup logging and monitoring

Logging and monitoring are important aspects of error handling. Logging should capture detailed information about the error, including the error message, the query or mutation that caused the error, and any relevant metadata. Monitoring is also crucial for GraphQL APIs. Monitoring tools can help developers track the performance and availability of the API, as well as detect and diagnose errors.

### Use GraphQL middleware

Logging, monitoring, and error handling logic may be duplicated across resolvers, making maintenance more difficult, especially as the project expands. If every resolver manages errors differently, it could lead to an ambiguous experience for the user of the GraphQL API. Hence, it's essential to handle such situations consistently. We can do so by using [GraphQL Middleware](https://www.prisma.io/blog/graphql-middleware-zie3iphithxy). It enables us to encapsulate that common error handling code in middleware. The middleware acts as an interceptor, allowing us to perform actions before or after the requested field is resolved. It can also modify the response sent to the client.
You can inject the middleware into a GraphQL server like [Yoga](https://the-guild.dev/graphql/yoga-server/docs/migration/migration-from-yoga-v1#middlewares). In the following example, the logError method is the middleware that runs after the product and store fields are resolved. The latest Yoga version consumes the middleware as a plugin.

```graphql
import { useGraphQLMiddleware } from '@envelop/graphql-middleware'

const logError = async (resolve, parent, args, context, info) => {
   try {
    return await resolve(parent, args, context, info)
  } catch (err) {
      console.log(err, context, info);

      // rethrow the error
      throw err;
  }
}

const errorHandler = {
  Query: {
    product: logError,
    store: logError
  }
}

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  plugins: [useGraphQLMiddleware([errorHandler])]
})

const server = createServer(yoga)
server.listen(4000)
```

## Conclusion

Building and maintaining a high-quality GraphQL API requires considerable consideration of error handling, logging, and monitoring. A mix of error handling strategies, in addition to the ones listed above, can lead to a reliable, performant, and user-friendly API.
