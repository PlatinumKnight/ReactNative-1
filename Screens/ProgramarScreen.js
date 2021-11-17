import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ProgramarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color={"#ff5c5c"}
        title="JAVASCRIPT"
        onPress={() => navigation.navigate("JavascriptScreen")}
      />
      <Button
        color={"#ff5c5c"}
        title="REACT"
        onPress={() => navigation.navigate("ReactScreen")}
      />
    </View>
  );
};

export default ProgramarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C0C0C0",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tinyLogo: {
    width: 300,
    height: 400,
  },
});
