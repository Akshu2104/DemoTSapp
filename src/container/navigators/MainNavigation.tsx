import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <>
          <Stack.Screen name="LogIn" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
