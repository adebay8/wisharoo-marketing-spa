import { gql } from "@apollo/client";

export const CREATE_WAITLIST_USER = gql`
  mutation CreateWaitlistUser(
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    createWaitlistUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
    ) {
      success
    }
  }
`;
