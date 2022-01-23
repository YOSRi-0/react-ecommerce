import React from 'react';

import { connect } from 'react-redux';

import {
  CollectionPageContainer,
  ItemsContainer,
  Title,
} from './collection.styles';

import { selectShopCollections } from '../../redux/shop/shop.selectors';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collections }) => {
  const { collectionId } = useParams();

  const collection = collections[collectionId];
  console.log(collectionId, collection);
  return (
    <CollectionPageContainer>
      <Title>{collection.title}</Title>
      <ItemsContainer>
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectShopCollections(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
