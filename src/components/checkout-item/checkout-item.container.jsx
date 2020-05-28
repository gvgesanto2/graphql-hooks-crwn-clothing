import React from 'react';

import CheckoutItem from './checkout-item.component';

import CustomMutation from '../../mutations/custom-mutation/custom-mutation.component';

import { 
  ADD_ITEM_TO_CART, 
  CLEAR_ITEM_FROM_CART, 
  REMOVE_ITEM_FROM_CART 
} from '../../graphql/cart/cart.mutations';

const modifyCartItems = modifyFunction => item => modifyFunction({ variables: { item }});

const CheckoutItemContainer = ({ cartItem }) => {
  return (
    <CustomMutation mutation={ADD_ITEM_TO_CART}>
      {
        addCartItem =>
          <CustomMutation mutation={CLEAR_ITEM_FROM_CART}>
            {
              clearCartItem => 
                <CustomMutation mutation={REMOVE_ITEM_FROM_CART}>
                  {
                    removeCartItem => {
                      return (
                        <CheckoutItem 
                          cartItem={cartItem}
                          addItem={modifyCartItems(addCartItem)}
                          clearItem={modifyCartItems(clearCartItem)}
                          removeItem={modifyCartItems(removeCartItem)}
                        />
                      );
                    }
                  }
                </CustomMutation>
            }
          </CustomMutation>
      }
    </CustomMutation>
  );
}

export default CheckoutItemContainer;
