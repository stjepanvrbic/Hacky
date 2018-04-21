/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import ReactNative from 'react-native';
import * as firebase from 'firebase';
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');
const ListItem = require('./ListItem');
const styles = require('./styles.js');

const firebaseDbh = require ( './firebaseconfig');


const WORow = ({name, reps, repDesc, test}) => (
    <View style={{flexDirection: 'row', margin: 8, backgroundColor: 'white'}}>
    <Text style={{
        flex: 7, margin:8, fontSize: 20, fontWeight: '500',
        textAlignVertical: 'center'
    }} numberOfLines={4}>
    {name}
</Text>
    <View>
    <Text style={{textAlign: 'right', fontSize: 26, margin: 8, fontWeight: 'bold'}}>{reps}</Text>
    <Text style={{fontSize: 16, margin: 8, color: 'orange'}}>{repDesc}</Text>
    </View>
    </View>
);






type Props = {};
export default class StartScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          })
        };
      }

      componentDidMount() {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
        })
      }



    navigate = (targetRoute)=> {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: targetRoute }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      }

    NavigateDriver = ()=>{
        this.navigate('Driver');
      }

      NavigateRider = ()=>{
        this.navigate('Rider');
      }

      

  render() {
    return (
        <View style={styles.container}>
      <View style={styles.container}>
      <TouchableOpacity onPress= {this.NavigateDriver}>
      <Text>Go To driver Screen</Text>
          </TouchableOpacity >
          </View>
          <View style={styles.container}>
          <TouchableOpacity onPress= {this.NavigateRider}>
      <Text>Go To rider Screen</Text>
          </TouchableOpacity >
          </View>
      </View>
    );
  }
}


