import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchbleOpacity,
  ImageBackground,
  Platform,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../assets/space.gif")}
          style={styles.bgImg}
          resizeMode="cover"
        >
          <StatusBar barStyle="dark-content" backgroundColor="#000000" />

          <Image
            source={require("../assets/main-icon.png")}
            style={styles.img}
            resizeMode="cover"
          />
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Stellar App !
          </Text>

          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              this.props.navigation.navigate("spaceCraft");
            }}
          >
            <Image
              source={require("../assets/space_crafts.png")}
              style={styles.icon}
            />
            <Text style={styles.txt}>Space Crafts </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              this.props.navigation.navigate("starMap");
            }}
          >
            <Image
              source={require("../assets/star_map.png")}
              style={styles.icon}
            />
            <Text style={styles.txt}>Start map </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              this.props.navigation.navigate("dailyPics");
            }}
          >
            <Image
              source={require("../assets/daily_pictures.png")}
              style={styles.icon}
            />
            <Text style={styles.txt}>Daily pics </Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  bgImg: {
    flex: 1,
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  icon: {
    width: 70,
    height: 70,
    resizeMode: "center",
    alignSelf: "flex-end",
    marginTop: -30,
    marginBottom: 20,
  },
  txt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    top: -25,
    marginTop: -10,
  },
  box: {
    backgroundColor: "#FFF",
    // marginHo: 20,
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 10,
    borderRadius: 10,
  },
});
