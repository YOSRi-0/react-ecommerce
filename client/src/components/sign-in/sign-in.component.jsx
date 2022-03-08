import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  ButtonsContainer,
  FormContainer,
  SignInContainer,
  Title,
} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

const SignIn = () => {
  const [userCredentiels, setUserCredentiels] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentiels;
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentiels({ ...userCredentiels, [name]: value });
  };

  const googleSignInStartHandler = () => {
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>

      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={email}
          name="email"
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          value={password}
          name="password"
          handleChange={handleChange}
          label="password"
          required
        />

        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStartHandler}
            isGoogleSignIn
          >
            {' '}
            Sign in with google{' '}
          </CustomButton>
        </ButtonsContainer>
      </FormContainer>
    </SignInContainer>
  );
};

export default SignIn;
