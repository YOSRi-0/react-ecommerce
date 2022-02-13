import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { ShopPageContainer } from './shop.styles';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { isCollectionFetching } = this.props;
    return (
      <ShopPageContainer>
        <Routes>
          <Route
            path="/"
            // render={(props) => (
            //   <CollectionOverviewWithSpinner isLoading={loading} {...props} />
            // )}
            element={
              <CollectionOverviewWithSpinner isLoading={isCollectionFetching} />
            }
          />
          <Route
            exact
            path="/:collectionId"
            // render={(props) => (
            //   <CollectionPageWithSpinner isLoading={loading} {...props} />
            // )}
            element={
              <CollectionPageWithSpinner isLoading={isCollectionFetching} />
            }
          />
        </Routes>
        <Outlet />
      </ShopPageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
