import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const Character = ({ id, image, name, item }) => {
  return (
    <View style={style.wrapper}>
    <TouchableOpacity style={style.container}>
      <Image source={{ uri: image }} style={style.image} />
      <Text style={style.text}>{name}</Text>
      <Text>{item.id}</Text>
    </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300,
  },
  wrapper: {
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 15
  },
  wrapper: {
    flexDirection: 'column',
    alignSelf: 'center'
  },
  container: {
    alignItems: 'center'
  }
});

export default Character;
