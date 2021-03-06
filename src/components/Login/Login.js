import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, 
    TextInput, TouchableOpacity, ScrollView,
    KeyboardAvoidingView, Alert
} from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: undefined,// user has not logged in yet
            password: undefined,
        };
    }

    login = () => {
        Alert.alert(
            'Click Login!',
            'email: ' + this.state.email + ", pass: " + this.state.password,
        );
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo} 
                        source={require('../../images/ico-logo.png')}
                    />
                </View>

                <View style={styles.mainContainer}>
                    <Text style={styles.welcome}>WELCOME</Text>

                    <View style={styles.formLogin}>
                        <TextInput
                            style={[styles.email, styles.formInput]}
                            placeholder="Email"
                            onChangeText={(text) => this.setState({ email: text })}
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={[styles.password, styles.formInput]}
                            placeholder="Password"
                            onChangeText={(text) => this.setState({ password: text })}
                            secureTextEntry={true}
                        />

                        <Text style={styles.passForgotLink}>Forgot password?</Text>

                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={this.login}
                        >
                            <Text style={styles.loginText}> SIGN IN </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerLink}>Don't have an account?</Text>
                    <Text style={[styles.footerLink, {color: 'red'}]}>Create new account</Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F7',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120
    },
    logo: {
        width: 212,
        height: 58
    },
    mainContainer: {
        flex: 2
    },
    welcome: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: '#5B5A5A',
        letterSpacing: 5
    },
    formLogin: {
        padding: 40,
        paddingTop: 20
    },
    formInput: {
        textAlign: 'left',
        padding: 10,
        height: 50,
        color: '#5B5A5A',
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#CFD0D1'
    },
    email: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },
    password: {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    passForgotLink: {
        textAlign: 'right',
        marginTop: 10,
        color: '#5B5A5A',
        fontSize: 14,
    },
    loginButton: {
        alignItems: 'center',
        backgroundColor: '#129793',
        height: 50,
        borderRadius: 25,
        padding: 15,
        marginTop: 30
    },
    loginText: {
        color: 'white'
    },
    footer: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 20
    },
    footerLink: {
        textAlign: 'center'
    }
});