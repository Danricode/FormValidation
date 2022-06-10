import React from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

export default class ChangePasswordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",               // to store password
            passwordErrorMessage: "",         // password error message
            confirmPassword: "",               // to store password
            confirmPasswordErrorMessage: "",         // password error message
            loading: false,             // manage loader
        }
    }
    /**
     * authenticate user
     */
    formValidation = async () => {
        this.setState({ loading: true })
        let errorFlag = false;
        
        // input validation
        if (this.state.password.length == 0) {
          errorFlag = true;
          this.setState({ passwordErrorMessage: "Password is required field"});
        } else if (this.state.password.length < 8 ||  this.state.password.length > 20) {
          errorFlag = true;
          this.setState({ passwordErrorMessage: "Password should be min 8 char and max 20 char"});
        } else if (this.state.password !==  this.state.confirmPassword ) {
          errorFlag = true;
          this.setState({ passwordErrorMessage: "Passwoad and confirm password should be same."});
        }
        
        if (this.state.confirmPassword.length == 0) {
          errorFlag = true;
          this.setState({ confirmPasswordErrorMessage: "Confirm Password is required feild"});
        } else if (this.state.confirmPassword.length < 8 ||  this.state.confirmPassword.length > 20) {
          errorFlag = true;
          this.setState({ confirmPasswordErrorMessage: "Password should be min 8 char and max 20 char"});
        }
       
        if (errorFlag) {
            console.log("errorFlag");
            
            /** Call Your API */
        } else {
            this.setState({ loading: false });
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.LoginLayout}>
                        <View style={styles.LogoLayout}>
                            <Text style={styles.text}>{"Change Password"}</Text>
                        </View>
                        <View style={styles.inputLayout}>
                            <CustomInput
                                placeholder="Password"
                                value={this.state.password}
                                secureTextEntry={true}
                                style={styles.input}
                                onChangeText={password => this.setState({password})}
                            />
                            {this.state.passwordErrorMessage.length > 0 && <Text style={styles.textDanger}>{this.state.passwordErrorMessage}</Text>}
                        </View>
                        <View style={styles.inputLayout}>
                            <CustomInput
                                placeholder="Confirm Password"
                                value={this.state.password}
                                secureTextEntry={true}
                                style={styles.input}
                                onChangeText={password => this.setState({password})}
                            />
                            {this.state.confirmPasswordErrorMessage.length > 0 && <Text style={styles.textDanger}>{this.state.confirmPasswordErrorMessage}</Text>}
                        </View>
                        <View style={styles.inputLayout}>
                            <CustomButton  onPress={() => this.formValidation()} text="Submit"
 />
                        </View>
                    </View>
                </ScrollView>
                {/* Show Your Loader */}
                {/* {
                    this.state.loading && <Loader />
                } */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    LoginLayout: {
        flex: 1,
        padding: 20
    },
    LogoLayout: {
        alignItems: "center",
        padding: 20
    },
    inputLayout: {
        paddingBottom: 20,
    },
    input: {
        borderWidth: 1
    },
    textDanger: {
        color: "#dc3545"
    },
    text:{
      fontWeight:"bold",
      fontSize:24
    }
});