import React, { Component } from 'react';
import {
    Image
} from 'react-native';
import {
    COLOR_WHITE_OPACITY_90,
    COLOR_SILVER_DARK,
    COLOR_GREEN_DEFAULT
} from '../styles/colors';
import ActionButton from 'react-native-action-button';

export default class ActionButtonMenu extends Component {

    static propTypes = {
        onTabSelect: React.PropTypes.func
    };

    render() {
        return (
            <ActionButton buttonColor={COLOR_GREEN_DEFAULT}
                          bgColor={COLOR_WHITE_OPACITY_90}
            >
                <ActionButton.Item buttonColor={COLOR_SILVER_DARK}
                                   title="Add Item"
                                   onPress={() => { this.props.onTabSelect({ name: 'add-item', title: 'Add Item' }); }}
                >
                    <Image source={require('./images/add-item-icon.png')}/>
                </ActionButton.Item>
            </ActionButton>
        );
    }
                }
