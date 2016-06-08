import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableNativeFeedback,
    Text,
    Image,
    View,
    DatePickerAndroid
} from 'react-native';
import moment from 'moment';
import { CONTAINER_WIDTH } from '../../styles/base';
import {
    COLOR_SILVER,
    COLOR_BLACK
} from '../../styles/colors';

export default class InputDatePicker extends Component {

    static propTypes = {
        noMarginBottom: React.PropTypes.bool,
        icon: React.PropTypes.number,
        placeholder: React.PropTypes.string,
        onDateSelected: React.PropTypes.func
    };

    static defaultProps = {
        placeholder: 'YYYY/MM/DD'
    };

    constructor(props) {
        super(props);
        this.text = this.props.placeholder;
        this.dateSelected = false;
    }

    showDatePicker = (stateKey) => {
        DatePickerAndroid.open({
            date: new Date()
        }).then(
            ({ day, month, year, action }) => {
                if (action !== DatePickerAndroid.dismissedAction) {
                    this.dateSelected = true;
                    const selectedDate = moment(new Date(year, month, day)).format('YYYY-MM-DD');
                    this.text = selectedDate.toString();
                    this.props.onDateSelected(selectedDate);
                }
            }
        );
    };

    render() {
        return (
            <TouchableNativeFeedback onPress={(e) => { this.showDatePicker(e); }}>
                <View style={[styles.container, !this.props.noMarginBottom && { marginBottom: 36 }]}>
                    <Image style={styles.icon}
                           source={this.props.icon}
                    />
                    <View style={styles.inputBorder}>
                        <Text style={[styles.inputText, this.dateSelected && styles.inputTextDateSelected]}>
                            {this.text}
                        </Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
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
    inputText: {
        width: CONTAINER_WIDTH - ICON_SIZE - MARGIN_RIGHT,
        fontSize: 16,
        color: COLOR_SILVER
    },
    inputTextDateSelected: {
        color: COLOR_BLACK
    },
    inputBorder: {
        height: 24,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_SILVER
    }
});
