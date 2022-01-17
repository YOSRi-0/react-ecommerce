import React from 'react';
import { Outlet } from 'react-router-dom';

import { ShopPageContainer } from './shop.styles';

const Shop = () => {
  return (
    <ShopPageContainer>
      <Outlet />
    </ShopPageContainer>
  );
};

export default Shop;
