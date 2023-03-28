import React ,{useEffect}from 'react';
import API from '../../Routes/api'
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
 import {useNavigation} from '@react-navigation/native';
  import * as Animatable from 'react-native-animatable';

 


export default function Welcome() {
   const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
               <Animatable.Image
               delay={5}
               animation="fadeIn"
               source={require('../../../assets/SENTINELA.png')}
               style={{width: '90%'}}
               resizeMode="contain"
               />
            </View>

<Text style={styles.title}>Bem vindo</Text>
            <Animatable.View delay={1500} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.slogan}>O Sentinela é um aplicativo feito para levar sua rotina medica na palma da mão</Text>
                <Text style={styles.slogan1}>Esqueça papeis, caminhe conosco para o futuro!</Text>
                <Text style={styles.text}>Clique em acessar para seguir com seu login ou cadastro </Text>
                <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText} >ACESSAR</Text>
                </TouchableOpacity>

            </Animatable.View>
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#033859',
    },
    containerLogo:{
        flex:2,
        justifyContent: 'center',
        alignItems:'center',
        width: '100%'
    },
    containerForm: {
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,paddingStart: '5%',
        paddingEnd: '5%'

    },
    title:{
      position:"absolute",
      bottom:"15%",
      left:"25%",
      alignItems:"center",
      fontFamily:'Arial',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 28,
        color:'white',
        paddingBottom:10,
        textAlign:'center'
    },
    text: {
        color :'black',
        backgroundColor:'#CCC',
        textAlign:'center',
        fontSize:15,
        padding:20,
        marginTop:20
    },
    button:{
        position:'absolute',
        backgroundColor: '#033859',
        borderRadius: 40,
        paddingVertical:15,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:'Arial',
        fontWeight:'bold'
    },
    buttonText:{
      color:'white',
      fontSize: 16
    },
    slogan:{
      textAlign:'center',
      fontSize:20,
      marginTop:25,
      color:'#aaa',
      fontFamily:'arial'
    },
     slogan1:{
      textAlign:'center',
      fontSize:20,
      color:'#aaa',
      fontFamily:'arial'
    }

})
