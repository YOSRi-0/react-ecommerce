import styled, { css } from 'styled-components';

const ColumnStyles = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.span`
  ${ColumnStyles}
`;
export const QuantityContainer = styled.span`
  padding-left: 20px;
  display: flex;
  ${ColumnStyles}

  @media screen and (max-width: 768px) {
    padding-left: 10px;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;

  @media screen and (max-width: 768px) {
    margin: 0 5px;
  }
`;

export const Price = styled.span`
  ${ColumnStyles}
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
