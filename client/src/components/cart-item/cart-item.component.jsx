import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  Name,
  Price,
} from './cart-item.styles';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="cart-item" />
    <ItemDetailsContainer>
      <Name>{name}</Name>
      <Price>
        {quantity} x ${price}
      </Price>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
