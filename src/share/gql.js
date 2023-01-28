import { gql } from '@apollo/client';


export const CREATE_LOG = gql`
  mutation CreateLog($name: String!, $password: String!, $comment: String!) {
    createLog(name: $name, password: $password, comment: $comment) {
      id
      name
      comment
      createdAt
      updatedAt
    }
  }
`

export const DELETE_LOG = gql`
  mutation DeleteLog($deleteLogId: String!, $password: String!) {
    deleteLog(id: $deleteLogId, password: $password)
  }
`

export const READ_ALL_LOG = gql`
  query ReadAllLog {
    readAllLog {  
      id
      name
      comment
      createdAt
      updatedAt
    }
  }
`
