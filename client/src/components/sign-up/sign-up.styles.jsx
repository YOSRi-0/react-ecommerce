import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 768px) {
    width: 300px;
    margin-top: 30px;
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const FormContainer = styled.form`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
