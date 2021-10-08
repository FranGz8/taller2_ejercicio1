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
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=UxER50XHW-I')}>
              <Image style={styles.pelicula} source={require('../img/comedia1.jpg')} />
              </TouchableHighlight>  
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=PnElvy4akfU')}>
              <Image style={styles.pelicula} source={require('../img/comedia2.jpg')} />
              </TouchableHighlight>   
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Sg7Il74pOxE')}>
              <Image style={styles.pelicula} source={require('../img/comedia3.jpg')} />
              </TouchableHighlight> 
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=YHXohmyGsNM')}>
              <Image style={styles.pelicula} source={require('../img/comedia4.jpg')} />
              </TouchableHighlight>   
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=qhFPeFv4znA')}>
              <Image style={styles.pelicula} source={require('../img/comedia5.jpg')} />
              </TouchableHighlight>  
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=b8ht6ObDlyQ')}>
              <Image style={styles.pelicula} source={require('../img/comedia6.jpg')} />
              </TouchableHighlight>  
            </View>
          </ScrollView>
        </View>
        </ScrollView>

        <ScrollView>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Romance</Text>
          <ScrollView horizontal>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=l-s3xpv0Q0U')}>
              <Image style={styles.pelicula} source={require('../img/romance1.jpg')} />
              </TouchableHighlight> 
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Kw1cMZ6vDFg')}>
              <Image style={styles.pelicula} source={require('../img/romance2.jpg')} />
              </TouchableHighlight> 
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=77wgbw-NKnY')}>
              <Image style={styles.pelicula} source={require('../img/romance3.jpg')} />
              </TouchableHighlight> 
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jposnP4GKyk')}>
              <Image style={styles.pelicula} source={require('../img/romance4.jpg')} />
              </TouchableHighlight> 
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=6OyYxI08usY')}>
              <Image style={styles.pelicula} source={require('../img/romance5.jpg')} />
              </TouchableHighlight>  
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=rtX8VWpnzl8')}>
              <Image style={styles.pelicula} source={require('../img/romance6.jpg')} />
              </TouchableHighlight>   
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
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=KdL8ucqi1F8')}>
              <Image style={styles.pelicula} source={require('../img/accion2.jpg')} />
              </TouchableHighlight> 
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=RIKOJP9PHP0')}>
              <Image style={styles.pelicula} source={require('../img/accion3.jpg')} />
              </TouchableHighlight> 
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=VEabO-7462s')}>
              <Image style={styles.pelicula} source={require('../img/accion4.jpg')} />
              </TouchableHighlight>   
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=NZNHs7gyANA')}>
              <Image style={styles.pelicula} source={require('../img/accion5.jpg')} />
              </TouchableHighlight>   
            </View>
            <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=WYPw5oQqaOM')}>
              <Image style={styles.pelicula} source={require('../img/accion6.jpg')} />
              </TouchableHighlight>
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