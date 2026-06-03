import { useColorScheme, StyleSheet } from "react-native";

export const colors = {
  primary: "#6C4DFF",
  warning: "#cc475a",
}

export const globalStyles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontSize: 30,
    fontWeight: "bold",
  }
})