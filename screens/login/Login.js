import React from "react";
import { View, Text } from "react-native";
import { GLOBAL_STYLES, COLORS } from "../../constants";
import { Layout, PrimaryButton, Input } from "../../components";

// TODO : CSS A FINIR

export function Login({ navigation }) {
  return (
    <Layout>
      <View>
        <Text style={GLOBAL_STYLES.appTitle}>Entrez dans l'histoire</Text>
        <Text style={GLOBAL_STYLES.intro}>
          Désormais tu es le game master, vos choix vont influer sur les rôles
          de chacun ainsi que la suite de votre histoire.
        </Text>

        <View style={GLOBAL_STYLES.buttonContainer}>
          <PrimaryButton
            text="Connexion"
            onPress={() => navigation.navigate("SignIn")}
          />
          <PrimaryButton
            text="Créer un compte"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>
    </Layout>
  );
}
