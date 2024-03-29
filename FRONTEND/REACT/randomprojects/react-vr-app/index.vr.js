import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class react_vr_app extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('seamless.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            filter: [{blur: 1.5}],
            fontSize: 0.8,
            fontWeight: '200',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -7]}],
          }}>
          working %
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr_app', () => react_vr_app);
