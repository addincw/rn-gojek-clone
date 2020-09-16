import React from "react";
import { View, Text, Image, Alert } from "react-native";

import { LogoGojekWhite } from "../../../assets/logo";
import PublicStyles from "../../../public/Styles";

import styles from "./styles";

import Button from "../../base/Button";

function Card({ image }) {
  const onPressHandler = () => {
    Alert.alert("clicked");
  };

  return (
    <View style={{ ...PublicStyles.container, ...styles.card }}>
      <View style={styles.thumbnail}>
        <Image source={image} style={styles.thumbnailBackground} />
        <View style={styles.thumbnailOverlay}></View>
        <Image
          style={{
            marginTop: 10,
            marginLeft: 10,
            height: 15,
            width: 60,
            resizeMode: "contain",
          }}
          source={LogoGojekWhite}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>Go News</Text>
        <Text style={styles.text}>
          Tim Jaguar Grebek Rumah untuk Ritual Santet di Depok.
        </Text>
      </View>
      <View style={styles.cardFooter}>
        <Button title="read" onPress={onPressHandler} />
      </View>
    </View>
  );
}

export default Card;
