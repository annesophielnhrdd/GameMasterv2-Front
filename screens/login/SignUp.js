import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, user } from "../../reducers";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { Layout, PrimaryButton, Input } from "../../components";
import { GLOBAL_STYLES, COLORS } from "../../constants";

// TODO : FIX CSS
export function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

  const handleSignUp = () => {
    setIsLoading(true);

    fetch(`${BACKEND_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        if (user.result) {
          dispatch(
            login({
              username: username,
              token: user.token,
              friends: user.friends,
            })
          );
          setUsername("");
          setPassword("");
        }
      })
      .catch((error) => alert(error.message))
      .finally(() => {
        setIsLoading(false);
        navigation.navigate("Players");
      });
  };

  return (
    <Layout isLoading={isLoading}>
      <Text style={GLOBAL_STYLES.title}>Nom d'utilisateur</Text>
      <View style={GLOBAL_STYLES.inputContainer}>
        <TextInput
          style={GLOBAL_STYLES.input}
          placeholder="Nom d'utilisateur"
          autoCapitalize="none"
          keyboardType="default"
          textContentType="username"
          autoComplete="username"
          onChangeText={(value) => setUsername(value)}
          value={username}
        />
      </View>
      <Text style={GLOBAL_STYLES.title}>Mot de passe</Text>
      <View style={GLOBAL_STYLES.inputContainer}>
        <TextInput
          style={GLOBAL_STYLES.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          autoCapitalize="none"
          keyboardType="default"
          textContentType="password"
          autoComplete="current-password"
          onChangeText={(value) => setPassword(value)}
          value={password}
        />
      </View>
      {error && (
        <Text style={GLOBAL_STYLES.errorText}>
          Merci de renseigner tous les champs correctement
        </Text>
      )}

      <TouchableOpacity
        style={GLOBAL_STYLES.primaryButton}
        onPress={() => handleSignUp()}
      >
        <Text style={GLOBAL_STYLES.primaryButtonText}>S'inscrire</Text>
      </TouchableOpacity>
      <Text
        style={GLOBAL_STYLES.text}
        onPress={() => navigation.replace("SignIn")}
      >
        Me connecter?
      </Text>
    </Layout>
  );
}
