import React from 'react';

import { connect } from 'react-redux';

import './collection.styles.scss';

import { selectShopCollections } from '../../redux/collection/collection.selectors';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collections }) => {
  const { collectionId } = useParams();

  const collection = collections[collectionId];
  console.log(collectionId, collection);
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectShopCollections(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
