import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {InicialViewI} from "../../../src/views/index";
import tabConfiguracao from "../tabnavegations/tabConfiguracao";


function stackInicial({navigation}){

  const Stack = createStackNavigator();

    return(
        <Stack.Navigator initialRouteName="Inicial">
          <Stack.Screen name="Inicial" component={InicialViewI} initialParams={{Username:"Wilson Falcão",}}/>
          <Stack.Screen name="Configuracao" component={tabConfiguracao} />
        </Stack.Navigator>
    );
}

export default stackInicial;

