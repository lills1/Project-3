const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    department: String
    team:String
    tickets: [Ticket!]
  }

  type Ticket {
    _id: ID
    ticketText: String
    ticketTeam: String
    ticketPhone:String
    ticketDepartment:String
    ticketName:String
    ticketEmail:String
    ticketAuthor: String
    createdAt: String
    ticketStatus:String
    comments: [Comment!]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    tickets(username: String): [Ticket]
    ticket(ticketId: ID!): Ticket
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, department: String!, team: String!): Auth
    login(email: String!, password: String!): Auth
    addTicket(ticketText: String!, ticketTeam:String!, ticketPhone:String!, ticketDepartment:String!, ticketName:String!, ticketEmail:String!, ticketStatus:String): Ticket
    addComment(ticketId: ID!, commentText: String!): Ticket
    removeTicket(ticketId: ID!): Ticket
    removeComment(ticketId: ID!, commentId: ID!): Ticket
  }
`;

module.exports = typeDefs;
