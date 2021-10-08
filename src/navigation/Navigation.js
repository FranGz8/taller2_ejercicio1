import React from 'react';
import Peliculas from '../screens/Peliculas';
import Series from '../screens/Series';
import Proximas from '../screens/Proximas';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab=createBottomTabNavigator();

export default function Navigation(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Peliculas" component={Peliculas} options={{tabBarLabel:"Peliculas", tabBarIcon: ({ color,size }) => (
          <Icon name="movie" size={size+10} color={color} />
        ) }}  />
      <Tab.Screen name="Series" component={Series} options={{tabBarLabel:"Series", tabBarIcon: ({ color,size }) => (
          <Icon name="live-tv" size={size+10} color={color} />
        ) }}  />
        <Tab.Screen name="Próximamente" component={Proximas} options={{tabBarLabel:"Proximas", tabBarIcon: ({ color,size }) => (
          <Icon name="queue-play-next" size={size+10} color={color} />
        ) }}  />
    </Tab.Navigator>
  );
}
