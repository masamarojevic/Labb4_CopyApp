import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  handlePress,
  Modal,
  showModal,
  setShowModal,
  TextInput,
  ImageBackground,
} from "react-native";
import FirstArticle from "./FirstArticle";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [textInput, setTextInput] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* navi bar profile*/}
        <Text style={styles.helloText}>
          Hello {isLoggedIn ? name : "Guest"}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowModal(true)}
          activeOpacity={0.5}
        >
          {isLoggedIn ? (
            <ImageBackground
              style={{ height: 80, width: 80, left: 25, borderRadius: 150 }}
              source={require("./assets/profile.png")}
            >
              <Text
                style={{
                  fontStyle: "italic",
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  top: 25,
                }}
              >
                {name}
              </Text>
            </ImageBackground>
          ) : (
            <Image
              style={{ height: 80, width: 80, left: 25, borderRadius: 150 }}
              source={require("./assets/icon.png")}
            />
          )}
        </TouchableOpacity>
        <Modal visible={showModal} transparent={true}>
          <View
            style={{
              height: 170,
              width: 300,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "flex-end",
              left: 60,
              top: 400,
            }}
          >
            <Text
              style={{ fontWeight: "700", fontSize: 20, right: 80, bottom: 15 }}
            >
              Name:
            </Text>
            <TextInput
              style={{ height: 25, width: 200, backgroundColor: "lightgrey" }}
              onChangeText={setTextInput}
              value={textInput}
            ></TextInput>

            <Button
              title="Submit"
              onPress={() => {
                if (textInput == "") {
                  setIsLoggedIn(false);
                  setName("Guest");
                } else {
                  setIsLoggedIn(true);
                  setName(textInput);
                }

                setShowModal(false);
              }}
            />

            <TouchableOpacity
              onPress={() => setShowModal(false)}
              activeOpacity={0.5}
            >
              <Image
                style={{ height: 25, width: 25, right: 130, bottom: 130 }}
                source={require("./assets/close.png")}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      <View>
        <Text style={styles.TodaysText}>Today's Highlights</Text>
      </View>

      <ScrollView>
        <FirstArticle />
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "purple",
    height: 90,
  },
  helloText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    right: 20,
  },
  TodaysText: {
    fontSize: 20,
    fontWeight: "bold",
    top: 10,
    left: 35,
  },
});
