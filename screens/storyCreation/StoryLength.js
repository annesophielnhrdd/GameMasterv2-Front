import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setStoryLength } from "../../reducers";

import { COLORS, GLOBAL_STYLES } from "../../constants";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { Text, TouchableOpacity, View } from "react-native";
import { Layout } from "../../components";

export function StoryLength({ navigation }) {
  const dispatch = useDispatch();
  const [selectedStoryLength, setSelectedStoryLength] = useState(15);

  const storyLengthChoices = [5, 10, 15, 20, 25, 30];

  const handleNext = () => {
    dispatch(setStoryLength(selectedStoryLength));
    navigation.navigate("Style");
  };

  return (
    <Layout>
      <Text style={GLOBAL_STYLES.title}>
        Combien d'actions dans la partie ?
      </Text>

      <WheelPickerExpo
        height={200}
        width={50}
        selectedStyle={{ borderColor: COLORS.secondary, borderWidth: 1 }}
        initialSelectedIndex={2}
        backgroundColor={COLORS.primary}
        items={storyLengthChoices.map(storyLengthChoice => ({
          label: storyLengthChoice,
          value: "",
        }))}
        onChange={({ item }) => setSelectedStoryLength(item.label)}
      />

      <View style={{ height: "0px" }}></View>
      <TouchableOpacity
        style={GLOBAL_STYLES.primaryButton}
        onPress={handleNext}
      >
        <Text style={GLOBAL_STYLES.primaryButtonText}>Suivant</Text>
      </TouchableOpacity>
    </Layout>
  );
}
