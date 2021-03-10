import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {InicialViewI,ViewBookI} from "./src/views/index";
import tabConfiguracao from "./components/elementsViews/tabnavegations/tabConfiguracao";

export default function App() {

  const Stack = createStackNavigator();
  return (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicial"
        screenOptions={{
          headerShown:false,
        }}
        >
          <Stack.Screen name="Inicial" component={InicialViewI}/>
          <Stack.Screen name="ViewBook" component={ViewBookI} />
          <Stack.Screen name="Configuracao" component={tabConfiguracao} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}
