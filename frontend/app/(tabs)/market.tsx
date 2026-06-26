import SearchBox from '../../components/SearchBox';
import FeaturedCard from '../../components/FeaturedCard';
import MarketHook from '../../hooks/MarketHook';
import ItemCard from '../../components/ItemCard';

import HeaderMarketplace from '../../components/HeaderMarketplace';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import MarketChips from '../../components/MarketChips';

import { StyleSheet, Text,
View, ScrollView, Pressable } from 'react-native';

import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import { FlatList } from 'react-native';
import { globalStyles } from '../../styles/global.ts';

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { Link } from "expo-router";

const Market = () => {
  
  //useEffect for items
  useEffect(()=> {
    const getData = async()=> {
      try {
        const data = await getItems();
        setItems(data);
      } catch(error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  
  //Insets
  const insets = useSafeAreaInsets();
  
  //hooks
  const { getItems, error, loading } = MarketHook();
  
  //Items
  const [items, setItems] = useState(null);
  
    //categories
  const categories = ["All", "Books", "Electronics", "Clothes", "Residence", "Services", "Other"]; 
  
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  //items elements
  const itemsData = items !== null && activeCategory === "All" || activeCategory === null ? items : items.filter((x)=> x.category === activeCategory);
  
  //featured items
  const featuredData = items && items.filter((x)=> x.is_featured === true);
  
  const ScreenHeader = () => (
    <>
    <ThemedView style={styles.container}>
      
      {/*Header*/}
      <HeaderMarketplace />
      
      {/*SearchBox*/}
      <SearchBox
      width="90%"
      placeholder="Search for items, services..." />
      
      {/*Chips*/}
      <MarketChips
      categories={categories}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      />
      
      {/*Featured Cards*/}
      <View style={styles.featuredWrapper}>
        <View style={styles.titleWrapper}>
        <ThemedText
        style={styles.title}
        title={true}>
          Featured Listings
        </ThemedText>
        <Pressable
        style={({pressed})=> [styles.seeAllBtn, pressed && styles.seeAllPressed]}
        >
        <Text style={styles.seeAllText}>see all</Text>
        </Pressable>
        </View>
        
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={featuredData}
        keyExtractor={(item)=> item.id}
        contentContainerStyle={styles.cards}
        renderItem={({item})=> (
          <FeaturedCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          images={item.images[0]}
          seller={item.seller_id}
          resId={item.res_id}
          />
        )}
        />
      </View>
      
      <View style={styles.itemsTitle}>
        <ThemedText
        style={styles.title}
        title={true}>
          Browse Items
        </ThemedText>
      </View>
    
    </ThemedView>
    </>
    )
  
  
  return (
    <>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={itemsData}
          numColumns={2}
          columnWrapperStyle={styles.itemsGrids}
          contentContainerStyle={[{paddingTop: insets.top}, styles.itemCards]}
          ListHeaderComponent={ScreenHeader}
          keyExtractor={(item)=> item.id}
          renderItem={({item})=> (
          <ItemCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          images={item.images[0]}
          seller={item.seller_id}
          resId={item.res_id}
          category={item.category}
          description={item.description}
          />
          )}
          />
          
      <View style={styles.addBtnWrapper}>
        <Pressable
        style={({pressed})=> [styles.addBtnText, pressed && styles.addBtnPressed]}>
        <Link href="/sell-item">
          <Ionicons
          size={36}
          name="add"
          color="#fff"
          />
        </Link>
        </Pressable>
      </View>
    </>
  );
};

export default Market;

const styles = StyleSheet.create({
  featuredWrapper: {
    flexDirection: 'column',
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 20,
    paddingLeft: 15,
    borderBottomWidth: 2,
    borderColor: '#e2e2e2',
  },
  itemsTitle: {
    marginTop: 6,
    paddingLeft: 10,
    marginBottom: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  cards: {
    paddingRight: 10,
    gap: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: "#6D28B9",
    //color: "#743089",
    fontWeight: 800,
    borderBottomWidth: 1,
    borderColor: "#6D28B9",
    //borderColor: "#743089",
  },
  seeAllBtn: {
    color: "#6D28B9"
  },
  
  //Item cards
  itemsGrids: {
    justifyContent: 'center',
    //alignItems: 'center',
    gap: 5,
    paddingHorizontal: 5,
  },
  
  //Floating button
  addBtnWrapper: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#6D28B9",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 100,
  },
  addBtnText: {
    fontWeight: "bold"
  },
  addBtnPressed: {
    opacity: 0.6,
  }
});