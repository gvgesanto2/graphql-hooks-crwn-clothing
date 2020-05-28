import { 
  addItemToCart, 
  clearItemFromCart, 
  removeItemFromCart,
  modifyCartItems,
  modifyCartHidden
} from './cart.utils';

const cartResolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }) => {
      return modifyCartHidden({
        cache,
        calcNewCartHidden: cartHidden => !cartHidden,  
      });
    },
    addCartItem: (_root, { item }, { cache }) => {
      return modifyCartItems({
        cache,
        calcNewCartItems: addItemToCart,
        itemToModify: item
      });
    },
    clearCartItem: (_root, { item }, { cache }) => {
      return modifyCartItems({
        cache,
        calcNewCartItems: clearItemFromCart,
        itemToModify: item
      });
    },
    removeCartItem: (_root, { item }, { cache }) => {
      return modifyCartItems({
        cache, 
        calcNewCartItems: removeItemFromCart,
        itemToModify: item
      });
    }
  }
};

export default cartResolvers;