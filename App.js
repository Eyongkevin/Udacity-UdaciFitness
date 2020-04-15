import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet, Platform } from 'react-native';
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import FlexboxExamples from './components/FlexboxExamples'
import History from './components/History'
import Nav from './components/Nav'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { white, purple } from './utils/colors'

const RouteConfigs = {
  History:{
    name: "History",
    component: History,
    options: {tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />, title: 'History'}
  }, 
  AddEntry:{
    component: AddEntry,
    name: "Add Entry",
    options: {tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />, title: 'Add Entry'}
  }
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : purple,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
  };

  const Tab = Platform.OS === 'ios'
          ? createBottomTabNavigator() 
          : createMaterialTopTabNavigator()


export default class App extends React.Component{
  render(){
    const store = createStore(reducer)
    return(
      <Provider store={store}>
        <View style={{flex:1}}>
        <View style={{height:20}} />
          <NavigationContainer >
              <Tab.Navigator {...TabNavigatorConfig}>
                  <Tab.Screen {...RouteConfigs['History']} />
                  <Tab.Screen {...RouteConfigs['AddEntry']} />
              </Tab.Navigator>
          </NavigationContainer>
        </View>
      </Provider>    
    )
  }
}

/* const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
}) */