import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";

function ImageOverlay(props) {
  const { source, overlayColor, height, watermark } = props

  if (overlayColor) styles.overlay = { ...styles.overlay, backgroundColor: overlayColor }
  if (height) styles.wrapper = { ...styles.wrapper, height }

  return (
    <View style={{ ...styles.wrapper, ...props.style }}>
      <Image source={source} style={styles.image} />
      <View style={styles.overlay}></View>
      {watermark && <Image
        style={{
          marginTop: 10,
          marginLeft: 10,
          height: 15,
          width: 60,
          resizeMode: "contain",
        }}
        source={watermark}
      />}
    </View>
  );
}

export default ImageOverlay;
