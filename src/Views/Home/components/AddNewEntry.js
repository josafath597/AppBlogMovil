import { Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('screen');

function AddNewEntry() {
  const navigation = useNavigation();
  return (
    <Button
      icon="plus"
      mode="contained"
      onPress={() => navigation.navigate('AddNewEntry')}
      style={styles.buttonAdd}
    >
      Agregar Nueva Entrada
    </Button>
  );
}

export default AddNewEntry;

const styles = StyleSheet.create({
  buttonAdd: {
    marginVertical: height * 0.02,
  },
});
