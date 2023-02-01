const Data = [
    {
      id: "1",
      title: "Schema",
      description:
        "A GraphQL schema is a list of object types that define all of the data available to clients of the API.",
      tag: ["graphql", "api"],
      example: [""],
      code: "",
    },
    {
      id: "2",
      title: "Introspection",
      description:
        "Introspection is the capability of returning parts of a schema or the full schema from a GraphQL API using a special client query.",
      tag: ["api"],
      example:
        ['Sending a query to a GraphQL API using the "__schema" will return type information about a named object or all of the types in a GraphQL schema.'],
      code: "{\n __schema {\n types {  \n   name \n    }         \n  }  \n}",
    },
    {
      id: "3",
      title: "Types",
      description:
        "Types describe the objects that are part of your GraphQL schema. There are eight types defined by the GraphQL specification.",
      tag: ["graphql"],
      example: [""],
    },
    {
      id: "4",
      title: "Query",
      description:
        "A query is a read-only operation. It enables the user to request specific fields from objects and receive only those fields, avoiding over- or under-fetching. *Cover both schema description and client description.*",
      tag:["graphql", "api", "operation", "type", "schema", "client"],
      example: ["Client Query"],
      code: "type Query { \n  users: [User]\n  user(id: ID!): User\n }",
    },
    {
      id: "5",
      title: "Mutation",
      description:
        "A mutation is a write operation followed by a fetch. It enables the user to mutate (add, update, or delete) specified fields and then query the modified value on the object returned. ",
      tag: ["operation"],
      example: ["schema"],
      code: "type Mutation {\ncreateUser(name: String!, email:   String!): User \nupdateUser(id: ID!, name: String,   email: String): User \ndeleteUser(id: ID!): User \n }",
    },
    {
      id: "6",
      title: "Subscription",
      description:
        "A subscription is a type of operation that allows a client to receive real-time updates from a server by establishing a long-running connection. When the server's data changes, the server can push updates to the subscribed client through this connection.",
      tag:["graphql", "api"],
      example: [""],
      code: "subscription onFilmAdded(id: ID!, filmID: ID) {\n filmAdded(id: $id, filmID: $filmID) {\n  title \n   }\n  }\n}",
    },
    {
      id: "7",
      title: "Live Queries",
      description:
        "GraphQL live queries allow a client to subscribe to real-time updates from a GraphQL server. Instead of making a request to the server and receiving a one-time response, the client can establish a long-running connection with the server and receive updates in real time as they happen.",
      tag: ["subscription"],
      example: [""],
      code: '// Subscribe to real-time updates on the current temperature in a city \nconst query = `\n subscription  {    \n  temperature(city: "San Francisco") \n };\n// Create a function to handle updates from the server \nconst handleUpdate = (temperature) => { \nconsole.log(`The temperature in  San Francisco is now ${temperature}°F`); \n };   \n// Send the subscription request to the server and pass the update handler function  \nclient.subscribe({ query, handleUpdate });\n `      ',
    },
    {
      id: "8",
      title: "Scalar Type",
      description:
        "GraphQL specifies a list of scalar types to identify the data structure of an object field. The list of built-in scalars is given in the Example below.",
      tag: ["schema"],
      example:
        ["- Int: A signed 32-bit integer. <br/> - Float: A signed double-precision floating-point value. <br/>- String: A UTF-8 character sequence. <br/> - Boolean: true or false.<br/> - ID: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. The ID type is serialized in the same way as a String; however, defining it as an ID signifies that it is not intended to be human‐readable.",]
    },
    {
      id: "9",
      title: "Custom Scalar Type",
      description:
        "The most common custom scalar type in GraphQL schemas is DateTime, because it isn't a built-in scalar or described in the specification. Custom Scalars can also be used to define other units of measure or whatever is needed by a given implementation.",
      tag: ["schema", "scalars", "type"],
      example: [ "schema DateTime"],
      code: "type Cake { \n  id: ID!\n  name: String!\n  price: Float\n  available: Boolean!\n  hasFrosting: Boolean!\n  hasFilling: Boolean!\n  hasToppingOption: Boolean!\n  toppingKind: String\n  whenCreated: DateTime!\n  lastUpdated: DateTime!\n } ",
    },
    {
      id: "10",
      title: "Nullability",
      description:
        "Nullability in GraphQL is the designation of a field or list as returning a null value or not. Fields that are nonnull or where null is not an acceptable response are identified with an exclamation mark.",
      tag: ["nonnull", "null"],
      example: ["Valid uses of the \"!\" to indicate that a field or list can't be null applied to fields and lists<br/><br/> String! - returns a string that can't be null<br/> [Words] - returns a list and can return a null list or null members. <br/>[Words!] - returns a list that can be null but its members can't be<br/> [Words]!- returns a list that can't be null but its members can return null <br/>[Words!]!- returns a list that can't be null and can't have null members"],
      code: "",
    }
  ]
  
  export default Data