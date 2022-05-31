import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const height = Dimensions.get('window').height;

const Details = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.imageBig}
        style={styles.backgroundImage}></ImageBackground>
      <View style={styles.descriptionWrapper}></View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    // height: height, //this makes fullscreen image
    height: height * 0.6, //this makes fullscreen image
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
});
