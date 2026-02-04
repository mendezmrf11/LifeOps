import { gql } from '@apollo/client';

export const VALIDATE_PASSWORD = gql`query LoginUser($email: String!, $password: String!) {
  Users(where: { email: { _eq: $email }, password: { _eq: $password } }) {
    username
  }
}`;

export const GET_LAST_FIVE_DATES = gql`query GetLastFiveDates($username: String!) {
  HabitLogs(
    where: {
      rsHabit: {
        rsUser: {
          username: { _eq: $username }
        }
      }
    }
    order_by: { date: desc }
    distinct_on: date
    limit: 5
  ) {
    date
  }
}
`
