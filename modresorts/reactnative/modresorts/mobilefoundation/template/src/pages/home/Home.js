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
  componentDidMount() {
    this.props.navigation.addListener('blur', this.resetState);
  }
  componentWillUnmount() {
    this.props.navigation.removeListener('blur');
  }
  resetState = () => {
    this.setState({
      username: '',
      password: '',
      user: ''
    });
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
  onLoginsuccess = val => {
    this.props.navigation.navigate('Landing');
    this.setState({
      user: val.user.displayName
    });
  };
  login() {
    const creds = {
      username: this.state.username,
      password: this.state.password
    };
    // enter your security check name
    const securityCheckName = 'UserLogin';
    WLAuthorizationManager.login(securityCheckName, creds).then(
      response => {
        this.props.navigation.navigate('Landing');
        console.log('login success');
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
