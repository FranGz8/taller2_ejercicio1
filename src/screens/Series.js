import React from 'react';
import {View,Text,Image,StyleSheet, ScrollView, TouchableHighlight, Linking} from 'react-native';
export default function Series(){
return(
    <View>
    <ScrollView>
    <View style={styles.listado}>
    <Text style={styles.titulo}>Comedia</Text>
      <View style={styles.listaItem}>
        <TouchableHighlight onPress={() => Linking.openURL('https://youtube.com/watch?v=_CazeprALO8')}>
        <Image  style={styles.foto} source={require('../img/serieComedia1.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>The Big Bang Theory</Text>
            <Text style={styles.descripcion}>Temporadas: 12</Text>
        </View>
      </View>

      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=E8cXKMR9a1Q')}>
        <Image  style={styles.foto} source={require('../img/serieComedia2.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>Rick y Morty</Text>
            <Text style={styles.descripcion}>Temporadas: 5</Text>
        </View>
      </View>

      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=fAFn9kZGX8s')}>
        <Image  style={styles.foto} source={require('../img/serieComedia3.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>Modern Family</Text>
            <Text style={styles.descripcion}>Temporadas: 11</Text>
        </View>
      </View>

      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=4iveIYz-irQ')}>
        <Image  style={styles.foto} source={require('../img/serieComedia4.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>Dos hombres y medio</Text>
            <Text style={styles.descripcion}>Temporadas: 12</Text>
        </View>
      </View>

      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-pdCvr2sQw4')}>
        <Image  style={styles.foto} source={require('../img/serieComedia5.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>Los Simpson</Text>
            <Text style={styles.descripcion}>Temporadas: 33</Text>
        </View>
      </View>
    </View>


    <View style={styles.listado}>
    <Text style={styles.titulo}>Aventura</Text>
      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=IqZ48OcUHD8')}>
        <Image  style={styles.foto} source={require('../img/serieAventura1.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>The Mandalorian</Text>
            <Text style={styles.descripcion}>Temporadas: 2</Text>
        </View>
      </View>

      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=uFdqDMxlx88')}>
        <Image  style={styles.foto} source={require('../img/serieAventura2.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>Flecha</Text>
            <Text style={styles.descripcion}>Temporadas: 8</Text>
        </View>
      </View>

      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=CLVZmXzeZx8')}>
        <Image  style={styles.foto} source={require('../img/serieAventura3.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>Vikingos</Text>
            <Text style={styles.descripcion}>Temporadas: 5</Text>
        </View>
      </View>

      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=SfxgMQ0QZFg')}>
        <Image  style={styles.foto} source={require('../img/serieAventura4.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>Star Wars: La guerra de los clones</Text>
            <Text style={styles.descripcion}>Temporadas: 7</Text>
        </View>
      </View>

      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=wcvbK_k_MgI')}>
        <Image  style={styles.foto} source={require('../img/serieAventura5.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>Loki</Text>
            <Text style={styles.descripcion}>Temporadas: 1</Text>
        </View>
      </View>
    </View>


    <View style={styles.listado}>
    <Text style={styles.titulo}>Fantasia</Text>
      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=GYoxdM5t9Iw')}>
        <Image  style={styles.foto} source={require('../img/serieFantasia1.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>Merlín</Text>
            <Text style={styles.descripcion}>Temporadas: 5</Text>
        </View>
      </View>

      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=_l9HkDJnwLw')}>
        <Image  style={styles.foto} source={require('../img/serieFantasia2.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>The Flash</Text>
            <Text style={styles.descripcion}>Temporadas: 8</Text>
        </View>
      </View>

      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=VxfFBr-GoJI')}>
        <Image  style={styles.foto} source={require('../img/serieFantasia3.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>Supergirl</Text>
            <Text style={styles.descripcion}>Temporadas: 6</Text>
        </View>
      </View>

      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=H_G6yyibN9g')}>
        <Image  style={styles.foto} source={require('../img/serieFantasia4.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>DC: Leyendas del mañana</Text>
            <Text style={styles.descripcion}>Temporadas: 6</Text>
        </View>
      </View>

      <View style={styles.listaItem}>
      <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=ncTzwM2qw8E')}>
        <Image  style={styles.foto} source={require('../img/serieFantasia5.jpg')} />
        </TouchableHighlight>
        <View style={styles.data}>
            <Text style={styles.nombre}>Titanes</Text>
            <Text style={styles.descripcion}>Temporadas: 1</Text>
        </View>
      </View>
    </View>    

    </ScrollView>
</View>
);
}

const styles = StyleSheet.create({ 
    
    listado:{

    },

    titulo:{
      fontWeight:'bold',
      fontSize:24,
      marginVertical:10
    },
    
    
    foto:{
      marginVertical:5,
      left:40,
      width:122,
      height:162,
    },
    
    listaItem:{
      flexBasis:'20%',
      backgroundColor: '#EEEEEE',
      flexDirection:'row',

    },

    data:{

      },
    
    nombre:{
        fontWeight:'bold',
        fontSize:22,
        color:'rgb(0, 122, 255)',
        left:50,
        height:60,
        width: 200,
    },

    descripcion:{
        fontSize:18,
        color:'#000',
        left:50,
        marginVertical:45
    },
    
    }); 