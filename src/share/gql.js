import { gql } from '@apollo/client';


export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email)
  }
`

export const READ_ALL_USER = gql`
  query ReadAllUser {
    readAllUser {
      id,
      name,
      email
    }
  }
`