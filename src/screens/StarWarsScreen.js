import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ActivityIndicator } from "react-native";
import Character from "../components/Characters";
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
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#181818" />
      ) : (
        <FlatList
          data={db}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Character image={`${item?.image}`} name={item.name} item={item} />
          )}
        />
      )}
    </View>
  );
};

const style = StyleSheet.create({});

export default StarWarsScreen;
