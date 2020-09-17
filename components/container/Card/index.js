import React from "react";
import { View, Text } from "react-native";

import PublicStyles from "../../../public/Styles";

import styles from "./styles";

import Button from "../../base/Button";
import ImageOverlay from "../../base/ImageOverlay";

function Card({ image, watermark, title, content, onPress }) {
  return (
    <View style={{ ...PublicStyles.container, ...styles.card }}>

      <ImageOverlay source={image} watermark={watermark} />

      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{content}</Text>
      </View>
      <View style={styles.cardFooter}>
        <Button title="read" onPress={onPress} />
      </View>
    </View>
  );
}

export default Card;
