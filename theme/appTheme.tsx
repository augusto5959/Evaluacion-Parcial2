import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap:20
  },
  tittle: {
    fontSize: 30,
    padding: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#20b4f4",
    padding: 10,
    borderRadius: 5,
    width: 150,
    alignItems: "center",
  },
  buttonContainer: {
    gap: 30,
    paddingTop: 20,
  },
  textButton: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: 350,
    height: 350,
  },
  imput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width:250,
    borderRadius:10
  },  
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});
