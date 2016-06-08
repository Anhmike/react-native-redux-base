import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    Image
} from 'react-native';
import {
    COLOR_SILVER_LIGHT,
    COLOR_SILVER_DARK,
    COLOR_GREEN_DEFAULT
} from '../styles/colors';

export default class MenuItem extends Component {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        icon: React.PropTypes.number.isRequired,
        selectionIcon: React.PropTypes.number,
        onPress: React.PropTypes.func,
        divider: React.PropTypes.bool,
        selected: React.PropTypes.bool
    };

    static defaultProps = {
        divider: false
    };

    render() {
        const icon = this.props.selected ? this.props.selectionIcon : this.props.icon;
        return (
            <TouchableNativeFeedback onPress={this.props.onPress}>
                <View style={[styles.container, this.props.divider && styles.divider]}>
                    <Image
                        style={styles.icon}
                        source={icon}
                    />
                    <Text style={[styles.title, this.props.selected && styles.selected]}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        borderTopWidth: 1,
        borderTopColor: COLOR_SILVER_LIGHT
    },
    icon: {
        height: 26,
        marginLeft: 32
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: '100',
        fontSize: 16,
        marginLeft: 20,
        color: COLOR_SILVER_DARK
    },
    selected: {
        color: COLOR_GREEN_DEFAULT
    }
});
