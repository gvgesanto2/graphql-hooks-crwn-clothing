import React from 'react';

import CollectionItem from './collection-item.component';

import CustomMutation from '../../mutations/custom-mutation/custom-mutation.component';

import { ADD_ITEM_TO_CART } from '../../graphql/cart/cart.mutations';

const CollectionItemContainer = props => {
  return (
    <CustomMutation mutation={ADD_ITEM_TO_CART}>
      {
        addCartItem => {
          return (
            <CollectionItem 
              {...props} 
              addItem={item => addCartItem({variables: { item }})} 
            />
          );
        }
      }
    </CustomMutation>
  );
}

export default CollectionItemContainer;