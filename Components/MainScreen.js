import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Tabs/Home'
import Search from './Tabs/Search'
import Addmedia from './Tabs/Addmedia'
import Likes from './Tabs/Likes'
import Profile from './Tabs/Profile'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
 
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
		<Tab.Screen name="Addmedia" component={Addmedia} />
        <Tab.Screen name="Likes" component={Likes} />
		 <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    
  );
}