import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Fonts from 'expo-font';
import ScreenNavigator from './navigation/ScreenNavigator';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    console.log('Ready');
    return (
      <AppLoading
        startAsync={() => {
          return Fonts.loadAsync({
            'rubik-bold': require('./assets/fonts/Rubik-Bold.ttf'),
            'rubik-light': require('./assets/fonts/Rubik-Light.ttf'),
            'rubik-italic': require('./assets/fonts/Rubik-Italic.ttf'),
            'rubik-regular': require('./assets/fonts/Rubik-Regular.ttf'),
            'rubik-medium': require('./assets/fonts/Rubik-Medium.ttf')
          });
        }}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return <ScreenNavigator />;
}
