import React from'react';
import { View, Text , StyleSheet, TouchableOpacity,Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


export default function Exams() {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
    <Text style={styles.message}>Seus exames </Text>
    </Animatable.View>
    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
<View style={styles.photoExame}><Text style={styles.title}>Resultado - Exame</Text><Image style={styles.image} source={{uri:('https://www1.folha.uol.com.br/fsp/images/q1709200902.gif')}}></Image></View>
    </Animatable.View>
    <TouchableOpacity onPress={()=> {navigation.navigate('ReceptionService')}} style={styles.button}>Voltar</TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#033859'  
},
containerHeader:{
  marginTop:'5%',
  marginBottom:'5%',
  paddingStart:'2%'
},
message: {
  fontSize:28,
  fontWeight:'bold',
  color:'#FFF'
},
containerForm:{
  backgroundColor:'#FFF',
  flex:1,
  borderTopLeftRadius: 10,
  borderTopRightRadius:10,
  paddingStart: '5%',
  paddingEnd: '5%'
},
photoExame:{
  padding:5,
  alignSelf:'center',
  width: '100%',
  height:'90%',
  marginTop:'5%',
  
  borderRadius:5
},
image:{
  display:'block',
  width:'100%',
  height:'100%',
  alignSelf:'center', 
},
title:{
  textAlign:'center',
  fontSize:20,
  fontWeight:'bold',
  color:'#AAA',
paddingBottom:5
},
button:{
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
}

});