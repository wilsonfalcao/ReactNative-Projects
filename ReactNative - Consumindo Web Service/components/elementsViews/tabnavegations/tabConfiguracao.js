import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ConfiguracaoViewI} from "../../../src/views/index";
import TabarCustomButton from "../../../components/elementsViews/tabnavegations/TabarCustomButton"

import drawerAccount from "../drawernavegations/drawerAccount";
import IconsTaBar from "../../../components/icons/tab/IconsTaBar";

const Tab = createBottomTabNavigator();

function stackAccount({route,navigation}){


    const {termSearch} = route.params;

    const ConfigTab = {
        Configuracao:{icon:"CodeSandbox"},
        Account:{icon:"notification"},
    };

    return(

        <Tab.Navigator 
            initialRouteName="Configuracao"
            tabBarOptions={{
                showLabel:false,
                style:{
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    position: 'absolute'
                }
            }}
            screenOptions={({route})=>({
                tabBarIcon:({focused})=>{
                    const {icon} = ConfigTab[route.name];
                    return <IconsTaBar nameicon={icon} iconcolor={focused ? "#FF5733" : "#000"} />
                    },
                tabBarButton:(props)=>(
                    <TabarCustomButton
                    {...props}
                    />
                )
                })
            }
            >

            <Tab.Screen name="Configuracao" 
                        component={ConfiguracaoViewI}
                        initialParams={{valueToSearch:termSearch}}
                        />

            <Tab.Screen name="Account" 
                        component={drawerAccount}
                        />

        </Tab.Navigator>

    );
}

export default stackAccount;

