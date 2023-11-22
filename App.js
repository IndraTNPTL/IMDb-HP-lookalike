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

import { AntDesign } from "@expo/vector-icons";

import colors from "./assets/styles/colors";

import Constants from "expo-constants";

// Images
import logoIMDB from "./assets/logo_imdb.png";
import filmImage from "./assets/images/film.webp";

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
          <Text style={styles.h1}>The Color Purple</Text>

          {/* -----> SUBTITLES */}
          <View style={styles.rowContainer}>
            <Text style={styles.subtitlesText}>2023</Text>
            <Text style={styles.subtitlesText}>PG-13</Text>
            <Text style={styles.subtitlesText}>2h 49min</Text>
            <Text style={styles.subtitlesText}>Musical, Drama, Historical</Text>
          </View>

          {/* MAIN IMAGE AND INFOS CONTAINER */}
          <View style={styles.coverView}>
            <Image source={filmImage} style={styles.coverImage} />
            <View style={styles.coverViewRight}>
              <Text numberOfLines={4} style={styles.coverText}>
                A decades-spanning tale of love and resilience and of one
                woman's journey to independence. Celie faces many hardships in
                her life, but ultimately finds extraordinary strength and hope
                in the unbreakable bonds of sisterhood.
              </Text>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => {
                  console.log("Coming soon");
                }}
              >
                <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* ICON BLOCS */}
          <View style={styles.iconView}>
            <View style={styles.iconBloc}>
              <AntDesign name="star" size={27} color="yellow" />
              <Text style={styles.buttonText}>
                <Text style={styles.textHighlight}>10</Text>/10
              </Text>
              <Text style={styles.subtitlesText}>7.7 M</Text>
            </View>
            <View style={styles.iconBloc}>
              <AntDesign name="staro" size={27} color="white" />
              <Text style={styles.buttonText}>RATE THIS</Text>
            </View>
            <View style={styles.iconBloc}>
              <View style={styles.rateScoreContainer}>
                <Text style={styles.buttonText}>74</Text>
              </View>
              <Text style={styles.buttonText}>Metascore</Text>
              <Text style={styles.subtitlesText}>47 critics reviews</Text>
            </View>
          </View>
        </View>

        {/* -----------> SECTION 2 */}
        <View style={styles.bottomPart}>
          <View style={styles.topContainer}>
            <Text style={styles.h2}>Top Billed Cast</Text>
            <TouchableOpacity
              onPress={() => {
                console.log("Coming soon");
              }}
            >
              <Text style={[styles.buttonText, styles.blueText]}>SEE ALL</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carrousel}
          >
            <View style={styles.actorBloc}>
              <Image
                source={require("./assets/images/halle.jpeg")}
                style={styles.imageCarousel}
              ></Image>
              <View style={styles.infosText}>
                <Text numberOfLines={1} style={styles.buttonText}>
                  Halle Bailey
                </Text>
                <Text style={styles.subtitlesText}>Nettie Harris</Text>
              </View>
            </View>

            <View style={styles.actorBloc}>
              <Image
                source={require("./assets/images/fantasia.jpeg")}
                style={styles.imageCarousel}
              ></Image>
              <View style={styles.infosText}>
                <Text numberOfLines={1} style={styles.buttonText}>
                  Fantasia Barrino
                </Text>
                <Text style={styles.subtitlesText}>Celie</Text>
              </View>
            </View>

            <View style={styles.actorBloc}>
              <Image
                source={require("./assets/images/danielle.jpeg")}
                style={styles.imageCarousel}
              ></Image>
              <View style={styles.infosText}>
                <Text numberOfLines={1} style={styles.buttonText}>
                  Danielle Brooks
                </Text>
                <Text style={styles.subtitlesText}>Sofia</Text>
              </View>
            </View>

            <View style={styles.actorBloc}>
              <Image
                source={require("./assets/images/taraji.jpeg")}
                style={styles.imageCarousel}
              ></Image>
              <View style={styles.infosText}>
                <Text numberOfLines={1} style={styles.buttonText}>
                  Taraji P. Henson
                </Text>
                <Text style={styles.subtitlesText}>Shug Avery</Text>
              </View>
            </View>

            <View style={styles.actorBloc}>
              <Image
                source={require("./assets/images/ciara.jpeg")}
                style={styles.imageCarousel}
              ></Image>
              <View style={styles.infosText}>
                <Text numberOfLines={1} style={styles.buttonText}>
                  Ciara
                </Text>
                <Text style={styles.subtitlesText}>Nettie Harris</Text>
              </View>
            </View>

            <View style={styles.actorBloc}>
              <Image
                source={require("./assets/images/tamela.jpeg")}
                style={styles.imageCarousel}
              ></Image>
              <View style={styles.infosText}>
                <Text numberOfLines={1} style={styles.buttonText}>
                  Tamela J. Mann
                </Text>
                <Text style={styles.subtitlesText}>First Lady</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.infoSection}>
            <View style={styles.infosText}>
              <Text style={styles.buttonText}>Director</Text>
              <Text style={styles.subtitlesText}>Blitz Bazawule</Text>
            </View>
            <View style={styles.infosText}>
              <Text style={styles.buttonText}>Writers</Text>
              <Text style={styles.subtitlesText}>
                Marcus Gardley, Alice Walker & Marsha Norman
              </Text>
            </View>
          </View>
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
    marginTop: 20,
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

  blueText: {
    color: colors.blue,
  },

  h1: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "200",
    letterSpacing: 0.7,
    marginBottom: 15,
  },

  h2: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "200",
    letterSpacing: 0.7,
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
    fontWeight: "300",
  },

  iconView: { flexDirection: "row", marginVertical: 17 },

  iconBloc: {
    flex: 1,
    // borderColor: "red",
    // borderWidth: 2,
    paddingVertical: 10,
    alignItems: "center",
    gap: 5,
  },

  textHighlight: {
    fontSize: 18,
    fontWeight: "500",
  },

  rateScoreContainer: {
    marginTop: 5,
    marginBottom: 2,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: 20,
  },

  topContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 14,
    marginBottom: 20,
  },

  actorBloc: {
    height: 250,
    width: 130,
    backgroundColor: colors.grey,
    borderRadius: 3,
  },

  carrousel: {
    gap: 10,
  },

  imageCarousel: {
    width: "100%",
    height: "78%",
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },

  infosText: {
    paddingVertical: 10,
    paddingHorizontal: 7,
    gap: 4,
  },

  infoSection: {
    marginTop: 10,
  },
});
