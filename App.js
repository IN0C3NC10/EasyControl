import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// ..Componentes do Stack para gerenciar as rotas
import Login from './src/pages/Login/';
import NewUser from './src/pages/User/New';
import ListProduct from './src/pages/Product/List';
import NewProduct from './src/pages/Product/New';
import DetailsProduct from './src/pages/Product/Details';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
          {/* .. Stack Screen é a c/ página;
              .. o "name" é o parametro que c/ tela vai chamar para realizar a navegação, semelhante a uma função;
              .. a propriedade "headerShown" define se o header é exibido ou não
          */}
          <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} />
          <Stack.Screen name="New User" component={NewUser} options={{ headerShown:false }} />
          <Stack.Screen name="List Products" component={ListProduct} options={{ headerShown:false, headerLeft:false }} />
          <Stack.Screen name="New Product" component={NewProduct} options={{ headerTintColor:"#f92e6a" }} />
          <Stack.Screen name="Details Product" component={DetailsProduct} options={{ headerTintColor:"#f92e6a" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
