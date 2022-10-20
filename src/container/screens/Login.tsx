import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

const image = {
  backGround: require('../../assets/images/temp1.jpeg'),
};

const Login = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [pass, onChangePass] = useState('');

  const logIn = () => {
    if (text !== '') {
      if (pass !== '') {
        Alert.alert('Hello');
      } else {
        Alert.alert('Please provide password');
      }
    } else {
      Alert.alert('Email & password required');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.backGround}
        resizeMode="cover"
        style={styles.image}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : undefined}>
          <View style={styles.main}>
            <Text style={styles.text}>Hello!!</Text>
            <View>
              <Text style={styles.heading}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Email"
              />
              <Text style={styles.heading}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangePass}
                value={pass}
                secureTextEntry={true}
                placeholder="Password"
              />
              <TouchableOpacity style={styles.button} onPress={() => logIn()}>
                <Text style={styles.action}>LogIn</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.footer}>
          <Text style={styles.account}>
            Don't have account?
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.reg}> Register</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    marginHorizontal: 18,
    paddingTop: 15,
    marginBottom: 20,
    marginVertical: 15,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    marginLeft: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontFamily: 'arial',
    color: 'black',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  button: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: 'pink',
    padding: 13,
  },
  action: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  reg: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  account: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  footer: {
    alignSelf: 'center',
    height: 30,
  },
});

export default Login;
