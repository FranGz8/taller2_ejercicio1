import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
export default function Peliculas(){
 return(
 <View>
        <View>
            <Text style={styles.titulo}>Estamos en Peliculas</Text>
        </View>
 </View>
 );
}

const styles = StyleSheet.create({ 
    
    titulo:{
      fontWeight:'bold',
      fontSize:24,
    },
    
}); 