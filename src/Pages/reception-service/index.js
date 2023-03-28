import React, {useState} from'react';
import { View, Text , StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'


export default function ReceptionService() {
  const [showResults, setShowResults] = useState('')
  const navigation = useNavigation();
  
  return(
    <View style={styles.container}>
    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
    <Text style={styles.message}> Paciente </Text>
    </Animatable.View>
    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
<View style={styles.photo}><Image style={styles.photoPerfil} source={{uri:('https://cdn.icon-icons.com/icons2/933/PNG/512/user-shape_icon-icons.com_72487.png')}}></Image></View>
    <Text style={styles.title}>Nome do paciente</Text>
    
    <Text style={styles.info}>Data de nascimento: 00/00/0000</Text>

    <Text style={styles.info}>CPF: {CPF}</Text>
    <Text style={styles.info}>RG: {RG}</Text>
    <Text style={styles.info}>Codigo SUS:{SUS}</Text>

      
  <Text style={styles.pront}>EXAMES JA FEITOS</Text>
  
   <Text style={styles.exames}> Resultado : Exame  </Text>
    <Text style={styles.exames}>Resultado : HDL</Text>
    <Text style={styles.exames}>Resultado : cardiotoco </Text>
    <Text style={styles.exames}>Resultado : ultrassom</Text>
    <Text style={styles.exames}>Resultado : HIV </Text>
    
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
  marginTop: 28,
  padding:10,
  textAlign:'right'
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
},
photo:{
  position:'absolute',
  marginTop:30,
  width:150,
  height:150,
  backgroundColor:'#AAA',
  margin:20,
},
info:{
  textAlign:'right',
  padding:10,
  fontSize:12,
  color:'#CCC'
},
pront:{
  textAlign:'center',
  fontSize:20,
  fontWeight:'bold',
  color:'#AAA',
  padding:10
},
exames :{
  textAlign:'left',
  fontSize:18,
  fontFamily:'Arial',
  fontWeight:'bold',
  padding:20
},
photoPerfil:{
  width:'100%',
  height:'100%',
  padding:5
}

});