import React from 'react';

import { useSelector } from 'react-redux';
import { selectCollectionsPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionOverviewContainer } from './collection-overview.styles';

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsPreview);

  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

export default CollectionOverview;
