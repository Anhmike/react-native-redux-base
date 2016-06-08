import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';
import { COLOR_SILVER_LIGHT } from '../../styles/colors';
import {
    SCREEN_HEIGHT,
    CONTAINER_DISTANCE_SIDE,
    CONTAINER_DISTANCE_TOP,
    DISTANCE_TOP_SMALL
} from '../../styles/base';

export default class PageThree extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.scrollableContainer}>
                        <Text style={styles.title}>Third page</Text>
                        <Text style={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLOR_SILVER_LIGHT
    },
    scrollView: {
        height: SCREEN_HEIGHT - 134
    },
    scrollableContainer: {
        flexDirection: 'column',
        marginTop: CONTAINER_DISTANCE_TOP,
        marginLeft: CONTAINER_DISTANCE_SIDE,
        marginRight: CONTAINER_DISTANCE_SIDE
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: '300',
        fontSize: 22
    },
    paragraph: {
        fontFamily: 'Roboto',
        fontSize: 16,
        marginTop: DISTANCE_TOP_SMALL
    }
});
