import AboutTab from '../profile/AboutTab';
import EventsTab from '../profile/EventsTab';
import MarketplaceTab from '../profile/MarketplaceTab';
import PostsTab from '../profile/PostsTab';

import ProfileBio from '../../components/ProfileBio';
import ProfileCard from '../../components/ProfileCard';
import HeaderProfile from '../../components/HeaderProfile';

import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global.ts';

import { Tabs } from "react-native-collapsible-tab-view";



const Profile = () => {
  
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
      tabBarProps={{
        activeColor: "#7C3AED",
        inactiveColor: "#999",
      }} >
        <Tabs.Tab name="Posts">
          <PostsTab />
        </Tabs.Tab>
        
        <Tabs.Tab name="Marketplace">
          <MarketplaceTab />
        </Tabs.Tab>
        
        <Tabs.Tab name="Events">
          <EventsTab />
        </Tabs.Tab>
        
        <Tabs.Tab name="About">
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
    backgroundColor: '#f8f8f8',
  }
});