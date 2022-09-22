import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const CharacterStarwars = ({ id, image, name, item }) => {
  return (
    <View style={style.wrapper}>
      <TouchableOpacity style={style.container}>
        <Image source={{ uri: image }} style={style.image} />
        <View>
          <Text style={style.separator}></Text>
        </View>
        <Text style={style.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "600",
    backgroundColor: "#282727",
    width: "100%",
    color: "#fff",
    height: 90,
    paddingTop: 10,
    paddingLeft: 10,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  wrapper: {
    alignSelf: "center",
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    backgroundColor: "#181818",
  },
  wrapper: {
    flexDirection: "column",
    alignSelf: "center",
  },
  container: {
    alignItems: "center",
    marginHorizontal: 8,
    marginVertical: 15,
    width: 350,
    height: 400,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: 'gray',
    borderWidth: 0.2
  },
  separator: {
    height: 12,
    backgroundColor: "#EDEC51",
    width: 350,
  },
});

export default CharacterStarwars;
