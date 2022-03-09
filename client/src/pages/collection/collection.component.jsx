import React from 'react';

import { useSelector } from 'react-redux';

import {
  CollectionPageContainer,
  ItemsContainer,
  Title,
} from './collection.styles';

import { selectShopCollections } from '../../redux/shop/shop.selectors';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = () => {
  const collections = useSelector(selectShopCollections);
  const { collectionId } = useParams();

  const collection = collections ? collections[collectionId] : null;
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

export default CollectionPage;
