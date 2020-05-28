import React from 'react';

import Directory from './directory.component';

import CustomQuery from '../../queries/custom-query/custom-query.component';

import { GET_SECTIONS } from '../../graphql/directory/directory.queries';

const DirectoryContainer = () => {
  return (
    <CustomQuery query={GET_SECTIONS}>
      {
        data =>
          <Directory sections={data.sections} />
      }
    </CustomQuery>
  );
}

export default DirectoryContainer;

