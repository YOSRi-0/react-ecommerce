import React, { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { ShopPageContainer } from './shop.styles';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <ShopPageContainer>
      <Routes>
        <Route path="/" element={<CollectionOverviewContainer />} />
        <Route
          exact
          path="/:collectionId"
          element={<CollectionPageContainer />}
        />
      </Routes>
      <Outlet />
    </ShopPageContainer>
  );
};

export default Shop;
