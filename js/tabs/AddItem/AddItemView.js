import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions
} from 'react-native';
import Input from '../../components/Forms/Input';
import InputDatePicker from '../../components/Forms/InputDatePicker';
import { CONTAINER_DISTANCE_TOP, CONTAINER_DISTANCE_SIDE } from '../../styles/base'
import { COLOR_WHITE, COLOR_GREEN_DEFAULT } from '../../styles/colors'
import ActionButton from 'react-native-action-button';

export default class AddItemView extends Component {

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: new Date(),
            amount: ''
        };
    }

    onInputChangeCallback = (e, state) => {
        this.setState({
            [state]: e.text
        });
    };

    onDateSelectedCallback = (date, state) => {
        this.setState({
            [state]: date
        });
    };

    handleSave = () => {
        console.log(this.state);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerPadding}>
                    <Input name="name"
                           placeholder="Name"
                           icon={require('./images/name.png')}
                           onInputChange={(e) => { this.onInputChangeCallback(e, 'name'); }}
                    />
                    <InputDatePicker name="date"
                                     icon={require('./images/calendar.png')}
                                     onDateSelected={(date) => { this.onDateSelectedCallback(date, 'date'); }}
                    />
                    <Input name="amount"
                           placeholder="Amount"
                           icon={require('./images/dollar.png')}
                           onInputChange={(e) => { this.onInputChangeCallback(e, 'amount'); }}
                           noMarginBottom
                    />
                </View>
                <ActionButton buttonColor={COLOR_WHITE}
                              onPress={this.handleSave}
                              icon={<Image source={require('./images/save-silver-icon.png')}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerPadding: {
        paddingTop: CONTAINER_DISTANCE_TOP,
        paddingLeft: CONTAINER_DISTANCE_SIDE,
        paddingRight: CONTAINER_DISTANCE_SIDE
    },
    chooseCategoryTitle: {
        marginTop: 38,
        marginBottom: 30,
        fontSize: 16,
        color: COLOR_GREEN_DEFAULT
    }
});
