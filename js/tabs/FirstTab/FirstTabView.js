import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ViewPagerAndroid
} from 'react-native';
import { COLOR_SILVER_LIGHT } from '../../styles/colors';
import Toolbar from './Toolbar';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

export default class FirstTabView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPage: 0
        };
    }

    onPressCallback = (page) => {
        this.refs.viewPager.setPage(page);
    };

    onPageSelected = (e) => {
        this.setState({
            selectedPage: e.nativeEvent.position
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Toolbar selectedPage={this.state.selectedPage}
                         onPress={this.onPressCallback}
                />
                <ViewPagerAndroid initialPage={0}
                                  style={styles.viewPager}
                                  ref={"viewPager"}
                                  onPageSelected={this.onPageSelected}
                >
                    <PageOne/>
                    <PageTwo/>
                    <PageThree/>
                </ViewPagerAndroid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_SILVER_LIGHT
    },
    viewPager: {
        flex: 1,
        backgroundColor: 'red'
    }
});
