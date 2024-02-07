import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStory, setUniverse } from "../../reducers";

import { COLORS, GLOBAL_STYLES } from "../../constants";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { Text, TouchableOpacity, View } from "react-native";
import { Layout } from "../../components";

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

export function Universe({ navigation }) {
  const dispatch = useDispatch();
  const currentGame = useSelector(state => state.currentGame);

  const [selectedUniverse, setSelectedUniverse] = useState("intrigue");
  const [isLoading, setIsLoading] = useState(false);
  const [finishTapped, setFinishTapped] = useState(false);
  const universeChoices = ["montagne", "forêt", "ville"];

  // console.log("isLoading", isLoading);
  // console.log("finishTapped", finishTapped);

  useEffect(() => {
    if (currentGame.charactersDescription && finishTapped) {
      setIsLoading(false);
      setFinishTapped(false);
      handleCreateStory();
    }
  }, [currentGame]);

  const handleFinish = () => {
    if (!currentGame.charactersDescription) {
      setFinishTapped(true);
      setIsLoading(true);
    } else {
      handleCreateStory();
    }
  };

  const handleCreateStory = async () => {
    dispatch(setUniverse(selectedUniverse));

    // Create story's beginning with openAI API.
    console.log("[FRONTEND][UNIVERSE] Start fetching story/beginning");
    fetch(
      `${BACKEND_URL}/story/beginning?charactersDescription=${currentGame.charactersDescription}&univers=${selectedUniverse}&storyLength=${currentGame.storyLength}&style=${currentGame.style}&round=0`
    )
      .then(resp => resp.json())
      .then(story => {
        console.log("story choices:", story.choices);
        dispatch(
          setStory({
            title: story.title,
            context: story.storyBeginning,
            choices: story.choices,
          })
        );
      })
      .catch(error => console.error(error))
      .finally(() =>
        console.log("[FRONTEND][UNIVERSE] Finished fetching story/beginning")
      );

    navigation.navigate("Characters");
  };

  return (
    <Layout isLoading={isLoading}>
      <Text style={GLOBAL_STYLES.title}>
        Dans quel univers se déroule votre aventure ?
      </Text>

      <WheelPickerExpo
        height={200}
        width={200}
        selectedStyle={{ borderColor: COLORS.secondary, borderWidth: 1 }}
        initialSelectedIndex={1}
        backgroundColor={COLORS.primary}
        items={universeChoices.map(universeChoice => ({
          label: universeChoice.toUpperCase(),
          value: universeChoice.toLowerCase(),
        }))}
        onChange={({ item }) => setSelectedUniverse(item.value)}
      />

      <View style={{ height: "0px" }}></View>
      <TouchableOpacity
        style={GLOBAL_STYLES.primaryButton}
        onPress={handleFinish}
        // disabled={isLoading}
      >
        <Text style={GLOBAL_STYLES.primaryButtonText}>Terminer</Text>
      </TouchableOpacity>
    </Layout>
  );
}
