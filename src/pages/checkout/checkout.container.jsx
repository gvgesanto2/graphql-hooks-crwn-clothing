import React from 'react';

import CheckoutPage from './checkout.component';

import CustomQuery from '../../queries/custom-query/custom-query.component';

import { 
  GET_TOTAL_PRICE, 
  GET_CART_ITEMS 
} from '../../graphql/cart/cart.queries';

const CheckoutPageContainer = () => {
  return (
    <CustomQuery query={GET_TOTAL_PRICE}>
      {
        cartPriceData => 
          <CustomQuery query={GET_CART_ITEMS}>
            {
              cartItemsData =>
                <CheckoutPage 
                  total={cartPriceData.totalPrice} 
                  cartItems={cartItemsData.cartItems}
                />
            }
          </CustomQuery>
      }
    </CustomQuery>
  );
}

export default CheckoutPageContainer;



