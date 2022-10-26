import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Data from '../screens/Data';
import Detail from '../screens/Detail';
import {Button} from 'react-native';
import Toast from 'react-native-simple-toast';

const Stack = createNativeStackNavigator();
// main navigation of the app when login or logout
function MainNavigation() {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    try {
      auth().onAuthStateChanged(userState => {
        setUser(userState);
        if (initializing) {
          setInitializing(false);
        }
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  //function for signing out from account
  const logOut = () => {
    try {
      auth()
        .signOut()
        .then(() => Toast.show('Signed out!'));
    } catch (e) {
      console.error(e);
    }
  };

  if (initializing) {
    return null;
  }

  if (!user) {
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
          </>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <>
          <Stack.Screen
            name="Data"
            component={Data}
            options={{
              headerTitle: 'Dummy List',
              headerRight: () => (
                <Button
                  onPress={() => logOut()}
                  title="SignOut"
                  color="#20b2aa"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerTitle: 'Details',
              headerRight: () => (
                <Button
                  onPress={() => logOut()}
                  title="SignOut"
                  color="#20b2aa"
                />
              ),
            }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
