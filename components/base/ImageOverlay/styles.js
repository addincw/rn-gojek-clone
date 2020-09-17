import { StyleSheet } from "react-native";

import Colors from "../../../public/Colors";

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    height: 200,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: Colors.dark,
    opacity: 0.6,
  }
});

export default styles;
