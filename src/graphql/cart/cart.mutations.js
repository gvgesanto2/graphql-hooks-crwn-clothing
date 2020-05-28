import { gql } from 'apollo-boost';

export const TOGGLE_CART_HIDDEN = gql`
  mutation toggleCartHidden {
    toggleCartHidden @client
  }
`;

export const ADD_ITEM_TO_CART = gql`
  mutation addCartItem($item: Item!) {
    addCartItem(item: $item) @client
  }
`;

export const CLEAR_ITEM_FROM_CART = gql`
  mutation clearCartItem($item: Item!) {
    clearCartItem(item: $item) @client
  }
`;

export const REMOVE_ITEM_FROM_CART = gql`
  mutation removeCartItem($item: Item!) {
    removeCartItem(item: $item) @client
  }
`;