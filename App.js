import { StatusBar } from "expo-status-bar";

import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import colors from "./assets/styles/colors";

import Constants from "expo-constants";

// Images
import logoIMDB from "./assets/logo_imdb.png";
import interstellarImage from "./assets/images/film.jpg";

export default function App() {
  // !-- Pour voir l'objet avec une indentation

  // console.log("Constants>>", JSON.stringify(Constants, null, 2));
  // console.log(">>>", Constants.statusBarHeight);

  // !-- Pour voir l'objet avec une indentation
  // console.log("Platform>>", JSON.stringify(Platform, null, 2));
  // console.log(">>>", Platform.OS);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* -----------> HEADER */}
        <View style={[styles.header, styles.headerGrey]}>
          <Image source={logoIMDB} style={styles.logo} />
        </View>

        {/* -----------> SECTION 1 */}
        <View style={styles.topPart}>
          {/* -----> H1 */}
          <Text style={styles.h1}>Interstellar</Text>

          {/* -----> SUBTITLES */}
          <View style={styles.rowContainer}>
            <Text style={styles.subtitlesText}>2014</Text>
            <Text style={styles.subtitlesText}>PG-13</Text>
            <Text style={styles.subtitlesText}>2h 49min</Text>
            <Text style={styles.subtitlesText}>Adventure, Drama, Sci-Fi</Text>
          </View>

          {/* MAIN IMAGE AND INFOS CONTAINER */}
          <View style={styles.coverView}>
            <Image source={interstellarImage} style={styles.coverImage} />
            <View style={styles.coverViewRight}>
              <Text style={styles.coverText}>
                A team of explorers travel throught a wormhole in space in an
                attempt to ensure humanity's survival
              </Text>
              <TouchableOpacity style={styles.buttonAdd}>
                <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.iconView}>
            <View style={styles.iconBloc}></View>
            <View style={styles.iconBloc}></View>
            <View style={styles.iconBloc}></View>
          </View>
        </View>

        {/* -----------> SECTION 2 */}
        <View style={[styles.bottomPart, styles.containerBottomMargin]}>
          <Text>Coucou je suis l'app d'Indra</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  scrollView: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },

  header: {
    backgroundColor: colors.grey,

    height: 60,
    paddingLeft: 18,
    paddingRight: 18,
    justifyContent: "center",
  },

  logo: {
    height: 35,
    width: 70,
    marginTop: 12,
    marginBottom: 12,
  },

  topPart: {
    backgroundColor: colors.darkGrey,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    justifyContent: "center",
  },

  bottomPart: {
    backgroundColor: colors.darkGrey,

    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: "center",
  },

  rowContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  whiteText: {
    color: "#ffffff",
  },

  h1: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "200",
    letterSpacing: 0.7,
    marginBottom: 15,
  },

  subtitlesText: { color: "grey", fontSize: 12 },

  primaryText: {
    color: "white",
    marginTop: 10,
    lineHeight: 20,
    fontSize: 14,
  },

  coverView: {
    flexDirection: "row",
  },

  coverViewRight: {
    width: "70%",
  },

  coverImage: {
    height: 150,
    width: 100,
  },

  coverText: {
    color: "white",
    marginLeft: 15,
    marginVertical: 5,
    lineHeight: 20,
    fontSize: 14,
  },

  buttonAdd: {
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    height: 37,
    width: "100%",
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 3,
  },

  buttonText: {
    color: "white",
    fontSize: 14,
  },

  iconView: { flexDirection: "row", marginVertical: 17 },

  iconBloc: {
    flex: 1,
    borderColor: "red",
    borderWidth: 2,
    height: 50,
  },
});
