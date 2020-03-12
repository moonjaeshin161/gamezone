import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo';
import DrawerNav from './routes/drawer';

const getFonts = () => (
  Font.loadAsync({
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf')
  })
)

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <DrawerNav />
    )
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}


