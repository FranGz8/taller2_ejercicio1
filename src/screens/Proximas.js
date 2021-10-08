import React from 'react';
import {View,Text,Image,StyleSheet, ScrollView} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

export default function Proximas(){
return(
    <View>
        <ScrollView>

            <View style={styles.card}>
                <Text style={styles.titulo}>Titulo: Sonic La Pelicula</Text>
                <YoutubeIframe height={300} play={false} videoId={'Xb3E8eWZ1mk'}/>
                <Text style={styles.descripción}>Descripción: Sonic intenta navegar por las complejidades de la vida en la Tierra con su nuevo mejor amigo, un humano llamado Tom Wachowski. Pronto deben unir fuerzas para evitar que el malvado Dr. Robotnik capture a Sonic y use sus poderes para dominar el mundo.</Text>
                <Text style={styles.fecha}>Fecha de estreno: Enero 2022</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.titulo}>Titulo: Space Jam 2</Text>
                <YoutubeIframe height={300} play={false} videoId={'z7PSyWuArVQ'}/>
                <Text style={styles.descripción}>Descripción: Atrapado en el espacio digital, la superestrella del baloncesto LeBron James se une a la banda de los Looney Tunes para derrotar al Goon Squad en un juego de baloncesto y salvar a su hijo.</Text>
                <Text style={styles.fecha}>Fecha de estreno: Enero 2022</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.titulo}>Titulo: Mortal Kombat</Text>
                <YoutubeIframe height={300} play={false} videoId={'Y2O4RCdwCGM'}/>
                <Text style={styles.descripción}>Descripción: Cole Young, el luchador de MMA, acostumbrado a recibir palizas por dinero, desconoce su ascendencia, y tampoco sabe por qué el emperador Shang Tsung de Outworld ha enviado a su mejor guerrero, Sub-Zero, un Cryomancer sobrenatural, para dar caza a Cole.</Text>
                <Text style={styles.fecha}>Fecha de estreno: Enero 2022</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.titulo}>Titulo: Breaking Band</Text>
                <YoutubeIframe height={300} play={false} videoId={'HhesaQXLuRY'}/>
                <Text style={styles.descripción}>Descripción: Narra la historia de Walter White, un profesor de química con problemas económicos a quien le diagnostican un cáncer de pulmón inoperable. Para pagar su tratamiento y asegurar el futuro económico de su familia comienza a cocinar y vender metanfetamina, junto con Jesse Pinkman, un antiguo alumno suyo.</Text>
                <Text style={styles.fecha}>Fecha de estreno: Noviembre 2021</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.titulo}>Titulo: El juego del calamar</Text>
                <YoutubeIframe height={300} play={false} videoId={'tu4b40AB3is'}/>
                <Text style={styles.descripción}>Descripción: La serie narra la historia de un grupo de personas en riesgo de exclusión que arriesgan sus vidas en una misteriosa competición de supervivencia, basada en juegos infantiles, con un premio de 45 600 millones de wones</Text>
                <Text style={styles.fecha}>Fecha de estreno: Diciembre 2021</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.titulo}>Titulo: Peaky Blinders</Text>
                <YoutubeIframe height={300} play={false} videoId={'H282c9q2MUU'}/>
                <Text style={styles.descripción}>Descripción: La serie está protagonizada por Cillian Murphy y se centra en una familia de gánsteres de Birmingham, durante los años veinte y del ascenso de su jefe, Thomas Shelby, un mafioso que dominará toda Inglaterra.</Text>
                <Text style={styles.fecha}>Fecha de estreno: Diciembre 2021</Text>
            </View>
        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({ 

card:{
    backgroundColor:'rgb(142, 142, 143)',
    marginTop: 5,
},

titulo:{
    fontWeight:'bold',
    fontSize:22,
    color: '#fff',
    textAlign: 'center',
},

descripción:{
    color: '#fff',
    bottom: 50,
    fontSize:16,
    marginHorizontal:10,

},

fecha:{
    color: '#fff',
    bottom: 25,
    fontSize:16,
    marginHorizontal:10,
}
}); 
