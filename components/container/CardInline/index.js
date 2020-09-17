import React from "react";
import { View, Text, Image } from "react-native";

import PublicStyles from "../../../public/Styles";

import styles from "./styles";

import Button from "../../base/Button";

function CardInline({ image, watermark, title, subtitle, content, onPress }) {
  return (
    <View style={{ ...PublicStyles.container, ...styles.card }}>
      <View style={styles.cardHeader}>
        <Image style={styles.headerLogo} source={watermark} />
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.cardContent}>
        <Image style={styles.contentImage} source={image} />
        <View style={styles.content}>
          <Text style={styles.title}>{subtitle}</Text>
          <Text style={styles.text}>{content}</Text>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <Button title="connect" onPress={onPress} />
      </View>
    </View>
  );
}

export default CardInline;
