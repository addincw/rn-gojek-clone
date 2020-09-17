import { StyleSheet } from "react-native";

import Colors from "../../../public/Colors";

const styles = StyleSheet.create({
  card: {
    position: "relative",
    paddingVertical: 15,
  },
  cardContent: {
    position: "absolute",
    bottom: 15,
    left: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  content: {
    flex: 1
  },
  contentTitle: {
    fontSize: 14,
    color: Colors.superLight,
    fontWeight: "bold",
  },
  contentText: {
    fontSize: 12,
    color: Colors.superLight,
  },
  action: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  }
});

export default styles;
