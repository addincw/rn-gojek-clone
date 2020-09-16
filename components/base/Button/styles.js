import { StyleSheet } from "react-native";

import Colors from "../../../public/Colors";

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.superLight,
    fontWeight: "bold",
    fontSize: 12,
    textTransform: "uppercase",
    alignSelf: "center",
  },
});

export default styles;
