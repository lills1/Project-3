import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $department:String!, $team:String!) {
    addUser(username: $username, email: $email, password: $password, department:$department , team:$team) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TICKET = gql`
  mutation addTicket($ticketText: String!, $ticketTeam:String!, $ticketPhone:String!, $ticketDepartment:String!, $ticketEmail:String!, $ticketName:String!, $ticketStatus:String) {
    addTicket(ticketText: $ticketText, ticketTeam: $ticketTeam, ticketPhone:$ticketPhone, ticketDepartment:$ticketDepartment, ticketEmail:$ticketEmail, ticketName:$ticketName, ticketStatus:$ticketStatus) {
      _id
      ticketText
      ticketTeam
      ticketPhone
      ticketDepartment
      ticketEmail
      ticketName
      ticketAuthor
      ticketStatus
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($ticketId: ID!, $commentText: String!) {
    addComment(ticketId: $ticketId, commentText: $commentText) {
      _id
      ticketText
      ticketDepartment
      ticketPhone
      ticketEmail
      ticketTeam
      ticketAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_TICKET = gql`
mutation removeTicket($ticketId:ID!){
  removeTicket(ticketId:$ticketId){
    _id
    ticketText
  }
}
`
