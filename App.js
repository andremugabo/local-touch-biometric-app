import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";

// expo install expo-local-authentication

/**
 * For testing face id we need a standalone app for ios:
 * expo install expo-dev-client
 */

export default function App() {
  let [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function authenticate() {
      const result = await LocalAuthentication.authenticateAsync();
      // console.log(result);
      setAuthenticated(result.success);
    }
    authenticate();
  }, []);
  return (
    <View style={styles.container}>
      <Text>
        {isAuthenticated
          ? "Here's some sensitive info!"
          : "Uh oh! Access Denied "}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
