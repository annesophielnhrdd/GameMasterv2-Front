import React, { Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { COLORS, GLOBAL_STYLES } from "../../constants";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Layout } from "../../components";
import {
  setContinuation,
  setCurrentGame,
  setSelectedChoices,
} from "../../reducers";

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

export function ChoicesPhase({ navigation, storyId }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const currentGame = useSelector(state => state.currentGame);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSelectedChoices, setcurrentSelectedChoices] = useState([]);

  if (!currentGame._id) {
    !isLoading ? setIsLoading(true) : null;
    fetch(`${BACKEND_URL}/games/${storyId}`)
      .then(res => res.json())
      .then(game => {
        dispatch(setCurrentGame(game));
        setcurrentSelectedChoices(game.selectedChoices);
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  } else {
    isLoading ? setIsLoading(false) : null;
  }

  console.log("[FRONTEND][CHOICES PHASE] currentGame:", currentGame);
  console.log(
    "[FRONTEND][CHOICES PHASE] currentGame choices:",
    currentGame.choices
  );
  console.log(
    "[FRONTEND][CHOICES PHASE] current selected choices:",
    currentSelectedChoices
  );

  const handleSelect = (index, character, choice) => {
    let updatedChoices = [];

    if (!currentSelectedChoices.length) {
      updatedChoices = currentGame.players.map(player => {
        return { character: player.character, choice: null };
      });
    } else {
      updatedChoices = [...currentSelectedChoices];
    }

    updatedChoices[index] = { character, choice };

    setcurrentSelectedChoices(updatedChoices);
  };

  const handleContinue = () => {
    if (currentSelectedChoices.length !== currentGame.players.length) {
      return alert("Tous les joueurs doivent faire un choix");
    }

    for (const selectedChoice of currentSelectedChoices) {
      if (!selectedChoice.choice)
        alert("Tous les joueurs doivent faire un choix");
    }

    dispatch(setSelectedChoices(currentSelectedChoices));

    const lastChoices = currentSelectedChoices
      .map(selectedChoice => {
        return `${selectedChoice.character} a choisi : ${selectedChoice.choice}`;
      })
      .join(" ");

    console.log("Last choices:", lastChoices);

    setIsLoading(true);
    console.log(
      "[FRONTEND][CHOICES PHASE] Start fetching PUT story/continuation"
    );

    fetch(`${BACKEND_URL}/story/continuation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        context: currentGame.context,
        charactersDescription: currentGame.charactersDescription,
        lastChoices,
        storyLength: currentGame.storyLength,
        round: currentGame.round,
        style: currentGame.style,
      }),
    })
      .then(res => res.json())
      .then(({ choicesSummary, storyContinuation }) => {
        dispatch(
          setContinuation({
            newChoices,
            choicesSummary,
            continuation: storyContinuation,
          })
        );
        setcurrentSelectedChoices(null);
      })
      .catch(error => console.error(error))
      .finally(() => {
        console.log(
          "[FRONTEND][CHOICES PHASE] Start fetching PUT story/continuation"
        );
        setIsLoading(false);
      });
  };

  return (
    <Layout isLoading={isLoading}>
      {currentGame._id && (
        <ScrollView
          style={GLOBAL_STYLES.scrollView}
          contentContainerStyle={GLOBAL_STYLES.scrollViewContainer}
        >
          <Text style={GLOBAL_STYLES.title}>{currentGame.title}</Text>
          <Text style={GLOBAL_STYLES.bodyText}>
            {currentGame.context.slice(-2)}
          </Text>

          <Text style={GLOBAL_STYLES.title}>
            Nos aventuriers doivent faire des choix pour continuer l'aventure...
          </Text>
          {currentGame.choices.map((choice, index) => {
            return (
              <View
                key={choice.character}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <Text style={GLOBAL_STYLES.title}>{choice.character} :</Text>
                <TouchableOpacity
                  style={GLOBAL_STYLES.card}
                  onPress={() =>
                    handleSelect(index, choice.character, choice.choices[0])
                  }
                >
                  <Text style={GLOBAL_STYLES.bodyText}>
                    {choice.choices[0]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={GLOBAL_STYLES.card}
                  onPress={() =>
                    handleSelect(index, choice.character, choice.choices[1])
                  }
                >
                  <Text style={GLOBAL_STYLES.bodyText}>
                    {choice.choices[1]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={GLOBAL_STYLES.card}
                  onPress={() =>
                    handleSelect(index, choice.character, choice.choices[2])
                  }
                >
                  <Text style={GLOBAL_STYLES.bodyText}>
                    {choice.choices[2]}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}

          <View style={{ height: "0px" }}></View>
          <TouchableOpacity
            style={GLOBAL_STYLES.primaryButton}
            onPress={handleContinue}
          >
            <Text style={GLOBAL_STYLES.primaryButtonText}>Continuer</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Layout>
  );
}
