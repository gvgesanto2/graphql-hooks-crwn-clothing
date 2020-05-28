import { gql } from 'apollo-boost';

export const GET_SECTIONS = gql`
  {
    sections @client {
      id
      title 
      imageUrl 
      linkUrl
      size
    }
  }
`;