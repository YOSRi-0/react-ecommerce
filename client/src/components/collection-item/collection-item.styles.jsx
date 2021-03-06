import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 45vw;
    height: 250px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 768px) {
      top: 155px;
      opacity: 0.9;
      display: block;
    }
  }

  &:hover button {
    opacity: 0.85;
    display: flex;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ imageUrl }) => imageUrl});
  margin-bottom: 5px;
  transition: all 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  margin-bottom: 15px;
`;
