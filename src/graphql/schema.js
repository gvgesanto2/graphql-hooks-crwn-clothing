import { gql } from 'apollo-boost';

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Section {
    id: Int!
    title: String!
    imageUrl: String!
    linkUrl: String!
    size: String
  }

  extend type DateTime {
    nanoseconds: Int!
    seconds: Int!
  }
  
  extend type User {
    id: ID!
    displayName: String!
    email: String!
    createdAt: DateTime!
  }

  extend type Query {
    sections: [Section]!
  }

  extend type Mutation {
    toggleCartHidden: Boolean!
    addCartItem(item: Item!): [Item]!
    clearCartItem(item: Item!): [Item]!
    removeCartItem(item: Item!): [Item]!
    signInWithGoogle: User
    signInWithEmail(email: String!, password: String!): User
    signUp(displayName: String!, email: String!, password: String!): User
    checkUserSession: User
    signOut: Boolean!
  }
`;

export default typeDefs;