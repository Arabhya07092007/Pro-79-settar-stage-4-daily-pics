import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Linking,
  StatusBar,
  Image,
} from "react-native";
import axios from "axios";
import { WebView } from "react-native-webview";

export default class DailyPics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: {},
    };
  }
  getAPOD = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=DxTw972D5934yNhfTMfgfc7BM4mXU4YNGQgm3lmt"
      )
      .then((response) => {
        this.setState({ apod: response.data });
      })
      .catch((err) => {
        alert(err);
      });
  };

  componentDidMount = () => {
    this.getAPOD();
  };

  render() {
    if (this.state.apod.length === 0) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={{
              uri: "https://unitepaper.com/wp-content/uploads/2020/02/space-wallpaper-for-phone-170-768x1664-1.jpg",
            }}
            style={{ flex: 1 }}
          >
            <StatusBar backgroundColor="#000000" />
            <Text style={styles.header}>Astronomy Pictures</Text>

            <View style={styles.content}>
              <Text style={styles.title}>{this.state.apod.title}</Text>
              <TouchableOpacity
                styles={styles.playBtn}
                onPress={() =>
                  Linking.openURL(this.state.apod.url).catch((err) =>
                    console.log("couldn't load page", err)
                  )
                }
              >
                <View>
                  <Image
                    source={{
                      uri: "https://cdn.icon-icons.com/icons2/2550/PNG/512/play_icon_152559.png",
                    }}
                    style={{ width: 50, height: 50 }}
                  />
                </View>
              </TouchableOpacity>

              <Text style={styles.expTxt}>{this.state.apod.explanation}</Text>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 35,
  },
  title: {
    color: "#70FCF5",
    fontSize: 26,
    fontWeight: "bold",
  },
  expTxt: {
    color: "#fff",
    fontSize: 18,
  },
  content: {
    margin: 20,
  },
});
