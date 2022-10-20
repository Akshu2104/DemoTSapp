import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {
  backGround: require('../../assets/images/temp.webp'),
};

const Detail: React.FC<Props> = ({route}) => {
  const navigation = useNavigation();
  const {data} = route.params;
  //id, body, title, userId
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.backGround}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.main}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.userId}>
            Id: <Text style={styles.id}>{data.id}</Text>
          </Text>
          <Text style={styles.userId}>
            UserId: <Text style={styles.id}>{data.userId}</Text>
          </Text>
          <Text style={styles.userId}>Body:- </Text>
          <Text style={styles.body}>{data.body}</Text>
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
    padding: 20,
    borderWidth: 2,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    fontSize: 20,
    fontWeight: 'normal',
    fontFamily: 'arial',
    marginTop: 5,
  },
  userId: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  id: {
    fontSize: 28,
    fontWeight: 'normal',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 50,
  },
});

export default Detail;
