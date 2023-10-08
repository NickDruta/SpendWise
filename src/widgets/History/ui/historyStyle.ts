import { StyleSheet } from "react-native";

export const historyStyle = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 0,
    gap: 20,
  },
  titleContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: 'LibreBaskerville-Bold',
    fontSize: 18,
    color: "#7FC37E",
  },
  subtitle: {
    flex: 1,
    fontFamily: 'LibreBaskerville-Italic',
    fontSize: 16,
    color: "#7FC37E",
  },
  itemContainer: {
    flex: 0,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  text: {
    fontFamily: 'LibreBaskerville-Bold',
    fontSize: 16,
    color: "#7FC37E",
    flex: 1,  
  }
})