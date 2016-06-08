import React, { Component } from 'react';
import {
    DrawerLayoutAndroid,
    ToolbarAndroid,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import {
    COLOR_WHITE,
    COLOR_WHITE_DARK,
    COLOR_GREEN_DEFAULT
} from '../styles/colors';
import FirstTabView from './FirstTab/FirstTabView';
import SecondTabView from './SecondTab/SecondTabView';
import MenuItem from './MenuItem';
import ActionButtonMenu from './ActionButtonMenu';
import AddItemView from './AddItem/AddItemView';
import { SCREEN_WIDTH } from '../styles/base';

export default class TabsView extends Component {

    static propTypes = {
        initialTab: React.PropTypes.object,
        navigator: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.width = SCREEN_WIDTH;
        this.showActionButtonMenu = true;
        this.state = {
            tab: this.props.initialTab
        };
    }

    onTabSelect = (selectedTab) => {
        this.refs.drawer.closeDrawer();
        if (this.state.tab.name !== selectedTab.name) {
            this.setState({
                tab: selectedTab
            });
        }
    };

    renderNavigationView = () => {
        return (
            <View style={styles.drawer}>
                <Image style={styles.drawerHeaderBackground}
                       source={require('./images/drawer-header-bg.png')}
                >
                    <View style={styles.drawerHeader}>
                        <Image style={styles.userImage}
                               source={require('../images/test-men.jpg')}
                        />
                        <Text style={styles.userFullName}>
                            John Doe
                        </Text>
                        <Text style={styles.userEmail}>
                            username@domain.com
                        </Text>
                    </View>
                </Image>
                <MenuItem title="First tab"
                          icon={require('./FirstTab/images/first-tab-icon.png')}
                          selectionIcon={require('./FirstTab/images/first-tab-selected-icon.png')}
                          onPress={() => { this.onTabSelect({ name: 'first-tab', title: 'First tab' }); }}
                          selected={this.state.tab.name === 'first-tab'}
                />
                <MenuItem title="Second tab"
                          icon={require('./SecondTab/images/second-tab-icon.png')}
                          selectionIcon={require('./SecondTab/images/second-tab-selected-icon.png')}
                          onPress={() => { this.onTabSelect({ name: 'second-tab', title: 'Second tab' }); }}
                          selected={this.state.tab.name === 'second-tab'}
                />
            </View>
        );
    };

    renderContent = () => {
        switch (this.state.tab.name) {
            case 'first-tab':
                this.showActionButtonMenu = true;
                return (
                    <FirstTabView navigator={this.props.navigator}/>
                );

            case 'second-tab':
                this.showActionButtonMenu = true;
                return (
                    <SecondTabView navigator={this.props.navigator}/>
                );

            case 'add-item':
                this.showActionButtonMenu = false;
                return (
                    <AddItemView navigator={this.props.navigator}/>
                );

            default:
                this.showActionButtonMenu = true;
                return (
                    <FirstTabView navigator={this.props.navigator}/>
                );
        }
    };

    render() {
        return (
            <DrawerLayoutAndroid ref={"drawer"}
                                 drawerWidth={this.width - 56 <= 320 ? this.width - 56 : 320}
                                 drawerPosition={DrawerLayoutAndroid.positions.Left}
                                 renderNavigationView={this.renderNavigationView}
            >
                <View style={styles.container}>
                    <ToolbarAndroid title={this.state.tab.title}
                                    titleColor={COLOR_WHITE_DARK}
                                    navIcon={require('./images/drawer-icon.png')}
                                    onIconClicked={() => { this.refs.drawer.openDrawer(); }}
                                    style={styles.toolbar}
                    />
                    {this.renderContent()}
                    {this.showActionButtonMenu ?
                        <ActionButtonMenu onTabSelect={this.onTabSelect}/>
                        :
                        null
                    }
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_WHITE_DARK
    },
    drawer: {
        flex: 1
    },
    drawerHeaderBackground: {
        height: 200
    },
    drawerHeader: {
        height: 200,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 40,
        paddingLeft: 16
    },
    userImage: {
        height: 56,
        width: 56,
        borderRadius: 56 / 2
    },
    userFullName: {
        fontFamily: 'Roboto',
        fontWeight: '300',
        fontSize: 22,
        color: COLOR_WHITE,
        marginTop: 10
    },
    userEmail: {
        fontFamily: 'Roboto',
        fontWeight: '100',
        fontSize: 16,
        color: COLOR_WHITE,
        marginTop: 3
    },
    toolbar: {
        height: 56,
        backgroundColor: COLOR_GREEN_DEFAULT
    }
});
