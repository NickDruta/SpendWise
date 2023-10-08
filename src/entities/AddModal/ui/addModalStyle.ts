import { StyleSheet } from "react-native";

export const addModalStyle = StyleSheet.create({
  wrapper: {
    flex: 0,
    alignContent: "center",
    justifyContent: "center",
  },
  container: {
    flex: 0, 
    backgroundColor: '#FEFEE2',
    borderRadius: 10,
    height: 320,
    padding: 25,
  },
  title: {
    fontFamily: 'LibreBaskerville-Bold',
    fontSize: 18,
    color: "#7FC37E",
    marginBottom: 15
  },
  input: {
    fontFamily: 'LibreBaskerville-Italic',
    fontSize: 16,
    lineHeight: 0,
    color: "#7FC37E",
    borderBottomColor: "#7FC37E",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 5,
  },
  categories: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  button: {
    fontFamily: 'LibreBaskerville-Bold',
    fontSize: 18,
    backgroundColor: "#7FC37E",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    alignSelf: "flex-end"
  },
  buttonText: {
    color: "#FFF",
  }
})