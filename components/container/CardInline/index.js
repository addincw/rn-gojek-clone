import React from "react";
import { View, Text, Image, Alert } from "react-native";

import { LogoGojek } from "../../../assets/logo";
import PublicStyles from "../../../public/Styles";

import styles from "./styles";

import Button from "../../base/Button";

function CardInline({ contentImage }) {
  const onPressHandler = () => {
    Alert.alert("clicked");
  };

  return (
    <View style={{ ...PublicStyles.container, ...styles.card }}>
      <View style={styles.cardHeader}>
        <Image style={styles.headerLogo} source={LogoGojek} />
        <Text style={styles.headerTitle}>Complete your profile</Text>
      </View>
      <View style={styles.cardContent}>
        <Image style={styles.contentImage} source={contentImage} />
        <View style={styles.content}>
          <Text style={styles.title}>Connect with facebook</Text>
          <Text style={styles.text}>
            Log in faster without verification code
          </Text>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <Button title="connect" onPress={onPressHandler} />
      </View>
    </View>
  );
}

export default CardInline;
