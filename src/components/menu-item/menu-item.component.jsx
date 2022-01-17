import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  Content,
  MenuItemContainer,
  Subtitle,
  Title,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <MenuItemContainer size={size} onClick={() => navigate(linkUrl)}>
      <BackgroundImage imageUrl={imageUrl} />
      <Content>
        <Title>{title}</Title>
        <Subtitle>shop now</Subtitle>
      </Content>
    </MenuItemContainer>
  );
};

export default MenuItem;
