import React from 'react';

import SignUp from './sign-up.component';

import CustomMutation from '../../mutations/custom-mutation/custom-mutation.component';

import { SIGN_UP } from '../../graphql/user/user.mutations';

const SignInContainer = () => {
  return (
    <CustomMutation mutation={SIGN_UP}>
      {
        signUp =>
          <SignUp 
            signUp={(displayName, credentials) => signUp({ variables: { displayName, ...credentials }})} 
          />   
      }
    </CustomMutation>
  );
}

export default SignInContainer;