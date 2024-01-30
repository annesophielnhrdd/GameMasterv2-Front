import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { GLOBAL_STYLES, COLORS } from "../../constants";
import Layout from "../../components/Layout";

// CONTENU DU RETURN A FINIR

export function Login({ navigation }) {
  return (
    <View style={GLOBAL_STYLES.container}>
      <Layout />
      <View style={GLOBAL_STYLES.introContainer}>
        <Text style={GLOBAL_STYLES.intro}>
          Désormais tu es le game master, vos choix vont influer sur les rôles
          de chacun ainsi que la suite de votre histoire.
        </Text>
      </View>
      <View style={GLOBAL_STYLES.titreContainer}>
        <Text style={GLOBAL_STYLES.titre}>Entrez dans l'histoire</Text>
      </View>
      <View style={GLOBAL_STYLES.buttonContainer}>
        <TouchableOpacity
          style={GLOBAL_STYLES.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={GLOBAL_STYLES.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={GLOBAL_STYLES.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={GLOBAL_STYLES.buttonText}>Créer un compte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
