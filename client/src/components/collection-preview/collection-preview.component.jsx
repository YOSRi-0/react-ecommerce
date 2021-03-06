import React from 'react';

import {
  CollectionPreviewContainer,
  PreviewContainer,
  Title,
} from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <Title to={routeName}>{title}</Title>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
