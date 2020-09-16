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
  thumbnail: {
    position: "relative",
    height: 200,
  },
  thumbnailBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  thumbnailOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: Colors.dark,
    opacity: 0.6,
  },
  thumbnailWatermark: {
    height: 15,
    width: 60,
    resizeMode: "contain",
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
