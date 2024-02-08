import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { COLORS, GLOBAL_STYLES } from "../../constants";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Layout } from "../../components";
import { setCurrentGame } from "../../reducers";
import { setCurrentGame } from "../../reducers";

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

export function Characters({ navigation }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const currentGame = useSelector((state) => state.currentGame);
  const [isLoading, setIsLoading] = useState(false);
  const [startTapped, setStartTapped] = useState(false);

  useEffect(() => {
    if (currentGame.context && startTapped) {
      setIsLoading(false);
      setStartTapped(false);
      handleSaveGame();
    }
  }, [currentGame]);

  const handleStart = () => {
    if (!currentGame.context) {
      setStartTapped(true);
      setIsLoading(true);
    } else {
      handleSaveGame();
    }
  };

  const handleSaveGame = () => {
    // Save game in DB.
    console.log("[FRONTEND][CHARACTERS] Start fetching POST games/");
    fetch(`${BACKEND_URL}/games`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        gameMaster: user._id,
        players: currentGame.players,
        charactersDescription: currentGame.charactersDescription,
        title: currentGame.title,
        universe: currentGame.universe,
        storyLength: currentGame.storyLength,
        style: currentGame.style,
        context: currentGame.context,
        choices: currentGame.choices,
      }),
    })
      .then((res) => res.json())
      .then((savedGame) => dispatch(setCurrentGame(savedGame)))
      .catch((error) => console.error(error))
      .finally(() =>
        console.log("[FRONTEND][CHARACTERS] Finished fetching POST games/")
      );

    navigation.navigate("ChoicesPhase");
  };
  return (
    <Layout isLoading={isLoading}>
      <ScrollView
        style={GLOBAL_STYLES.scrollView}
        contentContainerStyle={GLOBAL_STYLES.scrollViewContainer}
      >
        <Text style={GLOBAL_STYLES.title}>
          Voici vos personnages pour cette aventure :
        </Text>

        {currentGame.players.map((player) => {
          return (
            <View key={player.character}>
              <Text>{player.name}</Text>
              <Text>{player.character}</Text>
              <Text>{player.description}</Text>
            </View>
          );
        })}

        <View style={{ height: "0px" }}></View>
        <TouchableOpacity
          style={GLOBAL_STYLES.primaryButton}
          onPress={handleStart}
        >
          <Text style={GLOBAL_STYLES.primaryButtonText}>Commencer</Text>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
}
