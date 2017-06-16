import React, { Component } from 'react';

import { View , Card, Image, Title, Button, NavigationBar } from '@shoutem/ui';
import { Text, Slider } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles'

export default class PeopleCard extends Component {
  constructor (props) {
    super(props)
  }


  render() {
    return (
      <View>
        <NavigationBar
           styleName="inline"
           centerComponent={<Title>SERVINGS</Title>}
         />
        <Image
        styleName="large-square"
        source={{uri: 'https://images.unsplash.com/photo-1493274366568-b608e3895174?dpr=2&auto=format&fit=crop&w=1500&h=1060&q=80&cs=tinysrgb&crop=&bg='}}
        />
        <Slider
        value={ this.props.value }
        minimumValue={ 1 }
        maximumValue={ 6 }
        step={ 1 }
        onValueChange={(value) => this.props.handleChange(value)}
        minimumTrackTintColor={ '#70C1B3' }
        maximumTrackTintColor={ '#C2C2C2' }
        />
        <View styleName = "horizontal h-center v-center">
          <Icon size={30} name="person" color="#70C1B3" />
          <Text style={styles.people}>{this.props.value} people</Text>
        </View>
      </View>
    )
  }
}
