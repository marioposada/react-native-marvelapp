import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ActivityIndicator } from "react-native";
import CharacterStarwars from "../components/CharacterStarwars";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";

const StarWarsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [db, setDb] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    axios
      .get("https://akabab.github.io/starwars-api/api/all.json")
      .then((response) => setDb(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    console.log(db);
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.line1}></Text>
      <Text style={style.title}>Characters</Text>
      <Text style={style.line}></Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#181818" />
      ) : (
        <FlatList
          data={db}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CharacterStarwars
              image={`${item?.image}`}
              name={item.name}
              item={item}
            />
          )}
        />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 12,
    marginTop: 7,
    color: '#fff'
   
  },
  container: {
    flex: 1,
    backgroundColor: '#151515'
  },
  line: {
    height: 2,
    backgroundColor: "#3A3A3A",
    width: 360,
    marginLeft: 12
  },
  line1: {
    marginTop:20,
    height: 2,
    backgroundColor: "#3A3A3A",
    width: 360,
    marginLeft: 12
  }
});

export default StarWarsScreen;
