import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';
import Navigator from './Navigator';
import { COLOR_GREEN_DEFAULT } from './styles/colors';

export default class ReactNativeReduxDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={COLOR_GREEN_DEFAULT}
                           barStyle="light-content"
                />
                <Navigator/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
