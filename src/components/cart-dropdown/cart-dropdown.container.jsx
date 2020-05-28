import React from 'react';

import CartDropdown from './cart-dropdown.component';

import CustomMutation from '../../mutations/custom-mutation/custom-mutation.component';
import CustomQuery from '../../queries/custom-query/custom-query.component';

import { TOGGLE_CART_HIDDEN } from '../../graphql/cart/cart.mutations';
import { GET_CART_ITEMS } from '../../graphql/cart/cart.queries';

const CartDropdownContainer = () => {
  return (
    <CustomMutation mutation={TOGGLE_CART_HIDDEN}>
      {
        toggleCartHidden => {
          return (
            <CustomQuery query={GET_CART_ITEMS} >
              {
                data =>
                  <CartDropdown 
                    cartItems={data.cartItems}
                    toggleCartHidden={toggleCartHidden} 
                  />
              }
            </CustomQuery>
          );
        }
      }
    </CustomMutation>
  );
}

export default CartDropdownContainer;