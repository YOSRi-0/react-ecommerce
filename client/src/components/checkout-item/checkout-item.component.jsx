import React from 'react';

import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  QuantityContainer,
  QuantityValue,
  RemoveButton,
} from './checkout-item.styles';

import { useDispatch } from 'react-redux';

import {
  removeItem,
  addItem,
  decreaseItem,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { id, name, price, quantity, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <Name>{name}</Name>
      <QuantityContainer>
        <Arrow onClick={() => dispatch(decreaseItem(cartItem))}>&#10094;</Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={() => dispatch(addItem(cartItem))}>&#10095;</Arrow>
      </QuantityContainer>
      <Price>${price}</Price>
      <RemoveButton onClick={() => dispatch(removeItem(id))}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default React.memo(CheckoutItem);
