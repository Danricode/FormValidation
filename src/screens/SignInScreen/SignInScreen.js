import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
} from "react-native";
import Logo from "../../../assets/images/Logo.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/customButton/customButton";

const SignInScreen = () => {
    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
    };

    const onForgotPasswordPressed = () => {
        console.warn("OnForgotPasswordPressed");
    };

    const onSignInFacebook = () => {
        console.warn("Facebook");
    };

    const onSignInApple = () => {
        console.warn("Apple");
    };

    const onSignInGoogle = () => {
        console.warn("Google");
    };

    const onSignUpPress = () => {
        console.warn("onSignUpPress");
    };

    return (
        <ScrollView>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />

                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <CustomButton text="Sign In" onPress={onSignInPressed} />
                <CustomButton
                    text="Forgot password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <CustomButton
                    text="Sign In with Facebook"
                    onPress={onSignInFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />
                <CustomButton
                    text="Sign In with Google"
                    onPress={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />
                <CustomButton
                    text="Sign In with Apple"
                    onPress={onSignInApple}
                    bgColor="#E3E3E3"
                    fgColor="#363636"
                />

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPress}
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

    logo: {
        width: "70%",
        maxWidth: 300,
        Maxheight: 200,
    },
});

export default SignInScreen;
