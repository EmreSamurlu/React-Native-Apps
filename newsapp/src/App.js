import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import NewsCard from './components/NewsCard/NewsCard';
import Banner from './components/Banner/Banner';

import news_data from './news_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const renderBanner = ({item}) => <Banner banner={item} />;
  const keyEx = item => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News App</Text>
      <FlatList
        // data={news_banner_data}
        ListHeaderComponent={renderBanner}
        keyExtractor={keyEx}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
export default App;
