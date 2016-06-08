import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Image,
    View
} from 'react-native';
import { CONTAINER_WIDTH } from '../../styles/base';
import { COLOR_SILVER } from '../../styles/colors';

export default class Input extends Component {

    static propTypes = {
        noMarginBottom: React.PropTypes.bool,
        icon: React.PropTypes.number,
        placeholder: React.PropTypes.string,
        onInputChange: React.PropTypes.func
    };

    render() {
        return (
            <View style={[styles.container, !this.props.noMarginBottom && { marginBottom: 36 }]}>
                <Image style={styles.icon}
                       source={this.props.icon}
                />
                <TextInput style={styles.input}
                           placeholder={this.props.placeholder}
                           placeholderTextColor={COLOR_SILVER}
                           underlineColorAndroid={COLOR_SILVER}
                           onChangeText={(text) => { this.props.onInputChange(text); }}
                />
            </View>
        );
    }
}

const ICON_SIZE = 24;
const MARGIN_RIGHT = 35;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        marginRight: MARGIN_RIGHT
    },
    input: {
        width: CONTAINER_WIDTH - ICON_SIZE - MARGIN_RIGHT,
        height: 40,
        fontSize: 16
    }
});
