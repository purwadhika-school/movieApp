/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from './actions'
import SectionOne from './components/section_one'
import SectionTwo from './components/section_two'


class Setup extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SectionOne />
        <SectionTwo />
      </View>
    );
  }
}


export default Setup