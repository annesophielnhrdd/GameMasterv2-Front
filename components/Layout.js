import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
import { GLOBAL_STYLES, COLORS } from "../constants";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={GLOBAL_STYLES.screenContainer}>
      <View style={GLOBAL_STYLES.header}>
        <Image
          source={require("../assets/logogm.png")}
          style={GLOBAL_STYLES.logo}
          resizeMode="contain"
        />
      </View>
      {isLoading ? (
        <View style={GLOBAL_STYLES.spinner}>
          <ActivityIndicator size="large" color="#efefef" />
        </View>
      ) : (
        <View style={GLOBAL_STYLES.body}>{children}</View>
      )}
    </View>
  );
};

export default Layout;
