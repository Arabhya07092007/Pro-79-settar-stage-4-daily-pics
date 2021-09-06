import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  StatusBar,
} from "react-native";
// import { Header } from "react-native-elements";
import { WebView } from "react-native-webview";

export default class StarMap extends React.Component {
  constructor() {
    super();
    this.state = {
      longitude: "",
      latitude: "",
    };
  }
  render() {
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${this.state.longitude}&latitude=${this.state.latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} barStyle={"light-content"} />

        <Text
          style={{
            textAlign: "center",
            fontSize: 40,
            fontWeight: "bold",
            margin: 10,
          }}
        >
          Star map !
        </Text>
        <WebView
          scalesPageToFit={true}
          source={{
            uri: path,
          }}
          style={{}}
        />
        <View style={styles.cont}>
          <Text
            style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
          >
            Enter latitude and logitude
          </Text>
          <View style={{ marginVertical: 20 }}>
            <TextInput
              style={styles.loginDocs}
              placeholder="Latitude"
              placeholderTextColor="grey"
              value={this.state.latitude}
              onChangeText={(text) => {
                this.setState({
                  latitude: text,
                });
              }}
            />
            <TextInput
              style={styles.loginDocs}
              placeholder="Longitude"
              placeholderTextColor="grey"
              value={this.state.longitude}
              onChangeText={(text) => {
                this.setState({
                  longitude: text,
                });
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  loginDocs: {
    paddingLeft: 30,
    fontSize: 25,
    paddingRight: 30,
  },
  cont: {
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    bottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
});
