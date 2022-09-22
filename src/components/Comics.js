import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const Comics = ({ id, image, title ,item1}) => {
  return (
    <View style={style.wrapper}>
    <TouchableOpacity style={style.container}>
      <Image source={{ uri: image }} style={style.image} />
      <Text style={style.text}>{title}</Text>
      <Text>{item1.id}</Text>
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

export default Comics;
