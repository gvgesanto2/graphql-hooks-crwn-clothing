import React from 'react';

import { default as SignIn } from '../../components/sign-in/sign-in.container';
import { default as SignUp } from '../../components/sign-up/sign-up.container';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
