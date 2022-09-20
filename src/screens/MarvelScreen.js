import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { helpHttp } from "../utils/helpers/helpHttp";

const MarvelScreen = () => {
  const [db, setDb] = useState([]);

  const options = {
    params: {
      apikey: "b851f19c35b735d46106947c516cc797",
      ts: "1000",
      hash: "658dde78390b639c423a0952c71709bd",
    },
    Headers: {
      "Content-Type": "application/json",
    },
  };

  let api = helpHttp();
  let url = `http://gateway.marvel.com/v1/public/comics?ts=${options.params.ts}&apikey=${options.params.apikey}&hash=${options.params.hash}`;

  useEffect(() => {
    api.get(url).then((res) => {
      console.warn(res);
    });
  }, []);

  return (
    <View>
      <Text>Marvel Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default MarvelScreen;
