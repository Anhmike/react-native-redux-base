import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';
import TabsView from './tabs/TabsView';

export default class MyNavigator extends Component {
    renderScene = (route, navigator) => {
        if (route.login) {
            /*
             return (
             <Login
             navigator={navigator}
             onLogin={route.callback}
             />
             );
             */
        }

        return (
            <TabsView navigator={navigator}
                      initialTab={{ name: 'first-tab', title: 'First tab' }}
            />
        );
    };

    render() {
        return (
            <Navigator initialRoute={{}}
                       renderScene={this.renderScene}
            />
        );
    }
}
