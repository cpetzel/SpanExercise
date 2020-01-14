// jsontree of redux
import React from 'react';
import {ScrollView, View} from 'react-native';
import JSONTree from 'react-native-json-tree';
import {connect} from 'react-redux';

class ReduxViewerScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 50,
          paddingTop: 50,
          backgroundColor: 'white',
        }}>
        <ScrollView style={{flexBasis: 'auto'}}>
          <ScrollView horizontal>
            <JSONTree data={this.props.state} />
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {state};
}

export default connect(mapStateToProps, {})(ReduxViewerScreen);
