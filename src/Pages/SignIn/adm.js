import React from'react';
import { View, Text , StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'


export default function SignIn() {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
    <Text style={styles.message}> Bem vindo Administrador </Text>
    </Animatable.View>
    <Animatable.View animation="fadeInUp" style={styles.containerForm}>

    <Text style={styles.title}>Email</Text>
    <TextInput
    placeholder="Digite Seu Codigo..."
    style={styles.input}
    />
    
    <Text style={styles.title}>Senha</Text>
    <TextInput secureTextEntry={true}
    placeholder="Sua senha"
    style={styles.input}
    />

    <TouchableOpacity style={styles.button}>
    <Text style={styles.buttontext}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonRegister}>
    <Text style={styles.registertext}
    onPress={ () => navigation.navigate('RegisterAdm')}
    >Não possui uma conta? Cadastre-se</Text>
    </TouchableOpacity>
    </Animatable.View>
    </View>
  );
}
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#033859'  
},
containerHeader:{
  marginTop:'14%',
  marginBottom:'8%',
  paddingStart:'5%'
},
message: {
  fontSize:28,
  fontWeight:'bold',
  color:'#FFF'
},
containerForm:{
  backgroundColor:'#FFF',
  flex:1,
  borderTopLeftRadius: 25,
  borderTopRightRadius:25,
  paddingStart: '5%',
  paddingEnd: '5%'
},
title: {
  fontSize:20,
  marginTop: 28
},
input:{
  border:1,
  height:40,
  marginBottom: 12,
  fontSize: 16
},
buttonRegister: {
  color:'#CCC',
  alignItems:'center',
  paddingBottom:'2%',
  paddingTop:'2%'
},
buttontext:{
  textAlign:'center',
  color:'white',
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
button:{
  paddingTop:'5%'
}

});