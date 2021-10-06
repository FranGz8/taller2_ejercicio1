import React from 'react'; 
import {createStackNavigator} from '@react-navigation/stack'; 
import Series from '../screens/Series'; 

const Stack= createStackNavigator(); 

export default function SeriesStack(){ 
    return( 
        <Stack.Navigator> 
            <Stack.Screen name="Series" component={Series} options={{title:'Series'}}/> 
        </Stack.Navigator> 
    ); 
}