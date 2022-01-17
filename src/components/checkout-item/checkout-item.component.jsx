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

import { connect } from 'react-redux';

import {
  removeItem,
  addItem,
  decreaseItem,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItem, addItem, decreaseItem }) => {
  const { id, name, price, quantity, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <Name>{name}</Name>
      <QuantityContainer>
        <Arrow onClick={() => decreaseItem(cartItem)}>&#10094;</Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </QuantityContainer>
      <Price>${price}</Price>
      <RemoveButton onClick={() => removeItem(id)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemId) => dispatch(removeItem(itemId)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
