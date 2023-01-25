 const IntrospectionCode = `
{
  __schema {                     
   types {                    
      name                     
    }                     
  }  
 }
`

 const QueryCode = `
type Query { 
    users: [User]
    user(id: ID!): User
  }
`

 const MutationCode = `
type Mutation {
    createUser(name: String!, email: String!): User  
    updateUser(id: ID!, name: String, email: String): User  
    deleteUser(id: ID!): User 
  }
`
 const SubscriptionCode = `
{
  subscription onFilmAdded(id: ID!, filmID: ID) {
    filmAdded(id: $id, filmID: $filmID) {
      title
    }
  }
}
`
 const LiveQueryCode = `
// Subscribe to real-time updates on the current temperature in a city
const query = 
  subscription {                    
temperature(city: "San Francisco")                    
  }
;

// Create a function to handle updates from the server
const handleUpdate = (temperature) => {                   
  console.log(The temperature in San Francisco is now {temperature}°F);                   
};   
// Send the subscription request to the server and pass the update handler function              
client.subscribe({ query, handleUpdate });
`
 const CustomScalarCode = `
type Cake {
    id: ID!
    name: String!
    price: Float
    available: Boolean!
    hasFrosting: Boolean!
    hasFilling: Boolean!
    hasToppingOption: Boolean!
    toppingKind: String
    whenCreated: DateTime!
    lastUpdated: DateTime!
    }
`

module.exports = {
    IntrospectionCode: IntrospectionCode,
    QueryCode: QueryCode,
    MutationCode: MutationCode,
    SubscriptionCode: SubscriptionCode,
    LiveQueryCode: LiveQueryCode,
    CustomScalarCode: CustomScalarCode
}