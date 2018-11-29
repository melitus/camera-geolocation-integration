import React from 'react'
import { View, Text } from 'react-native';


const geoCoordinates = ({ latitude,longitude,address }) =>(

  <View>
<Text> `${latitude} ${longitude} ${address}` </Text>
  </View>
)

export default geoCoordinates;
