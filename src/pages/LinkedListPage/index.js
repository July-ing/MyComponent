import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinkedList from '../../components/LinkedList';
import data from './mock';
export default class LinkedListPage extends React.PureComponent {
  state = {
    navListData: data.map(item => {
      return {
        name: item.name,
        id: item.id,
      };
    }),
    sectionListData: data,
  };
  renderNavItem = ({item}) => {
    return (
      <View style={styles.navItemStyle}>
        <Text>{item.name}</Text>
      </View>
    );
  };
  renderSectionItem = ({item}) => {
    return <Text style={styles.sectionItemStyle}>{item.name}</Text>;
  };
  renderSectionHeader = ({section}) => {
    return (
      <View style={styles.sectionHeaderStyle}>
        <Text>{section.name}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={{width: '100%', flex: 1}}>
        <LinkedList
          navListData={this.state.navListData}
          sectionListData={this.state.sectionListData}
          containStyle={styles.containStyle}
          navStyle={styles.navContainer}
          sectionStyle={styles.sectionContainer}
          navProps={{
            ItemSeparatorComponent: () => <View style={styles.separator} />,
            showsVerticalScrollIndicator: false,
            renderItem: this.renderNavItem,
          }}
          sectionProps={{
            ItemSeparatorComponent: () => <View style={styles.separator} />,
            renderItem: this.renderSectionItem,
            renderSectionHeader: this.renderSectionHeader,
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sectionHeaderStyle: {
    height: 50,
    backgroundColor: 'lightyellow',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  containStyle: {
    flexDirection: 'row',
    flex: 1,
  },
  navContainer: {
    width: 80,
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
  navItemStyle: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#f5f5f5',
  },
});
