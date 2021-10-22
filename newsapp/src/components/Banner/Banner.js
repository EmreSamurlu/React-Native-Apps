import React from 'react';
import {ScrollView, Image, Dimensions, StyleSheet, View} from 'react-native';
import banner from '../../news_banner_data.json';

const Banner = ({}) => (
  <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {banner.map(bannerImg => (
        <Image style={styles.banner_image} source={{uri: bannerImg.imageUrl}} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
    borderRadius: 15,
    marginHorizontal: 5,
  },
});

export default Banner;
