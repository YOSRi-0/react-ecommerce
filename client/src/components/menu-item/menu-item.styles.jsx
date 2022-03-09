import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${({ imageUrl }) => imageUrl});
`;

export const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  opacity: 0.7;
  background-color: #fff;
  position: absolute;
  transition: all 0.3s ease-in-out;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  text-transform: uppercase;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
    height: ${({ size }) => (size === 'large' ? '380px' : '240px')};


  @media screen and (max-width: 768px) {
    min-width: 40%;
    height: 200px
  }

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Content} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;

  @media screen and (max-width: 768px) {
    margin-right: 0
  }
  }

  &:last-child {
    margin-left: 7.5px;


  }
  }`;
