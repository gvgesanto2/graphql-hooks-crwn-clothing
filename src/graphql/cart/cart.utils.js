import { 
  GET_CART_HIDDEN,
  GET_CART_ITEMS, 
  GET_ITEM_COUNT,
  GET_TOTAL_PRICE,
} from './cart.queries';

import { modifyDataFromCache } from '../graphql.utils';

// functions related to the cartItems array manipulation

export const findCartItem = (cartItems, itemToFind) => {
  return cartItems.find(cartItem => 
    cartItem.id === itemToFind.id
  );
}

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = findCartItem(cartItems, cartItemToAdd);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => 
    cartItem.id !== cartItemToClear.id
  );
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = findCartItem(cartItems, cartItemToRemove);

  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const getCartItemCount = cartItems => {
  return cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity,
    0
  );
}

export const getCartTotalPrice = cartItems => {
  return cartItems.reduce((accQuantity, cartItem) => {
    return accQuantity + cartItem.quantity * cartItem.price;
  }, 0);
}
  
// functions related to the manipulation (modification) of the 
// cartItems value in the Apollo cache

const updateCartItemsRelatedValues = (cache, newCartItems) => {
  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: { itemCount: getCartItemCount(newCartItems) }
  });

  cache.writeQuery({
    query: GET_TOTAL_PRICE,
    data: { totalPrice: getCartTotalPrice(newCartItems) }
  });
}

export const modifyCartItems = ({ cache, calcNewCartItems, itemToModify }) => {
  const newCartItems = modifyDataFromCache({
    cache,
    query: GET_CART_ITEMS,
    calcNewData: cartItems => calcNewCartItems(cartItems, itemToModify),
    dataCacheKey: "cartItems"
  });

  updateCartItemsRelatedValues(cache, newCartItems);

  return newCartItems;
}

export const modifyCartHidden = ({ cache, calcNewCartHidden }) => {
  return modifyDataFromCache({
    cache,
    query: GET_CART_HIDDEN,
    calcNewData: cartHidden => !cartHidden,
    dataCacheKey: "cartHidden"
  });
}