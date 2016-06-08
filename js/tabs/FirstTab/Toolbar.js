import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableNativeFeedback,
    Image,
    View,
    Dimensions
} from 'react-native';
import { COLOR_WHITE, COLOR_GREEN_DEFAULT } from '../../styles/colors';

export default class Toolbar extends Component {

    static propTypes = {
        onPress: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedPage: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedPage: nextProps.selectedPage
        });
    }

    onPress = (page) => {
        this.props.onPress(page);
        this.setState({
            selectedPage: page
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={() => { this.onPress(0); }}>
                    <View style={[styles.button, this.state.selectedPage === 0 && styles.buttonSelected]}>
                        <Image style={styles.icon}
                               source={require('./images/toolbar/first-page-icon.png')}
                        />
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => { this.onPress(1); }}>
                    <View style={[styles.button, this.state.selectedPage === 1 && styles.buttonSelected]}>
                        <Image style={styles.icon}
                               source={require('./images/toolbar/second-page-icon.png')}
                        />
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => { this.onPress(2); }}>
                    <View style={[styles.button, this.state.selectedPage === 2 && styles.buttonSelected]}>
                        <Image style={styles.icon}
                               source={require('./images/toolbar/third-page-icon.png')}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 54,
        flexDirection: 'row',
        backgroundColor: COLOR_GREEN_DEFAULT
    },
    button: {
        width: Dimensions.get('window').width / 3,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSelected: {
        borderBottomWidth: 4,
        borderBottomColor: COLOR_WHITE
    },
    icon: {
        height: 26
    }
});
