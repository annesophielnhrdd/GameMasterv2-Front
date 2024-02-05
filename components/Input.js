import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { GLOBAL_STYLES, COLORS } from "../constants";

export const Input = ({ placeholder, value, handleChange, clearIcon }) => {
  return (
    <View style={GLOBAL_STYLES.inputContainer}>
      <TextInput
        style={GLOBAL_STYLES.input}
        placeholder={placeholder}
        value={value}
        onChangeText={text => handleChange(text)}
      />
      {clearIcon && (
        <TouchableOpacity
          onPress={() => handleChange("")}
          style={GLOBAL_STYLES.inputClearIcon}
        >
          <Icon name="times" size={16} color={COLORS.black} />
        </TouchableOpacity>
      )}
    </View>
  );
};
