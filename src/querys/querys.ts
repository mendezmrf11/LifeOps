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
`;

export const GET_DAILY_HABITS = gql`query GetLastFiveDates($username: String!, $date: timestampz!) {
  HabitLogs(
    where: {
      rsHabit: {
        rsUser: {
          username: { _eq: $username }
        }
      }
      date: { _eq: $date}
    }
    order_by: { date: desc }
    distinct_on: date
    limit: 5
  ) {
    date
    completed
    description
    rsHabit {
      name
    }
  }
}
`;
