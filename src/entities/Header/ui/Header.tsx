import React from 'react';
import {Text, View} from 'react-native';
import LogoIcon from '@shared/assets/icons/logo.svg';
import {headerStyle} from './headerStyle';

const Header = () => {
  return (
    <View style={headerStyle.wrapper}>
      <View style={headerStyle.leftWrapper}>
        <LogoIcon width={40} height={40} />
        <Text style={headerStyle.title}>SpendWise</Text>
      </View>
      <Text style={headerStyle.subtitle}>Spend your money wisely</Text>
    </View>
  );
};

export default Header;
