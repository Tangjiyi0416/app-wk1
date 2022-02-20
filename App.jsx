import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <View style={styles.headerStyle}>
        <Text style={styles.headerTextStyle}>
          110919025 唐集億
        </Text>
      </View>
      <View style={styles.mainStyle}>
        <Image style={styles.image} source={require("./img/bottle.png")} />
        <Text style={styles.textStyle}>優雅隨手保溫瓶</Text>
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
  headerTextStyle: {
    fontSize: 20,
  },
  textStyle: {
    fontSize: 20,
    color: "#18197D",
    textAlign: "center",
  },
  mainStyle: {
    backgroundColor: "#D7F5EB",

  },
  image: {
    width: 600,
    height: 600,
    borderRadius: 150,
    alignSelf: "center",
  },
});