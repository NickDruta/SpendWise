import React from 'react';
import {SafeAreaView, View} from 'react-native';
import { Home } from '@pages/Home';
import {appStyle} from './appStyle';

function App(): JSX.Element {

  return (
    <View>
      <SafeAreaView style={appStyle.safeArea} />
      <Home />
    </View>
  );
}

export default App;
