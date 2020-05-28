import React from 'react';

import CollectionsOverview from './collections-overview.component';

import CustomQuery from '../../queries/custom-query/custom-query.component';

import { GET_COLLECTIONS } from '../../graphql/shop/shop.queries';

const CollectionsOverviewContainer = () => {
  return (
    <CustomQuery query={GET_COLLECTIONS}>
      {
        data =>
          <CollectionsOverview collections={data.collections} />
      }
    </CustomQuery>
  );
}

export default CollectionsOverviewContainer;