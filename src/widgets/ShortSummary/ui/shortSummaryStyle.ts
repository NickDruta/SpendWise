import { StyleSheet } from "react-native";

export const shortSummaryStyle = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 0,
    gap: 20,
  },
  title: {
    fontFamily: 'LibreBaskerville-Bold',
    fontSize: 18,
    color: "#7FC37E",
  },
  dataContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
})