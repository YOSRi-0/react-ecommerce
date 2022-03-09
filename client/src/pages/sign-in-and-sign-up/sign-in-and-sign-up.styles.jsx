import styled from 'styled-components';

export const SignInAndSignUpPageContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 300px;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
`;
