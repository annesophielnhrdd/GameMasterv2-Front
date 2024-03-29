import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  LeagueSpartan_900Black,
  LeagueSpartan_500Medium,
  LeagueSpartan_700Bold,
} from "@expo-google-fonts/league-spartan";
// AJOUTER LES IMPORTS DES AUTRES SCREENS
import { Login, SignIn, SignUp } from "./screens/login";
import {
  Characters,
  Players,
  StoryLength,
  Style,
  Universe,
} from "./screens/storyCreation";
import { GLOBAL_STYLES, COLORS } from "./constants";

// AJOUTER LES IMPORTS DES REDUCEURS
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { user, currentGame } from "./reducers";
import { ChoicesPhase } from "./screens/game";

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

  // TODO : AJOUTER LES AUTRES STACK.SCREENS DANS LE RETURN
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden={false} style="dark" backgroundColor="transparent" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Players" component={Players} />
          <Stack.Screen name="StoryLength" component={StoryLength} />
          <Stack.Screen name="Style" component={Style} />
          <Stack.Screen name="Universe" component={Universe} />
          <Stack.Screen name="Characters" component={Characters} />
          <Stack.Screen name="ChoicesPhase" component={ChoicesPhase} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
