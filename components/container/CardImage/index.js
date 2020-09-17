import React from "react";
import { View, Text, Alert } from "react-native";

import PublicStyles from "../../../public/Styles";

import styles from "./styles";

import Button from "../../base/Button";
import ImageOverlay from "../../base/ImageOverlay";

function CardImage({ watermark, image, title, content, onPress }) {

  return (
    <View style={{ ...PublicStyles.container, ...styles.card }}>

      <ImageOverlay source={image} watermark={watermark} />

      <View style={{ width: "100%", ...styles.cardContent }}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View>
        <View style={styles.action}>
          <Button title="get voucher" onPress={onPress} />
        </View>
      </View>
    </View>
  );
}

export default CardImage;
