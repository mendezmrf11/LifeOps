import { gql } from '@apollo/client';

export const VALIDATE_PASSWORD = gql`query LoginUser($email: String!, $password: String!) {
  Users(where: { email: { _eq: $email }, password: { _eq: $password } }) {
    username
  }
}`;