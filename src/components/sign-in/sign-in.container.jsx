import React from 'react';

import SignIn from './sign-in.component';

import CustomMutation from '../../mutations/custom-mutation/custom-mutation.component';

import { SIGN_IN_WITH_GOOGLE, SIGN_IN_WTH_EMAIL } from '../../graphql/user/user.mutations';

const SignInContainer = () => {
  return (
    <CustomMutation mutation={SIGN_IN_WITH_GOOGLE}>
      {
        signInWithGoogle =>
          <CustomMutation mutation={SIGN_IN_WTH_EMAIL}>
            {
              signInWithEmail =>
                <SignIn 
                  signInWithGoogle={signInWithGoogle} 
                  signInWithEmail={credentials => signInWithEmail({ variables: credentials})}
                />
            }
          </CustomMutation>
      }
    </CustomMutation>
  );
}

export default SignInContainer;