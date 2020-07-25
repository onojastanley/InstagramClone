import React from "react";
import { View, Text, StyleSheet, Image, Button} from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Components/MainScreen'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
	   <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{
			headerRight: () => (
            <FeatherIcon name="send" style={styles.icon2}></FeatherIcon>),
           headerLeft: () => (
             <Icon name="camera" style={styles.icon}></Icon>),
        title: <Text style={styles.instagram}>Instagram</Text>,
        
        }}
      />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
	    icon: {
  
    fontSize: 40,
	borderColor: "black",
	paddingLeft: 10
  },
    instagram: {
    fontFamily: "almendra-700italic",
    color: "#121212",
    fontSize: 32,
    
  },
    icon2: {
    fontSize: 40,
    height: 41,
    width: 40,
    marginLeft: 517,
    marginTop: 11
  },
  
});