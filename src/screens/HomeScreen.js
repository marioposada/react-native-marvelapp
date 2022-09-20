import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import React from "react";

const { width } = Dimensions.get("window");

const HomeScreen = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.marvelcontainer}>
        <ImageBackground
          source={require("../../assets/fondomarvel.jpeg")}
          style={styles.image}
        >
          <TouchableOpacity 
          style={styles.boton}
          onPress={() => navigation.navigate("Marvel")}
          >
            <Image
              style={styles.logo}
              source={require("../../assets/Marvel_Logo.svg.png")}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.starwarscontainer}>
        <ImageBackground
          source={require("../../assets/fondostarwars.jpeg")}
          style={styles.image}
        >
          <TouchableOpacity 
          style={styles.boton1}
          onPress={() => navigation.navigate("StarWars")}
          >
            <Image
              style={styles.logo1}
              source={require("../../assets/StarWars-Logo.webp")}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marvelcontainer: {
    borderWidth: 2,
    flex: 1,
  },
  starwarscontainer: {
    borderWidth: 2,
    flex: 1,
  },
  image: {
    width: width,
    height: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 130,
    height: 50,
    borderRadius: 5,
    
  },
  logo1: {
    width: 130,
    height: 50,
    borderRadius: 5
  },
  boton: {
    alignItems: "center",
    backgroundColor: "#E11C23",
    padding: 10,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 3, 
  },
  boton1: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 3, 
    backgroundColor: "#B29051",// Android
 

  }
});

export default HomeScreen;
