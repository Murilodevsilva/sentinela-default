import React, {useState} from'react';
import { View, Text , StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'
import API from '../../../Api.js'


export default function SignIn() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

  const navigation = useNavigation();
  const login = async () => {
      if(email != '' && password != ''){
          let res = await API.singIn(email,password)
          if(res.token){

          }else{
            alert("E-mail e/ou senha incorreto")
          }
      }else {
        alert("Preencha os campos!")
      }
   } 
  
  return(
    <View style={styles.container}>
    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
    <Text style={styles.message}>Faça aqui o seu login</Text>
    </Animatable.View>
    <Animatable.View animation="fadeInUp" style={styles.containerForm}>

    <Text style={styles.title}>Email</Text>
    <TextInput
    placeholder="Digite um email..."
    style={styles.input}
    value={email}
    onChange={t=>setEmail(t)}
    />
    
    <Text style={styles.title}>Senha</Text>
    <TextInput secureTextEntry={true}
    placeholder="Sua senha"
    value={t=>setPassword(t)}
    style={styles.input}
    />

    <TouchableOpacity style={styles.button}
    onPress={login}
    >
    <Text style={styles.buttontext}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonRegister}>
    <Text style={styles.registertext}
    onPress={ () => navigation.navigate('Register')}
    >Não possui uma conta? Cadastre-se</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonRegister}>
    <Text style={styles.registertext}
    onPress={ () => navigation.navigate('LoginMedic')}
    >Login para Médico</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonRegister}>
    <Text style={styles.registertext}
    onPress={ () => navigation.navigate('LoginAdm')}
    >Login para Administrador</Text>
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
buttonAdm:{
  border:1,
  alignItems:'center'
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