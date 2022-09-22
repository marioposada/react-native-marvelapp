import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const Comics = ({ id, image, title ,item1}) => {
  return (
    <View style={style.wrapper}>
    <TouchableOpacity style={style.container}>
      <Image source={{ uri: image }} style={style.image} />
      <View>
          <Text style={style.separator}></Text>
        </View>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    justifyContent: "center",
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#151515',
    width: '100%',
    color: '#fff',
    height: 60,
    paddingTop: 10,
    paddingLeft: 10
  },
  image: {
    width: 240,
    height: 240,
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
    alignItems: 'center',
    marginHorizontal: 8
  },
  separator: {
    height: 8,
    backgroundColor: "#e62429",
    width: 240,
  },
});

export default Comics;
