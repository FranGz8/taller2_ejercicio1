import React from 'react';
import {View,Text,Image,StyleSheet, ScrollView, TouchableHighlight, Linking, Alert} from 'react-native';

export default function Peliculas(){

 return(
 <View>
        <ScrollView>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Comedia</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight onPress={()=>{openModal1()}}>
              <Image style={styles.pelicula} source={require('../img/comedia1.jpg')} />
              </TouchableHighlight>  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/comedia2.jpg')} />  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/comedia3.jpg')} />  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/comedia4.jpg')} />  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/comedia5.jpg')} />  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/comedia6.jpg')} />  
            </View>
          </ScrollView>
        </View>
        </ScrollView>

        <ScrollView>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Romance</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight onPress={()=>{openModal1()}}>
              <Image style={styles.pelicula} source={require('../img/romance1.jpg')} />
              </TouchableHighlight>  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/romance2.jpg')} />  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/romance3.jpg')} />  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/romance4.jpg')} />  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/romance5.jpg')} />  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/romance6.jpg')} />  
            </View>
          </ScrollView>
        </View>
        </ScrollView>

        <ScrollView>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Acción</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight onPress={() => Linking.openURL('https://youtube.com/watch?v=_CazeprALO8')}>
              <Image style={styles.pelicula} source={require('../img/accion1.jpg')} />
              </TouchableHighlight>  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/accion2.jpg')} />  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/accion3.jpg')} />  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/accion4.jpg')} />  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/accion5.jpg')} />  
            </View>
            <View>
              <Image style={styles.pelicula} source={require('../img/accion6.jpg')} />  
            </View>
          </ScrollView>
        </View>
        </ScrollView>

 </View>
 );
}

const styles = StyleSheet.create({ 
    banner:{ 
      height:250, 
      flex:1 
    },
    
    titulo:{
      fontWeight:'bold',
      fontSize:24,
      marginVertical:10
    },
    
    contenedor:{
      marginHorizontal:10
    },
    
    pelicula:{
      marginRight:10
    },

    }); 