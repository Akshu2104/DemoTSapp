import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const image = {
  backGround: require('../../assets/images/temp.webp'),
};

const Data: React.FC<Props> = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    dummyData();
  }, []);

  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail', {data: item});
        }}>
        <View style={styles.item}>
          <View style={styles.detail}>
            <Text style={styles.id}>{item.id}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const dummyData = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.backGround}
        resizeMode="cover"
        style={styles.image}>
        <FlatList
          keyExtractor={data?.id}
          data={data}
          renderItem={renderComponent}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    padding: 28,
    justifyContent: 'flex-start',
  },
  item: {
    borderWidth: 1.5,
    borderColor: 'black',
    marginHorizontal: 15,
    marginVertical: 8,
    backgroundColor: '#f0ffff',
    opacity: 0.6,
    borderRadius: 15,
  },
  id: {
    fontSize: 20,
    fontWeight: 'normal',
    paddingRight: 10,
    color: 'black',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginRight: 10,
  },
});

export default Data;
