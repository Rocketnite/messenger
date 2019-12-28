import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Feather } from '@expo/vector-icons';

const CustomHeaderButton = props => {
  return <HeaderButton {...props} IconComponent={Feather} iconSize={23} />;
};

export default CustomHeaderButton;
