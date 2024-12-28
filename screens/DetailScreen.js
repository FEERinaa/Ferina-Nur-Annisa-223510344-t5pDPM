import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Text, Button, Appbar } from "react-native-paper";

const DetailScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={{ uri: "https://source.unsplash.com/featured/?architecture" }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              alert("No previous screen to go back to!");
            }
          }} />
          <Appbar.Content title="Detail Screen" />
        </Appbar.Header>
        <View style={styles.content}>
          <Text variant="headlineLarge" style={styles.title}>
            Here are the details!
          </Text>
          <Button
            mode="contained"
            onPress={() => alert("Hello from the Details Screen!")}
            style={styles.button}
          >
            Show Alert
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

export default DetailScreen;
