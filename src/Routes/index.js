import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Welcome from '../Pages/Welcome'
import SignIn from '../Pages/SignIn'
import Register from '../Pages/Register'
import LoginAdm from '../Pages/SignIn/adm'
import RegisterMedic from '../Pages/Register/medic'
import LoginMedic from '../Pages/SignIn/medic'
import RegisterAdm from '../Pages/Register/adm';
import Camera from '../Pages/Salas/index';
import ReceptionService from '../Pages/reception-service';
import Exames from '../Pages/Exames';

import API from '../../Insomnia.json'


const Stack = createNativeStackNavigator();

export default function Routes(){

    return(
        <Stack.Navigator
        initialRouteName=""
        >
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />

            <Stack.Screen
             name="Exames"
            component={Exames}
            options={{ headerShown: false }}
            />
            
            
            <Stack.Screen
             name="ReceptionService"
            component={ReceptionService}
            options={{ headerShown: false }}
            />
          
            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
            />
        <Stack.Screen
            name="LoginMedic"
            component={LoginMedic}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="RegisterMedic"
            component={RegisterMedic}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="LoginAdm"
            component={LoginAdm}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="RegisterAdm"
            component={RegisterAdm}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Camera"
            component={Camera}
            options={{ headerShown: false }}
            />
        
        </Stack.Navigator>
    )
}
