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
    const securityCheckName = '';
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
        <StatusBar backgroundColor="#ab334f" />
        <View style={styles.skewContainer} />
        <View style={styles.skewContainerTwo} />
        <View style={styles.textContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/images/no-image.png')}
              style={styles.logoImage}
            />
          </View>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.textHeading}>Hello Again</Text>
            <Text style={styles.textSubHeading}>Welcome Back</Text>
          </View>
          <View style={styles.loginFormContainer}>
            <CustomToast
              ref="defaultToastBottom"
              position="bottom"
              backgroundColor="#999999"
            />
            <TextInput
              style={styles.loginInput}
              placeholder="username"
              onChangeText={val => this.onUserNameChange(val)}
            />
            <TextInput
              style={styles.loginInput}
              placeholder="password"
              secureTextEntry={true}
              onChangeText={val => this.onPasswordChange(val)}
            />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => this.login()}
            >
              <Text style={styles.loginButtonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotTextContainer}>
              <Text style={styles.forgotPwdText}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
