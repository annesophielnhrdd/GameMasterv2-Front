import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { GLOBAL_STYLES } from "../constants";

const PrimaryButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={GLOBAL_STYLES.primaryButton} onPress={onPress}>
      <Text style={GLOBAL_STYLES.primaryButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
