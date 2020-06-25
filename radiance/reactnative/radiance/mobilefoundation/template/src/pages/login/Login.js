import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { WLClient, WLAuthorizationManager } from 'react-native-ibm-mobilefirst';
import UserLoginCH from '../../../assets/scripts/login';
import CustomToast from '../../../assets/scripts/CustomToast';
import styles from './LoginStyle';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      user: ''
    };
    const userLoginCH = new UserLoginCH(this.onLoginsuccess, this.onFailure);
    WLClient.registerChallengeHandler(userLoginCH, '');
  }
  onLoginsuccess = val => {
    this.props.navigation.navigateTo('Home');
    this.refs.defaultToastBottom.ShowToastFunction(
      `Hello, ${val.user.displayName}`
    );
    this.setState({
      user: val.user.displayName
    });
  };
  onFailure = err => {
    this.refs.defaultToastBottom.ShowToastFunction(err);
  };
  onUserNameChange = uname => {
    this.setState({
      username: uname
    });
  };
  onPasswordChange = pwd => {
    this.setState({
      password: pwd
    });
  };
  login() {
    var creds = {
      username: this.state.username,
      password: this.state.password
    };
    const securityCheckName = 'UserLogin';
    WLAuthorizationManager.login(securityCheckName, creds).then(
      response => {
        console.log('login success');
      },
      error => {
        this.refs.defaultToastBottom.ShowToastFunction(
          `${JSON.parse(error.message).errorMsg}`
        );
        console.log('error in login  page' + JSON.stringify(error));
      }
    );
  }
  render() {
    return (
      <View style={styles.parent}>
        <StatusBar backgroundColor="#303740" />
        <View style={styles.waveContainerOne} />
        <View style={styles.waveContainerTwo} />
        <View style={styles.waveContainerThree} />
        <View style={styles.waveContainerFour} />
        <View style={styles.waveContainerFive} />

        <View style={styles.textContainer}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.textHeading}>Login</Text>
          </View>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/images/no-image.png')}
              style={styles.logoImage}
            />
          </View>
          <View style={styles.loginFormContainer}>
            <CustomToast
              ref="defaultToastBottom"
              position="bottom"
              backgroundColor="#999999"
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.loginInput}
                placeholder="Username"
                placeholderTextColor="#ffffff"
                onChangeText={val => this.onUserNameChange(val)}
              />
              <TextInput
                style={styles.loginInput}
                placeholder="Password"
                placeholderTextColor="#ffffff"
                secureTextEntry={true}
                onChangeText={val => this.onPasswordChange(val)}
              />
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => this.login()}
            >
              <Text style={styles.loginButtonText}>login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forgotTextContainer}
              onPress={() => this.login()}
            >
              <Text style={styles.forgotPwdText}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
