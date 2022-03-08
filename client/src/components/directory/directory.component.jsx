import React from 'react';
import { DirectoryContainer } from './directory.styles';

import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
