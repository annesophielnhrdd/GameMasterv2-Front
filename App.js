import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  LeagueSpartan_900Black,
  LeagueSpartan_500Medium,
  LeagueSpartan_700Bold,
} from '@expo-google-fonts/league-spartan';
// AJOUTER LES IMPORTS DES AUTRES SCREENS
import { Login, SignIn, SignUp } from './screens/login';
import { GLOBAL_STYLES, COLORS } from './constants';

// AJOUTER LES IMPORTS DES REDUCEURS
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { user, currentGame } from './reducers';

const store = configureStore({
  reducer: { user, currentGame },
});

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    LeagueSpartan_900Black,
    LeagueSpartan_500Medium,
    LeagueSpartan_700Bold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // AJOUTER LES AUTRES STACK.SCREENS DANS LE RETURN
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden={false} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
