/* eslint-disable react/forbid-prop-types */
import {
  Dimensions, StyleSheet, View,
} from 'react-native';
import React, { useState } from 'react';
import {
  Chip, TextInput, useTheme, Button,
} from 'react-native-paper';
import useEntriesContext from '../../../hooks/useEntriesContext';

const { width, height } = Dimensions.get('screen');

function HeaderHome() {
  const {
    setEntries, baseEntries,
  } = useEntriesContext();
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('title');
  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
  };
  const handleSearch = () => {
    if (!searchQuery) {
      setEntries(baseEntries);
      return;
    }
    const newEntries = baseEntries.filter(
      (entry) => entry[selectedFilter].toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setEntries(newEntries);
  };
  return (
    <View>
      <View style={styles.chipContainer}>
        <Chip
          selected={selectedFilter === 'title'}
          onPress={() => handleFilterPress('title')}
          style={[styles.chip, { backgroundColor: selectedFilter === 'title' ? colors.primary : '#000000' }]}
          textStyle={{ color: 'white' }}
          selectedColor="white"
        >
          Titulo
        </Chip>
        <Chip
          selected={selectedFilter === 'content'}
          onPress={() => handleFilterPress('content')}
          style={[styles.chip, { backgroundColor: selectedFilter === 'content' ? colors.primary : '#000000' }]}
          textStyle={{ color: 'white' }}
          selectedColor="white"
        >
          Contenido
        </Chip>
        <Chip
          selected={selectedFilter === 'author'}
          onPress={() => handleFilterPress('author')}
          style={[styles.chip, { backgroundColor: selectedFilter === 'author' ? colors.primary : '#000000' }]}
          textStyle={{ color: 'white' }}
          selectedColor="white"
        >
          Autor
        </Chip>
      </View>
      <View style={styles.containerButtonReset}>
        <Button
          mode="contained"
          onPress={() => setEntries(baseEntries)}
        >
          Restablecer
        </Button>
      </View>
      <View style={styles.headerContainer}>
        <TextInput
          label="Buscar una Entrada"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
          style={styles.textInput}
          mode="outlined"
          right={<TextInput.Icon icon="magnify" onPress={handleSearch} />}
        />
      </View>
    </View>
  );
}

export default HeaderHome;

const styles = StyleSheet.create({
  buttonAdd: {
    marginTop: height * 0.01,
    minWidth: width * 0.3,
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    gap: width * 0.009,
  },
  textInput: {
    flex: 1,
  },
  picker: {
    width: '100%',
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  chip: {
    // Puedes añadir estilos adicionales para los chips si es necesario
  },
  containerButtonReset: {
    marginBottom: height * 0.01,
  },
});
