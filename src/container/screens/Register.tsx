import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
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

const Register: React.FC<Props> = () => {
  const navigation = useNavigation();
  const [name, onChangeName] = useState('');
  const [last, onChangeLast] = useState('');
  const [email, onChangeEmail] = useState('');
  const [pass, onChangePass] = useState('');

  const onRegister = () => {
    if (name !== '') {
      if (last !== '') {
        if (email !== '') {
          if (pass !== '') {
            // auth()
            //   .createUserWithEmailAndPassword(name, last)
            //   .then(() => {
            //     console.log('User account created & signed in!');
            //   })
            //   .catch(error => {
            //     if (error.code === 'auth/email-already-in-use') {
            //       console.log('That email address is already in use!');
            //     }

            //     if (error.code === 'auth/invalid-email') {
            //       console.log('That email address is invalid!');
            //     }

            //     console.error(error);
            //   });
            navigation.navigate('LogIn');
          } else {
            Alert.alert('Please provide password');
          }
        } else {
          Alert.alert('Please provide email');
        }
      } else {
        Alert.alert('Please provide last name');
      }
    } else {
      Alert.alert('All fields are required');
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
            <Text style={styles.text}>Welcome!</Text>
            <View>
              <Text style={styles.heading}>First Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="First Name"
              />
              <Text style={styles.heading}>Last Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeLast}
                value={last}
                placeholder="Last Name"
              />
              <Text style={styles.heading}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
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
              <TouchableOpacity
                style={styles.button}
                onPress={() => onRegister()}>
                <Text style={styles.action}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.footer}>
          <Text style={styles.account}>
            Already have account?
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
              <Text style={styles.reg}> Login</Text>
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
    marginHorizontal: 25,
    paddingTop: 15,
    marginBottom: 20,
    marginVertical: 25,
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

export default Register;
