import { StyleSheet } from "react-native";

import Colors from "../../../public/Colors";

const styles = StyleSheet.create({
  card: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lighten,
  },
  cardContent: {
    paddingVertical: 10,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 18,
    color: Colors.dark,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: Colors.light,
  },
});

export default styles;
