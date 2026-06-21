import ImagePickerComponent from '../../components/ImagePickerComponent';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { StyleSheet, Text, View, Image,
TextInput, Pressable, ScrollView,
TouchableWithoutFeedback,
Keyboard, useColorScheme,Platform, KeyboardAvoidingView } from 'react-native';

import { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SelectList } from "react-native-dropdown-select-list";

import { Colors } from "../../constants/Colors";
import { Link } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

import laptop from "../../assets/images/laptop.jpg"


const SellItemScreen = () => {
  
  //States
  const [ title, setTitle ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ description, setDescription ] = useState("");
  
  const conditions = [
    {key: "New", value: "New"},
    {key: "Like New", value: "Like New"},
    {key: "Used", value: "Used"},
    {key: "Good", value: "Good"},
    {key: "Fair", value: "Fair"},
    ];
  const [condition, setCondition] = useState("");
  
  const categories = [
    {key: "Books", value: "Books"},
    {key: "Electronics", value: "Electronics"},
    {key: "Clothes", value: "Clothes"},
    {key: "Residence", value: "Residence"},
    {key: "Services", value: "Services"},
    {key: "Other", value: "Other"}
    ];
  const [ category, setCategory ] = useState("");
  
  //insets
  const insets = useSafeAreaInsets();
  
    //colorscheme
  const colorScheme = useColorScheme()
  const theme = Colors.light;
  
  return (
    <>
      <ThemedView
      style={[{
        paddingTop: insets.top
      }, styles.header]}>
        <View style={styles.backBtn}>
          <Link href="..">
          <Ionicons
          name="arrow-back"
          size={30}
          color={theme.title}
          />
          </Link>
        </View>
        <ThemedText title={true}
        style={styles.headerText}>
          Sell Item
        </ThemedText>
        <Pressable>
          <ThemedText style={[{color: "purple"}, styles.cancelBtn]}>
            Cancel
          </ThemedText>
        </Pressable>
      </ThemedView>
      
      <ScrollView
        style={{}}
      showsVerticalScrollIndicator={false}>
      <ThemedView style={styles.container}>
        <View
        style={styles.imagePickerContainer}>
          <ScrollView
          contentContainerStyle={styles.images}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
            <ImagePickerComponent />
            <ImagePickerComponent />
            <ImagePickerComponent />
          </ScrollView>
          <ThemedText style={styles.imagesText}>
            Select at least 3 images
          </ThemedText>
        </View>
        
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <View style={styles.itemInfoContainer}>
          <View style={styles.formGroup}>
            <Text style={[{color: theme.resIconColor}, styles.label]}>
              Title
            </Text>
            <TextInput
            style={styles.textInput}
            name="title"
            value={title}
            onChangeText={setTitle}
            />
          </View>
            
          <View style={styles.formGroup}>
            <Text style={[{color: theme.resIconColor}, styles.label]}>
              Price
            </Text>
            <TextInput
            style={styles.textInput}
            name="price"
            value={price}
            onChangeText={setPrice}
            />
          </View>
            
          <View style={styles.formGroup}>
            <Text style={[{color: theme.resIconColor}, styles.label]}>
              Category
            </Text>
            <SelectList
            boxStyles={{ borderWidth: 0, marginLeft: -20, }}
            dropdownStyles={{ borderWidth: 1 }}
            setSelected={setCategory}
            data={categories}
            defaultOption={{key:"Electronics", value: "Electronics"}}
            />
          </View>
            
          <View style={styles.formGroup}>
            <Text style={[{color: theme.resIconColor}, styles.label]}>
              Condition
            </Text>
            <SelectList
            setSelected={setCondition}
            data={conditions}
            boxStyles={{ borderWidth: 0, marginLeft: -20, }}
            dropdownStyles={{ borderWidth: 1 }}
            defaultOption={{key:"New", value:"New"}}
            />
          </View>
          
          <View style={styles.formGroupDescription}>
             <Text style={[{color: theme.resIconColor}, styles.label]}>
              Description
            </Text>
            <TextInput
            style={styles.descriptionInput}
            name="description"
            multiline={true}
            maxLength={500}
            blurOnSubmit={false}
            value={description}
            onChangeText={setDescription}
            />
          </View>
        </View>
        </KeyboardAvoidingView>
      </ThemedView>
      </ScrollView>
      
          <ThemedView style={[{paddingBottom: insets.bottom}, styles.submitBtnWrapper]}>
            <Pressable
            style={({pressed})=> ([
            styles.submitBtn, pressed && styles.submitBtnPressed
            ])}>
              <Text style={styles.submitBtnText}>
                Add Item
              </Text>
            </Pressable>
          </ThemedView>
    </>
  );
};

export default SellItemScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    height: "100%"
  },
  header: {
    paddingHorizontal: 10,
    paddingRight: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    flex: 1,
    marginHorizontal: 30,
    fontSize: 20,
    fontWeight: "bold"
  },
    imagePickerContainer: {
      marginBottom: 10,
      paddingVertical: 20,
      paddingHorizontal: 0,
    },
  images: {
    //alignItems: 'center',
    //justifyContent: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  imagesText: {
    textAlign: 'center',
  },
  image: {
    //width: 150,
    //height: 120,
    borderRadius: 10
  },
  itemInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    paddingBottom: 20,
  },
  formGroup: {
    borderRadius: 10,
    borderWidth: 1.6,
    borderColor: "#d5d5d5",
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: '500',
    marginBottom: -10
  },
  formGroupDescription: {
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#d5d5d5",
    paddingVertical: 3,
    paddingHorizontal: 10,
    minHeight: 150
  },
  submitBtnWrapper: {
    width: "100%",
    marginTop: 20,
    backgroundColor: '#f8f8f8',
    paddingTop: 10,
    paddingHorizontal: 10,
    position: 'fixed',
    bottom: 0,
    borderTopWidth: 1.6,
    borderColor: '#d5d5d5',
  },
  submitBtn: {
    backgroundColor: 'purple',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 100,
  },
  submitBtnPressed: {
    opacity: 0.8
  },
  submitBtnText: {
    color: "#f8f8f8",
    fontWeight: 500,
    fontSize: 18,
  },
  cancelBtn: {
    fontWeight: 500,
    borderBottomWidth: 1,
    borderColor: 'purple',
  }
  
});