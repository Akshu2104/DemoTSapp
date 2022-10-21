import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Data from '../screens/Data';
import Detail from '../screens/Detail';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();
// const MainNavigation: React.FC<Props> = () => {
function MainNavigation() {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);
      if (initializing) {
        setInitializing(false);
      }
    });
  }, []);

  const logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
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
