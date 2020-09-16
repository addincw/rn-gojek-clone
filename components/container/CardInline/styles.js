import { StyleSheet } from "react-native";

import Colors from "../../../public/Colors";

const styles = StyleSheet.create({
  card: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lighten,
  },
  cardContent: {
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  headerLogo: {
    height: 15,
    width: 60,
    resizeMode: "contain",
    marginBottom: 5,
  },
  headerTitle: {
    paddingLeft: 4,
    fontSize: 18,
    color: Colors.dark,
    fontWeight: "bold",
  },
  contentImage: {
    resizeMode: "contain",
  },
  content: {
    width: "60%",
  },
  title: {
    fontSize: 16,
    color: Colors.dark,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: Colors.light,
  },
});

export default styles;
