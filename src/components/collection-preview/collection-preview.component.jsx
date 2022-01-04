import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items.map(({ id, ...otherItemsProps }) => (
        <CollectionItem key={id} {...otherItemsProps} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
