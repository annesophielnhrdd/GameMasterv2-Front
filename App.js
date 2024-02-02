import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {
  useFonts,
  LeagueSpartan_900Black,
  LeagueSpartan_500Medium,
  LeagueSpartan_700Bold,
} from '@expo-google-fonts/league-spartan';

import { Players } from './screens/storyCreation';
import Header from './components/Header';
import { COLORS, GLOBAL_STYLES } from './constants';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { user, currentGame } from './reducers';

const store = configureStore({
  reducer: { user, currentGame },
});

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    LeagueSpartan_900Black,
    LeagueSpartan_500Medium,
    LeagueSpartan_700Bold,
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={GLOBAL_STYLES.container}>
        <View style={GLOBAL_STYLES.header}>
          <Header />
        </View>
        <View style={GLOBAL_STYLES.body}>
          <Players />
        </View>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
