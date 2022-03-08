import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from './cart-icon.styles';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);

  const dispatch = useDispatch();

  return (
    <CartIconContainer>
      <ShoppingIconContainer onClick={() => dispatch(toggleCartHidden())} />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
