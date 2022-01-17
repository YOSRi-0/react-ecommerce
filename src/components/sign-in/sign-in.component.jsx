import React from 'react';

import {
  ButtonsContainer,
  FormContainer,
  SignInContainer,
  Title,
} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>

        <FormContainer onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            handleChange={this.handleChange}
            label="password"
            required
          />

          <ButtonsContainer>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign in with google{' '}
            </CustomButton>
          </ButtonsContainer>
        </FormContainer>
      </SignInContainer>
    );
  }
}

export default SignIn;
