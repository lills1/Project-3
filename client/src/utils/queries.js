import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      tickets {
        _id
        ticketText
        createdAt
      }
    }
  }
`;

export const QUERY_TICKETS = gql`
  query getTICKETS {
    tickets {
      _id
      ticketText
      ticketDepartment
      ticketEmail
      ticketName
      ticketPhone
      ticketTeam
      ticketAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_TICKET = gql`
  query getSingleTicket($ticketId: ID!) {
    ticket(ticketId: $ticketId) {
      _id
      ticketText
      ticketDepartment
      ticketTeam
      ticketEmail
      ticketPhone
      ticketAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      tickets {
        _id
        ticketText
        ticketAuthor
        createdAt
        ticketStatus
      }
    }
  }
`;
