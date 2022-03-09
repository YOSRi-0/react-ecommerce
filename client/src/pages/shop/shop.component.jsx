import React, { useEffect, lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { ShopPageContainer } from './shop.styles';
import Spinner from '../../components/spinner/spinner.component';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/collection-overview/collection-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<CollectionOverviewContainer />} />
          <Route
            exact
            path="/:collectionId"
            element={<CollectionPageContainer />}
          />
        </Routes>
      </Suspense>
      <Outlet />
    </ShopPageContainer>
  );
};

export default Shop;
