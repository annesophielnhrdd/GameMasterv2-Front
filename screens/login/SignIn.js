import React, { useState } from "react";
import { useDispatch } from "react-redux";

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

  const handleLogin = () => {
    setIsLoading(true);

    fetch("http://192.168.1.10:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.result) {
          dispatch(signin({ username: username, token: data.token }));
          setUsername("");
          setPassword("");
          navigation.navigate("MesParties");
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <Layout isLoading={isLoading}>
      <View style={styles.centerContainer}>
        <Text style={styles.label}>Nom d'utilisateur</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          autoCapitalize="none"
          keyboardType="default"
          textContentType="username"
          autoComplete="username"
          onChangeText={value => setUsername(value)}
          value={username}
        />

        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          autoCapitalize="none"
          keyboardType="default"
          textContentType="password"
          autoComplete="current-password"
          onChangeText={value => setPassword(value)}
          value={password}
        />

        {error && (
          <Text style={styles.error}>Merci de renseigner tous les champs</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});
