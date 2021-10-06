import React from 'react'; 
import {createStackNavigator} from '@react-navigation/stack'; 
import Proximas from '../screens/Proximas'; 

const Stack= createStackNavigator(); 

export default function ProximasStack(){ 
    return( 
        <Stack.Navigator> 
            <Stack.Screen name="Proximas" component={Proximas} options={{title:'Proximas'}}/> 
        </Stack.Navigator> 
    ); 
}