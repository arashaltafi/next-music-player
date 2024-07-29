import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      message
      token
    }
  }
`;

export const GET_HELLO_WORLD = gql`
  query helloWorld {
    hello
  }
`;

export const GET_USERS = gql`
  query getUsers {
    users {
      _id
      name
      family
      age
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: Int!) {
    user(id: $id) {
      _id
      name
      family
      age
    }
  }
`;

export const GET_STUDENTS = gql`
  query getStudents {
    students(page: 1, page_size: 5) {
      id
      name
      family
      age
    }
  }
`;
