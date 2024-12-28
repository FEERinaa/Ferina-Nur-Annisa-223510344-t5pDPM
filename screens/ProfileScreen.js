import React from "react"; 
import { View, StyleSheet, Image } from "react-native";
import { Text, Button, Appbar } from "react-native-paper";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
      <View style={styles.content}>
        <Image
          source={require("../assets/nodejs.jpg")}
          style={styles.logoImage}
        />
        <Text variant="headlineLarge" style={styles.title}>
          Ferina Nur Annisa
        </Text>
        <Text style={styles.subtitle}>223510344</Text>
        <Button
          mode="contained"
          onPress={() => alert("Edit Profile Clicked!")}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Edit Profile
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", 
  },
  header: {
    backgroundColor: "#D8BFA3", 
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30, 
  },
  logoImage: {
    width: 200, 
    height: 300,
    marginBottom: 20, 
  },

  title: {
    fontSize: 28, 
    fontWeight: "700", 
    color: "#4E4A42", 
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18, 
    color: "#4E4A42", 
    marginBottom: 30, 
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#D8BFA3",
    width: "100%",
    paddingVertical: 14, 
    borderRadius: 30, 
  },
  buttonLabel: {
    fontSize: 18, 
    fontWeight: "700", 
  },
});

export default ProfileScreen;
