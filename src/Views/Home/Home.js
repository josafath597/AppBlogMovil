import { useState } from 'react';
import {
  StyleSheet, View, Dimensions,
} from 'react-native';
import { HeaderHome } from './components';

const { width, height } = Dimensions.get('screen');

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderHome />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
