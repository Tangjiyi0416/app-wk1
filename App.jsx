import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Pressable, Image, Text, View } from 'react-native';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <View style={isDarkMode ? styles.headerStyleDark : styles.headerStyle}>
        <Text style={isDarkMode ? styles.headerTextStyleDark : styles.headerTextStyle}>
          110919025 唐集億
        </Text>
      </View>
      <View style={isDarkMode ? styles.mainStyleDark : styles.mainStyle}>
        <Image style={styles.image} source={require("./img/bottle.png")} />
        <Text style={isDarkMode ? styles.textStyleDark : styles.textStyle}>優雅隨手保溫瓶</Text>
        <Pressable
          onPress={() => {
            setIsDarkMode(!isDarkMode);
          }}
          style={({ pressed }) => {
            backgroundColor: pressed
              ? "#1d1d1f"
              : "#F8F8F8"
          }
          }
        >
          {() => (
            <Text style=
              {isDarkMode
                ? { color: "#F8F8F8", fontSize: 20, borderWidth: 2, borderColor: "#F8F8F8", alignSelf: "center", textAlign: "center", width: 120 }
                : { color: "#1d1d1f", fontSize: 20, borderWidth: 2, borderColor: "#1d1d1f", alignSelf: "center", textAlign: "center", width: 120 }
              }>
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Text>
          )}
        </Pressable>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2,
  },
  headerStyleDark: {
    backgroundColor: "#0d0d0d",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2,
  },
  headerTextStyle: {
    fontSize: 20,
    color: "#000",

  },
  headerTextStyleDark: {
    fontSize: 20,
    color: "#F8F8F8",
  },
  textStyle: {
    fontSize: 40,
    fontWeight: "400",
    letterSpacing: 2,
    color: "#1d1d1f",
    textAlign: "center",
  },
  textStyleDark: {
    fontSize: 40,
    fontWeight: "400",
    letterSpacing: 2,
    color: "#F8F8F8",
    textAlign: "center",
  },
  mainStyle: {
    flex: 1,
    backgroundColor: "#ebebec",
    justifyContent: "space-evenly",
  },
  mainStyleDark: {
    flex: 1,
    color: "#FFF",
    backgroundColor: "#1d1d1f",
    justifyContent: "space-evenly",
  },
  image: {
    height: "80%",
    borderRadius: 150,
    alignSelf: "center",
  },
});