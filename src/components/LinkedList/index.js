import React, {useState, memo, useRef} from 'react';
import {Text, View, SectionList} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {create} from 'react-test-renderer';
// export default class LinkedList extends React.PureComponent {
//   render() {
//     return <View >
//         ;
//   }
// }

const LinkedList = memo(props => {
  //   const [tabData, setTabData] = useState();
  const navListRef = useRef();
  return (
    <View style={props.containStyle}>
      <View style={props.navStyle}>
        <FlatList
          ref={ref => {
            navListRef.current = ref;
          }}
          keyExtractor={item => item.id}
          data={props.navListData}
          //   renderItem={props.renderNavItem}
          {...props.navProps}
        />
      </View>

      <View style={props.sectionStyle}>
        <SectionList
          sections={props.sectionListData}
          {...props.sectionProps}
          //   renderItem={props.renderSectionItem}
        />
      </View>
    </View>
  );
});

export default LinkedList;
