import React from 'react';

import './checkout-item.styles.scss';

import { connect } from 'react-redux';

import { removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({
  cartItem: { id, name, price, quantity, imageUrl },
  removeItem,
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">${price}</span>
    <div className="remove-button" onClick={() => removeItem(id)}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemId) => dispatch(removeItem(itemId)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
