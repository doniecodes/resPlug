import AboutTab from '../profile/AboutTab';
import EventsTab from '../profile/EventsTab';
import MarketplaceTab from '../profile/MarketplaceTab';
import PostsTab from '../profile/PostsTab';

import ProfileBio from '../../components/ProfileBio';
import ProfileCard from '../../components/ProfileCard';
import HeaderProfile from '../../components/HeaderProfile';

import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';
import { globalStyles } from '../../styles/global.ts';

import { Tabs, MaterialTabBar } from "react-native-collapsible-tab-view";



const Profile = () => {
  
  //theme
  const colorScheme = useColorScheme();
  //const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors.light;
  
  //profile header
  const ProfileHeader = () => {
    return (
      <>
      <ThemedView style={styles.container}>
        <HeaderProfile />
        <ProfileCard />
        <ProfileBio />
      </ThemedView>
      </>
      )
  }
  
  return (
    <>
      <Tabs.Container
      renderHeader={()=> <ProfileHeader />}
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
      scrollEnabled={false}
      tabStyle={{paddingHorizontal: 3}}
      />
      )}
      >
        <Tabs.Tab name="Posts" label="Posts">
          <PostsTab />
        </Tabs.Tab>
        
        <Tabs.Tab name="Marketplace" label="Marketplace">
          <MarketplaceTab />
        </Tabs.Tab>
        
        <Tabs.Tab name="Events" label="Events">
          <EventsTab />
        </Tabs.Tab>
        
        <Tabs.Tab name="About" label="About">
          <AboutTab />
        </Tabs.Tab>
        
      </Tabs.Container>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  tabLabel: {
    fontWeight: '500'
  },
  tabIndicator: {
    
  },
  tabBar: {
    
  }
});