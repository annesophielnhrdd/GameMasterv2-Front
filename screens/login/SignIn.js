import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Layout from "../../components/Layout";

export function SignIn({ navigation }) {
  return (
    <View style={GLOBAL_STYLES.container}>
      <Layout />
      <View style={GLOBAL_STYLES.introContainer}>
        <Text style={GLOBAL_STYLES.intro}>SIGNIN</Text>
      </View>
    </View>
  );
}
