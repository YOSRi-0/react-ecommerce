import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';

import {
  convertCollectionsSnapshopToMap,
  firestore,
} from '../../firebase/firebase.utils';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { ShopPageContainer } from './shop.styles';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class Shop extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshop = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <ShopPageContainer>
        <Routes>
          <Route
            path="/"
            // render={(props) => (
            //   <CollectionOverviewWithSpinner isLoading={loading} {...props} />
            // )}
            element={<CollectionOverviewWithSpinner isLoading={loading} />}
          />
          <Route
            exact
            path="/:collectionId"
            // render={(props) => (
            //   <CollectionPageWithSpinner isLoading={loading} {...props} />
            // )}
            element={<CollectionPageWithSpinner isLoading={loading} />}
          />
        </Routes>
        <Outlet />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
