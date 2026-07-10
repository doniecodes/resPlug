import MarketplaceChatsTab from '../chats/MarketplaceChatsTab';
import GeneralChatsTab from '../chats/GeneralChatsTab';
import SearchBox from '../../components/SearchBox';
import HeaderComponent from '../../components/HeaderComponent';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view';

import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';

const ChatsScreen = () => {
  
  //theme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  //screen header
  const ScreenHeader = ()=> {
    return (
      <>
        {/*Header*/}
        <HeaderComponent
        title={"Chats"}
        icon={"create"}
        fixed={true}
        />
        
        {/*Search box*/}
        <SearchBox
        placeholder={"Search chats"}
        fixed={true}
        />
        
      </>
      )
  }
  
  return (
    <>
      <Tabs.Container
      renderHeader={()=> <ScreenHeader />}
      renderTabBar={(props) => (
        <MaterialTabBar
        {...props}
        activeColor="#6D28B9"
        inactiveColor={theme.text}
        inactiveOpacity={0.7}
        labelStyle={styles.tabLabel}
        indicatorStyle={[{
          backgroundColor: theme.resIconColor,
        }, styles.tabIndicator]}
        style={styles.tabBar}
        />
        )}
        >
        <Tabs.Tab name="general" label="General">
          <GeneralChatsTab />
        </Tabs.Tab>
        
        <Tabs.Tab name="marketplace" label="Marketplace">
          <MarketplaceChatsTab />
        </Tabs.Tab>
        
      </Tabs.Container>
    </>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  tabLabel: {
    fontWeight: '500'
  },
  tabIndicator: {
    
  },
  tabBar: {
    
  }
});