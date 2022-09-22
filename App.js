import HomeScreen from "./src/screens/HomeScreen";
import MarvelScreen from "./src/screens/MarvelScreen";
import React from 'react'
import StarWarsScreen from './src/screens/StarWarsScreen';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const navigator = createStackNavigator ({
  Home: HomeScreen,
  Marvel: MarvelScreen,
  StarWars: StarWarsScreen
},
{
initialRouteName: 'Home',

})

export  default createAppContainer(navigator)