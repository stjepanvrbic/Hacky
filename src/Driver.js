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
import StatusBar from './StatusBar'
import ActionButton from './ActionButton'
import ListItem from './ListItem'
const styles = require('./styles.js');

const firebaseDbh = require ( './firebaseconfig');


type Props = {};
export default class Driver extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          })
        };
        this.itemsRef = firebase.database().ref();
      }

      componentDidMount() {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza', key: 'something' }])
        });
        this.listenForItems(this.itemsRef);
      }
      _renderItem(item) {
        return (
          <ListItem item={item} />
        );
      }
      listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {
    
          // get children as an array
          var items = [];
          var name = snap.child("ToColby");
          alert(name.val());
    
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
          });
    
        });
      }
      _addItem() {
        AlertIOS.prompt(
          'Add New Item',
          null,
          [
            {
              text: 'Add',
              onPress: (text) => {
                this.itemsRef.push({ title: text })
              }
            },
          ],
          'plain-text'
        );
      }
    

  render() {
    return (
        <View style={styles.container}>

        <StatusBar title="Grocery List"/>

        <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} style={styles.listview}/>

        <ActionButton title="Add"/>

         </View>
    );
  }
}


