import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
export default function Proximas(){
return(
<View>
<View>
<Text style={styles.titulo}>Estamos en Proximas</Text>
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