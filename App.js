import HomeScreen from "./src/screens/HomeScreen";
import MarvelScreen from "./src/screens/MarvelScreen";
import StarWarsScreen from './src/screens/StarWarsScreen';
import { View } from "react-native";
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