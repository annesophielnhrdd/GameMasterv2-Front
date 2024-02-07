import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setStyle } from "../../reducers";

import { COLORS, GLOBAL_STYLES } from "../../constants";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { Text, TouchableOpacity, View } from "react-native";
import { Layout } from "../../components";

export function Style({ navigation }) {
  const dispatch = useDispatch();
  const [selectedStyle, setSelectedStyle] = useState("intrigue");

  const styleChoices = ["combat", "intrigue", "exploration"];

  const handleNext = () => {
    dispatch(setStyle(selectedStyle));
    navigation.navigate("Universe");
  };

  return (
    <Layout>
      <Text style={GLOBAL_STYLES.title}>Quel style de jeu préférez-vous ?</Text>

      <WheelPickerExpo
        height={200}
        width={200}
        selectedStyle={{ borderColor: COLORS.secondary, borderWidth: 1 }}
        initialSelectedIndex={1}
        backgroundColor={COLORS.primary}
        items={styleChoices.map(styleChoice => ({
          label: styleChoice.toUpperCase(),
          value: styleChoice.toLowerCase(),
        }))}
        onChange={({ item }) => setSelectedStyle(item.value)}
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
