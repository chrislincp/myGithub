import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { Provider } from 'react-redux'
import RootNavigation from './router/RootNavigation';
import store from './store';
export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    )
  }
}