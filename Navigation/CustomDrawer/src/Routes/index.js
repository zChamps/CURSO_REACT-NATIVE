import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './StackRoutes';
import CustomDrawer from "../components/CustomDrawer"
import About from '../Pages/About';
// import Contato from '../pages/Contato';

const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
      <Drawer.Navigator 
        screenOptions={{
          headerShown: false,
  
          drawerActiveBackgroundColor: '#00dae4',
          drawerActiveTintColor: '#FFF',
  
          drawerInactiveBackgroundColor: '#f1f1f1',
          drawerInactiveTintColor: '#000'
  
        }}
      >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
      />

      <Drawer.Screen
        name="Sobre"
        component={About}
      />
{/* 
      <Drawer.Screen
        name="Contato"
        component={Contato}
      /> */}
    </Drawer.Navigator>
  )
}