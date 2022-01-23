import React from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';

import {
  convertCollectionsSnapshopToMap,
  firestore,
} from '../../firebase/firebase.utils';

import { ShopPageContainer } from './shop.styles';

class Shop extends React.Component {
  unsubscribeFromSnapshop = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    return (
      <ShopPageContainer>
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
