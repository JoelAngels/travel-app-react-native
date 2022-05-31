import {StyleSheet, Text, View, Button, ScrollView, Image} from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import learnMoreData from '../assets/data/learnMoreData';

import profile from '../assets/images/person.png';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.menuWrapper}>
          <Feather
            name="menu"
            size={32}
            color={colors.black}
            style={styles.menuIcon}
          />
          <Image source={profile} style={styles.profileImage} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },

  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
});
