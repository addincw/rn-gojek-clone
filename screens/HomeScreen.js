import React from "react";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  ScrollView,
  Alert
} from "react-native";

import { LogoGojek, LogoGofood, LogoGopayWhite, LogoGojekWhite } from "../assets/logo";
import PublicStyles from "../public/Styles";

import Searchbar from "../components/container/Searchbar";
import GopayBox from "../components/container/GopayBox";
import ServiceBox from "../components/container/ServiceBox";
import Card from "../components/container/Card";
import CardInline from "../components/container/CardInline";
import CardImage from "../components/container/CardImage";
import Divider from "../components/base/Divider";
import ProductBox from "../components/container/ProductBox";

function HomeScreen() {
  const DummyImage1 = require("../assets/dummy/amien-rais.jpg");
  const DummyImage2 = require("../assets/dummy/sepak-bola.jpg");
  const DummyImage3 = require("../assets/dummy/facebook-connect.png");
  const DummyImage4 = require("../assets/dummy/guess.png");
  const DummyImage5 = require("../assets/dummy/food-banner.jpg");

  const onPressHandler = () => {
    Alert.alert("clicked");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={{ backgroundColor: "red" }}>
        <SafeAreaView style={PublicStyles.safeArea}>
          <Searchbar />

          <GopayBox />

          <ServiceBox />

          <Divider />

          <Card
            watermark={LogoGojekWhite}
            image={DummyImage1}
            title={"Go News"}
            content={"Tim Jaguar Grebek Rumah untuk Ritual Santet di Depok."}
            onPress={onPressHandler}
          />

          <CardInline
            watermark={LogoGojek}
            image={DummyImage3}
            title={"Complete your profile"}
            subtitle={"Connect with facebook"}
            content={"Log in faster without verification code"}
            onPress={onPressHandler}
          />

          <Card
            watermark={LogoGojekWhite}
            image={DummyImage2}
            title={"Go News"}
            content={"Tim Jaguar Grebek Rumah untuk Ritual Santet di Depok."}
            onPress={onPressHandler}
          />

          <CardImage
            watermark={LogoGofood}
            image={DummyImage5}
            title={"Free GO FOOD Vouchers"}
            content={"Quick before they run out!"}
            onPress={onPressHandler}
          />

          <CardInline
            watermark={LogoGojek}
            image={DummyImage4}
            title={"Complete your profile"}
            subtitle={"Connect with facebook"}
            content={"Log in faster without verification code"}
            onPress={onPressHandler}
          />

          <ProductBox

          />

        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
