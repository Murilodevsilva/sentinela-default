import { Camera, CameraType } from 'expo-camera';
import { useState, useRef, React } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const camRef = useRef (null)
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
   const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
const [imageUri, setImageUri] = useState()
  const obterImagem = async () => {
    const result = await ImagePicker.launchCameraAsync()

    if(!result.cancelled)
    setImageUri(result.uri)
  }
  async function takePicture(){
      if(camRef){
        const data = await camRef.current.takePictureAsync();
        setCapturedPhoto(data.uri)
        setOpen(true)
      }}

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Precisamos da sua permissão para acessar a camera !</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.front ? CameraType.back : CameraType.front));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Trocar camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
       <TouchableOpacity style={styles.icon}
    onPress= { takePicture
    }>
      <FontAwesome name="camera" size={23} color="#CCC" />
    </TouchableOpacity>
        {capturedPhoto &&
        <Modal
        animationType="slide"
        transparent={false}
        visible={open}
        onPress={obterImagem}
        >
        <View style={styles.modal}>
        <TouchableOpacity style ={{ margin:10}}
        onPress={()=> setOpen(false)}><FontAwesome name="window-close" size={50} color="red"/></TouchableOpacity>

        <Image style={styles.image}
        source={{uri: capturedPhoto}}
        ></Image>
        </View>
        </Modal>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#033859',
    borderRadius:10,
    padding:10
  },
   icon:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#033859',
    margin:20,
    borderRadius:10,
    height:50
  },
   modal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:20
  },
  image:{
    width:'100%',
    height: 300,
    borderRadius:20
  }
})
