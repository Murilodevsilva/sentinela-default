import React from 'react';
import { View,Text,TextInput, StyleSheet,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'


export default function Register() {
  const navigation = useNavigation();
  return (

     <View style={styles.container}>
    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
    <Text style={styles.text}>Cadastro de Medico</Text>

    </Animatable.View>
    <Animatable.View style={styles.containerForm}>
    <Text style={styles.title}>Preencha os campos a baixo para se cadastrar</Text>
    <TextInput style={styles.Input}
    placeholder='Nome'
    />
    <TextInput style={styles.Input}
    placeholder='Sobrenome'
    />
    <TextInput style={styles.Input}
    placeholder='Data de Nascimento'
    />
    <TextInput style={styles.Input}
    placeholder='CPF'
    />
    <TextInput style={styles.Input}
    placeholder='RG'
    />
    <TextInput style={styles.Input}
    placeholder='CRM'
    />
    <TextInput style={styles.Input}
    placeholder='Hospital de referencia'
    />
     <Text>Precisamos de uma foto sua para autenticidade!</Text>
    <TouchableOpacity
    style={styles.cameraButton}
     onPress={ () => navigation.navigate('Camera')}><Text style={styles.textCamera}>Camera</Text></TouchableOpacity>


 <TouchableOpacity
                style={styles.button}
                onChange={'useState'}
                >
                    <Text style={styles.return} >Registrar</Text>
                </TouchableOpacity>
    <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.return} >Já é cadastrado ?</Text>
                </TouchableOpacity>
    </Animatable.View>
    </View>
  )
}
const styles= StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:'#033859'
  },
    containerHeader: {
     marginTop:'14%',
  marginBottom:'8%',
  paddingStart:'5%'
    },
    text: {
      fontSize:28,
      color:'white',
      fontWeight:'bold',
    },
    Input:{
          padding:'5%',
          color:'#ccc',
    },
    title:{
      padding:'5%',
      fontSize:20,
      fontWeight:'bold'
    },
    containerForm:{
       backgroundColor:'#FFF',
  flex:1,
  borderTopLeftRadius: 25,
  borderTopRightRadius:25,
  paddingStart: '5%',
  paddingEnd: '5%'
      
    },
    return:{
     textAlign:'center',
  color:'white',
        backgroundColor: '#033859',
        borderRadius: 20,
        paddingVertical: 5,
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
    },
    cameraButton:{
      backgroundColor:'#033859',
      fontSize: 12,
      margin:10,
      padding:10,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:5,
    },
     textCamera:{
      color: '#FFF'
    }
})
