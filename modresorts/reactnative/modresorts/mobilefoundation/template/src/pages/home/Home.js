import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { WLClient, WLAuthorizationManager } from 'react-native-ibm-mobilefirst';
import UserLoginCH from '../../../assets/scripts/login';

import styles from './HomeStyle';
class Home extends React.Component {
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
  onLoginsuccess = val => {
    // uncomment this code and setup navigation
    this.props.navigation.navigateTo('Landing');
    this.setState({
      user: val.user.displayName
    });
  };
  login() {
    // this.props.navigation.navigate('Landing');
    const creds = {
      username: this.state.username,
      password: this.state.password
    };
    // enter your security check name
    const securityCheckName = 'UserLogin';
    WLAuthorizationManager.login(securityCheckName, creds).then(
      response => {
        console.log('login success');
        this.props.navigation.navigate('Landing');
      },
      error => {
        console.log(`error in login  page${JSON.stringify(error)}`);
      }
    );
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <View style={styles.image}>
              <Image
                source={require('../../../assets/images/logo2.png')}
                style={styles.img}
              />
            </View>
            <View style={styles.login}>
              <TextInput
                style={styles.input}
                placeholder="User Name"
                placeholderTextColor="#ffffff"
                onChangeText={val => this.onUserNameChange(val)}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#ffffff"
                secureTextEntry={true}
                onChangeText={val => this.onPasswordChange(val)}
              />
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  this.login();
                }}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <ImageBackground
            style={[styles.component, styles.fixed, { zIndex: -1 }]}
            source={require('../../../assets/images/resorts.jpeg')}
          />
        </SafeAreaView>
      </>
    );
  }
}

export default Home;
