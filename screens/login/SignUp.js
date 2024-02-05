import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { GLOBAL_STYLES, COLORS } from "../../constants";
import { Layout, PrimaryButton, Input } from "../../components";

//TODO: A FINIR + IMPORTS?

export function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    setIsLoading(true);
    fetch("http://192.168.1.10:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.result) {
          setIsLoading(false);
          dispatch(signup({ username: username, token: data.token }));
          setUsername("");
          setPassword("");
          navigation.navigate("MesParties");
        }
      });
  };

  return (
    <Layout>
      <View style={styles.centerContainer}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Text style={styles.label}>Nom d'utilisateur:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nom d'utilisateur"
              autoCapitalize="none"
              keyboardType="default"
              textContentType="username"
              autoComplete="username"
              onChangeText={(value) => setUsername(value)}
              value={username}
            />

            <Text style={styles.label}>Mot de passe:</Text>
            <TextInput
              style={styles.input}
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
              <Text style={styles.error}>
                Merci de renseigner tous les champs
              </Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </Layout>
  );
}
