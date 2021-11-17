import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Contacto2Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Contacto #2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C0C0C0",
    alignItems: "center",
    justifyContent: "center",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
