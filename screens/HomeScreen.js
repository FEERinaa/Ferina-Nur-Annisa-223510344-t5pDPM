import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Text, Button, Appbar } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={{ uri: "https://source.unsplash.com/featured/?nature" }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Home Screen" />
        </Appbar.Header>
        <View style={styles.content}>
          <Text variant="headlineLarge" style={styles.title}>
            Welcome to the Home Screen
          </Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Details")}
            style={styles.button}
          >
            Go to Details
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate("Profile")}
            style={styles.button}
          >
            View Profile
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    color: "#F4E1D2",
  },
  button: {
    marginTop: 20,
  },
});

export default HomeScreen;
