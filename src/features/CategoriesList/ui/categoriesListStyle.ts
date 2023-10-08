import { StyleSheet } from "react-native";

export const categoriesListStyle = StyleSheet.create({
  wrapper: {
    flex: 0,
    gap: 8,
  },
  categoryContainer: {
    flex: 0,
    gap: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  value: {
    fontFamily: 'LibreBaskerville-Bold',
    fontSize: 18,
    color: "#7FC37E",
    width: 40,
  }
})