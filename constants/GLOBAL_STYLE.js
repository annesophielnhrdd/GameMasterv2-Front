import { StyleSheet } from "react-native";
import { COLORS } from "./COLORS";

export const GLOBAL_STYLES = StyleSheet.create({
  //LAYOUT
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    width: "100%",
    height: "18%",
  },

  logo: {
    marginTop: "10%",
    maxWidth: "70%",
    maxHeight: "40%",
  },

  spinner: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },

  // CHILDRENS
  body: {
    backgroundColor: COLORS.primary,
    width: "100%",
    height: "85%",
  },

  centerContainer: {
    width: "100%",
    height: "80%",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 32,
  },

  scrollViewContainer: {
    alignItems: "center",
    justifyContent: "center",
    // marginTop: '20%',
    gap: 32,
    paddingVertical: 32,
    minHeight: "100%",
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },

  // INPUT
  inputContainer: {
    width: "80%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: COLORS.secondary,
  },
  input: {
    width: "90%",
    fontFamily: "LeagueSpartan_500Medium",
    paddingHorizontal: 16,
    fontSize: 18,
    color: COLORS.black,
  },
  inputClearIcon: {
    width: "10%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  // TEXTS
  appTitle: {
    fontFamily: "LeagueSpartan_900Black",
    fontSize: 35,
    color: COLORS.secondary,
    textAlign: "center",
    paddingVertical: "15%",
    marginBottom: "10%",
    textShadowColor: COLORS.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },

  intro: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 25,
    textAlign: "center",
    lineHeight: 33,
    justifyContent: "center",
    paddingHorizontal: "10%",
    paddingVertical: "15%",
    marginTop: "10%",
    textShadowColor: COLORS.white,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },

  title: {
    fontFamily: "LeagueSpartan_700Bold",
    color: COLORS.black,
    textShadowColor: COLORS.secondary,
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 10,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 16,
  },

  bodyText: {
    color: COLORS.white,
    width: "100%",
    fontSize: 14,
    fontWeight: "normal",
  },

  // BUTTONS
  primaryButton: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    color: COLORS.black,
    elevation: 10,
  },

  primaryButtonText: {
    fontFamily: "LeagueSpartan_700Bold",
    color: COLORS.black,
    fontSize: 18,
    textTransform: "uppercase",
    textAlign: "center",
  },

  secondaryButton: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  secondaryButtonText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "normal",
    textTransform: "uppercase",
    textAlign: "center",
  },

  buttonContainer: {
    alignItems: "center",
    gap: 25,
  },
});

export default GLOBAL_STYLES;
