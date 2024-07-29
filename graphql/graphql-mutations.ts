import { gql } from '@apollo/client';

export const ADD_STUDENT = gql`
  mutation AddStudent($id: Number!, $name: String!, $family: String!, age: Number!) {
    addStudent(id: $id, name: $name, family: $family, age: $age) {
      id
      name
      family
      age
    }
  }
`;
