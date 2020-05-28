import React from 'react';

import App from './App';

import CustomMutation from './mutations/custom-mutation/custom-mutation.component';
import CustomQuery from './queries/custom-query/custom-query.component';

import { CHECK_USER_SESSION } from './graphql/user/user.mutations';
import { GET_CURRENT_USER } from './graphql/user/user.queries';

const AppContainer = () => {
  return (
    <CustomMutation mutation={CHECK_USER_SESSION}>
      {
        checkUserSession => 
          <CustomQuery query={GET_CURRENT_USER}>
            {
              data =>
                <App 
                  checkUserSession={checkUserSession} 
                  currentUser={data.currentUser}
                />
            }
          </CustomQuery>
      }
    </CustomMutation>
  );
}

export default AppContainer;
