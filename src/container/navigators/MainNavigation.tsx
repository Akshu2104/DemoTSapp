import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Data from '../screens/Data';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();
const MainNavigation: React.FC<Props> = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <>
          <Stack.Screen
            name="LogIn"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Data"
            component={Data}
            options={{headerTitle: 'Dummy List'}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{headerTitle: 'Details'}}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
