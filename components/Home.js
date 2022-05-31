/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
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
  const renderDiscoverItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            //navigate to details page and send the data of the item and output it on the details page
            item: item,
          })
        }>
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            {
              marginLeft: item.id === 'discover-1' ? 20 : 0,
            },
          ]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>

          <View style={styles.discoverItemLocationTextWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />

            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderActivityItem = () => {
    return (
      <View>
        <Text>hahah</Text>
      </View>
    );
  };

  const renderLearnMoreItem = () => {
    return (
      <View>
        <Text>hahah</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
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
        </SafeAreaView>

        {/* Discover */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text style={[styles.discoverCategoryText, {color: colors.orange}]}>
              All
            </Text>
            <Text style={styles.discoverCategoryText}>Destinations</Text>
            <Text style={styles.discoverCategoryText}>Cities</Text>
            <Text style={styles.discoverCategoryText}>Experiences</Text>
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Activities */}
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Learn More */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
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

  discoverWrapper: {
    // marginHorizontal: 20,
    marginTop: 20,
  },

  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.black,
  },

  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },

  discoverCategoryText: {
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },

  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end', //to make it stick to the bottom
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },

  discoverItemImage: {
    borderRadius: 20,
  },

  discoverItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },

  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.white,
  },

  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.gray,
  },
});
