import { StyleSheet, View, Dimensions } from 'react-native';
import { AddNewEntry, BodyHome, HeaderHome } from './components';

const { width } = Dimensions.get('screen');

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderHome />
      <BodyHome />
      <AddNewEntry />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.9,
    alignSelf: 'center',
  },
});
