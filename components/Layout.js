import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Layout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/logogm.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efefef",
    width: "100%",
    Height: "18%",
  },
  logo: {
    marginTop: "10%",
    maxWidth: "70%",
    maxHeight: "40%",
  },
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
  },
});

export default Layout;
