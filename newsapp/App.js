import React from 'react';
import{SafeAreaView, View, Text, Image, FlatList, StyleSheet, ScrollView,Dimensions} from 'react-native';
import NewsCard from './components/NewsCard'
import news_banner_data from './news_banner_data.json';

import news_data from './news_data.json';


function App(){

  const renderNews = ({item}) => <NewsCard news = {item} />;

  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.headerText}>News</Text>
        
        <FlatList
          ListHeaderComponent = {(<ScrollView horizontal showsHorizontalScrollIndicator = {false}>
          {
            news_banner_data.map(bannerNews => <Image style = {styles.banner_image} source = {{ uri: bannerNews.imageUrl}}  />)
          }

        </ScrollView>)}
          data = {news_data}
          renderItem = {renderNews}
        />
     
   </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#d3d3d3',
  },
  banner_image : {
    height: Dimensions.get('window').height / 5,
    width : Dimensions.get('window').width / 2,
  },
  headerText : {
    fontWeight : 'bold',
    fontSize : 50
  }
})

export default App;