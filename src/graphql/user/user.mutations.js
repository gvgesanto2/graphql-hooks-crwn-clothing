import { gql } from 'apollo-boost';

export const SIGN_IN_WITH_GOOGLE = gql`
  mutation signInWithGoogle {
    signInWithGoogle @client
  }
`;

export const SIGN_IN_WTH_EMAIL = gql`
  mutation signInWithEmail($email: String!, $password: String!) {
    signInWithEmail(email: $email, password: $password) @client
  }
`;

export const CHECK_USER_SESSION = gql`
  mutation checkUserSession {
    checkUserSession @client
  }
`;

export const SIGN_UP = gql`
  mutation signUp($displayName: String!, $email: String!, $password: String!) {
    signUp(displayName: $displayName, email: $email, password: $password) @client
  }
`;

export const SIGN_OUT = gql`
  mutation signOut {
    signOut @client
  }
`;

