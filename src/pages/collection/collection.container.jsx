import React from 'react';

import CollectionPage from './collection.component';

import CustomQuery from '../../queries/custom-query/custom-query.component';

import { GET_COLLECTIONS_BY_TITLE } from '../../graphql/shop/shop.queries';

const CollectionPageContainer = ({ match }) => {
  const title = match.params.collectionId;
  return (
    <CustomQuery query={GET_COLLECTIONS_BY_TITLE} variables={{ title }}>
      {
        data => 
          <CollectionPage collection={data.getCollectionsByTitle} />
      }
    </CustomQuery>
  );
}

export default CollectionPageContainer;