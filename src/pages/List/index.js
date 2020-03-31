import React from 'react';
import {Text, ScrollView, TouchableOpacity} from 'react-native';
export default class List extends React.PureComponent {
  render() {
    return (
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('LinkedListPage', {key: 1});
          }}>
          <Text>随滚列表</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
