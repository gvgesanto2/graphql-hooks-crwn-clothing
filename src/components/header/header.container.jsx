import React from 'react';

import Header from './header.component';

import CustomQuery from '../../queries/custom-query/custom-query.component';

import { GET_CURRENT_USER } from '../../graphql/user/user.queries';
import { GET_CART_HIDDEN } from '../../graphql/cart/cart.queries';
import CustomMutation from '../../mutations/custom-mutation/custom-mutation.component';
import { SIGN_OUT } from '../../graphql/user/user.mutations';

const HeaderContainer = () => {
  return (
    <CustomQuery query={GET_CART_HIDDEN}>
      {
        cartData => 
          <CustomQuery query={GET_CURRENT_USER}>
            {
              userData =>
                <CustomMutation mutation={SIGN_OUT}>
                  {
                    signOut =>
                      <Header 
                        hidden={cartData.cartHidden} 
                        currentUser={userData.currentUser}
                        signOut={signOut}
                      />
                  }
                </CustomMutation>
            }
          </CustomQuery>
      }
    </CustomQuery>
  );
}

export default HeaderContainer;