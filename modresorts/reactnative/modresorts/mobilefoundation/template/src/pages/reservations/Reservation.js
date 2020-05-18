import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { WLResourceRequest } from 'react-native-ibm-mobilefirst';

import styles from './ReservationStyle';
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resortList: []
    };
    this.callMicroService();
  }
  callMicroService = () => {
    let resourceRequest = new WLResourceRequest(
      'http://resortsreservation.mybluemix.net/resortlistings',
      WLResourceRequest.GET
    );
    resourceRequest.send().then(
      response => {
        this.setState({ resortList: JSON.parse(response.responseText) });
        console.log(this.state.resortList);
      },
      response => {
        alert('Failure: ' + JSON.stringify(response));
      }
    );
  };

  renderResorts = () => {
    let arr = [];
    this.state.resortList.forEach(resort => {
      arr.push(
        <View style={styles.card}>
          <View style={{ alignItems: 'center', height: '85%' }}>
            <Text style={styles.titleText}>{resort.name}</Text>
            <Image source={{ uri: resort.image }} style={styles.img} />
          </View>
          <View
            style={{ flexDirection: 'row', textColor: 'blue', height: '15%' }}
          >
            <View
              style={{ flex: 1, justifyContent: 'center', paddingLeft: '4%' }}
            >
              <TouchableOpacity>
                <Text style={{ color: '#1487fa' }}>
                  <Icon name="thumbs-up" /> {resort.likes}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: '#1487fa' }}>{resort.cost}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    });
    console.log(arr);
    return arr;
  };
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <Text
              style={{
                color: '#ffffff',
                fontSize: 22,
                fontWeight: '600',
                alignSelf: 'center',
                padding: '4%',
                paddingBottom: '8%'
              }}
            >
              Resorts
            </Text>
            {this.renderResorts()}
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

export default Reservation;
