import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {InicialViewI,AccountViewI} from "../../../src/views/index";


function drawerAccount(){

    const Drawer = createDrawerNavigator();

    return(

      <Drawer.Navigator initialRouteName="Account">
        <Drawer.Screen name="Account" component={AccountViewI}/>
        <Drawer.Screen name="Inicial" component={InicialViewI}/>
      </Drawer.Navigator>

    );
}

export default drawerAccount;

