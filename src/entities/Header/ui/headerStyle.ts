import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
  wrapper: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontFamily: 'LibreBaskerville-Bold',
    fontSize: 18,
    color: "#7FC37E",
  },
  subtitle: {
    fontFamily: 'LibreBaskerville-Italic',
    fontSize: 16,
    color: "#7FC37E",
  }
})