import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Image, Button, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MenuItem} from "./components/MenuItem";
import more from './svg_icons/more'
import apps from './svg_icons/apps'
import contact from './svg_icons/contact'
import actions from "./svg_icons/actions";

function MenuScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home!</Text>
        </View>
    );
}

function DashboardScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings elooo!</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Profile</Text>
        </View>
    );
}

function ActionsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Actions</Text>
        </View>
    );
}

function PostScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Post</Text>
            <Pressable style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 4,
                elevation: 3,
                backgroundColor: 'black',
            }}
                       title='press Me'
                       onPress={() => alert('cos cos')}>
                <Text>Hello</Text>
            </Pressable>
        </View>
    );
}

//TapBarBottom
/*
const CustomCenterButton = ({children, onPress}) => {

    return (
        <TouchableOpacity onPress={onPress} style={{
            justifyContent: 'center',
            alignItems: 'center',
            top: -10,
        }}>
            <View style={{
                width: 65,
                height: 65,
                borderRadius: 50,
                backgroundColor: 'green',

            }}>

                {children}
            </View>
        </TouchableOpacity>
    )
}*/

//TapBarTop

const CustomCenterButton = ({focused}) => {
    return (
        <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
        }}>
            <View style={{
                width: 65,
                height: 65,
                borderRadius: 50,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    source={require('./svg_icons/plus-sign-comments-plus-icon-svg-1166617.png')}
                    style={{
                        width: 40,
                        height: 40,
                        tintColor: focused ? 'purple' : 'white'
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}

const Tab = createMaterialTopTabNavigator();
const Tab2 = createBottomTabNavigator();

function App() {
    console.log('app start')

    return (

        <NavigationContainer>
            <Tab.Navigator
                tabBarPosition='bottom'
            >
                <Tab.Screen
                    name="Menu"
                    component={MenuScreen}

                    options={{
                        swipeEnabled: true,
                        tabBarLabel: 'Menu',
                        tabBarIcon: ({focused}) => (
                            <MenuItem
                                iconXml={more}
                                width={22}
                                color={focused ? 'purple' : 'green'}
                                textID={'Bottom_Menu'}
                                name='Menu'
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Apps"
                    component={DashboardScreen}
                    options={{
                        tabBarLabel: 'Apps',
                        tabBarIcon: ({focused}) => (
                            <MenuItem
                                iconXml={apps}
                                width={22}
                                color={focused ? 'purple' : 'green'}
                                textID={'Bottom_Apps'}
                                name='Apps'
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Post"
                    component={PostScreen}

                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({focused}) => (
                            <CustomCenterButton focused={focused}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Actions"
                    component={ActionsScreen}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <MenuItem
                                iconXml={actions}
                                width={22}
                                color={focused ? 'purple' : 'green'}
                                textID={'Bottom_Contacts'}
                                name='Contact'
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <MenuItem
                                iconXml={contact}
                                width={22}
                                color={focused ? 'purple' : 'green'}
                                textID={'Bottom_Contacts'}
                                name='Contact' npx react-native run-android

                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    )
}


export default App;
