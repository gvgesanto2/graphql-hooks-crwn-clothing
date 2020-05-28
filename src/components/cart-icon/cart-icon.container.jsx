import React from 'react';

import CartIcon from './cart-icon.component';
import CustomQuery from '../../queries/custom-query/custom-query.component';
import CustomMutation from '../../mutations/custom-mutation/custom-mutation.component';

import { GET_ITEM_COUNT } from '../../graphql/cart/cart.queries';
import { TOGGLE_CART_HIDDEN } from '../../graphql/cart/cart.mutations';

const CartIconContainer = () => {
  return (
    <CustomQuery query={GET_ITEM_COUNT}>
      {
        data => {
          return (
            <CustomMutation mutation={TOGGLE_CART_HIDDEN}>
              {
                toggleCartHidden =>
                  <CartIcon 
                    itemCount={data.itemCount} 
                    toggleCartHidden={toggleCartHidden}
                  />
              }
            </CustomMutation>
          );
        }
      }
    </CustomQuery>
  );
}

export default CartIconContainer;