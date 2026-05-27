import { AsyncStorage } from "@react-native-async-storage/async-storage"

// to save data
export const saveData = async (key: string, value: any) => {
  try {
  const dataToSave = JSON.stringify(value);
  const save = await AsyncStorage.setItem(key, dataToSave);
  } catch (err) {
    console.error("Error saving data", err);
  }
}

// to retrieve data
export const getData = async (key: string) => {
  try {
    const dataToRetrieve = await AsyncStorage.getItem(key);
    const data = dataToRetrieve != null ? JSON.parse(dataToRetrieve) : null;
    return data;
  } catch (error) {
    console.error("Error retrieving data", error);
  }
}