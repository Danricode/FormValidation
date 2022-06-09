import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");

  const onConfirmPressed = () => {
    console.warn("OnConfirmPressed");
  };

  const onSignInPress = () => {
    console.warn("onSignInPress");
  };

  const onResendPress = () => {
    console.warn("onResendPress");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
          secureTextEntry={true}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend Code"
          onPress={onResendPress}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default ConfirmEmailScreen;