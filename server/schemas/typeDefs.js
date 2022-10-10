const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    savedCards: [Card]!
    attack: Int
    defense: Int
    health: Int
  }

  type Card {
    _id: ID!
    name: String!
    description: String!
    modifier: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Bosses {
    name: String!
    attack: Int!
    defense: Int!
  }
  input CardInput {
    name: String!
    description: String!
    modifier: String!
  }
  type Query {
    me: User
    bosses: [Bosses]!
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addCard(userId: ID!, card: CardInput!): User
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
