import {inject, observer} from 'mobx-react';
import React from 'react';
import {View, Text} from 'react-native';

class AppContainer extends React.Component {
  render() {
    const property = this.props.observableStore.property;

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>{property}</Text>
      </View>
    );
  }
}
export default inject('observableStore')(observer(AppContainer));
