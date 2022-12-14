import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { ActivityIndicator } from "react-native";
import Character from "../components/Characters";
import Comics from "../components/Comics";
import { FlatList } from "react-native-gesture-handler";
import apiParams from "../utils/helpers/marvel";
import axios from "axios";

const { width,height } = Dimensions.get("window");

const MarvelScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [dbch, setDbch] = useState([]);
  const [dbco, setDbco] = useState([]);
  const [error, setError] = useState({});
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    axios
      .get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => setDbch(response.data.data.results))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    axios
      .get(`${baseURL}/v1/public/comics`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => setDbco(response.data.data.results))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Characters</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          horizontal
          data={dbch}
          keyExtractor={({ id }) => id.string}
          renderItem={({ item }) => (
            <Character
              image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
              name={item.name}
              item={item}
            />
          )}
        />
      )}
      <Text style={styles.title}>Comics</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          horizontal
          data={dbco}
          keyExtractor={({ id }) => id.string }
          renderItem={({ item }) => (
            <Comics
              image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
              title={item.title}
              item1={item}
            />
          )}
        />
      )}
     
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 1,
    marginLeft: 7,
    marginTop: 7,
   
  },
  image: {
    width: width ,
    height: height ,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  container: {
    flex: 1, 
    
  }
  
});

export default MarvelScreen;
