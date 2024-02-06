import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { user } from "../../reducers";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { Layout, PrimaryButton, Input } from "../../components";
import { GLOBAL_STYLES, COLORS } from "../../constants";

// TODO: A FINIR !!!! + IMPORTS?
export function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

  const handleLogin = () => {
    setIsLoading(true);
    setError(false);

    fetch(`${BACKEND_URL}/users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          dispatch(login(user));
          setUsername("");
          setPassword("");
          navigation.navigate("MesParties");
        } else {
          setError(true);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Layout isLoading={isLoading}>
      <View>
        <Text style={GLOBAL_STYLES.title}>Nom d'utilisateur</Text>
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

        <Text style={GLOBAL_STYLES.title}>Mot de passe</Text>
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

        {error && (
          <Text style={GLOBAL_STYLES.errorText}>
            Merci de renseigner tous les champs correctement
          </Text>
        )}

        <TouchableOpacity
          style={GLOBAL_STYLES.primaryButton}
          onPress={() => handleLogin()}
        >
          <Text style={GLOBAL_STYLES.primaryButtonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
