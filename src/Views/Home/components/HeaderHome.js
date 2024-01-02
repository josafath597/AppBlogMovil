import {
  Dimensions, StyleSheet, View,
} from 'react-native';
import React, { useState } from 'react';
import { Chip, TextInput, useTheme } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

function HeaderHome() {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    console.log(searchQuery);
  };
  const [selectedFilter, setSelectedFilter] = useState('titulo');
  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
  };
  return (
    <View>
      <View style={styles.chipContainer}>
        <Chip
          selected={selectedFilter === 'titulo'}
          onPress={() => handleFilterPress('titulo')}
          style={[styles.chip, { backgroundColor: selectedFilter === 'titulo' ? colors.primary : '#000000' }]}
          textStyle={{ color: 'white' }}
          selectedColor="white"
        >
          Titulo
        </Chip>
        <Chip
          selected={selectedFilter === 'contenido'}
          onPress={() => handleFilterPress('contenido')}
          style={[styles.chip, { backgroundColor: selectedFilter === 'contenido' ? colors.primary : '#000000' }]}
          textStyle={{ color: 'white' }}
          selectedColor="white"
        >
          Contenido
        </Chip>
        <Chip
          selected={selectedFilter === 'autor'}
          onPress={() => handleFilterPress('autor')}
          style={[styles.chip, { backgroundColor: selectedFilter === 'autor' ? colors.primary : '#000000' }]}
          textStyle={{ color: 'white' }}
          selectedColor="white"
        >
          Autor
        </Chip>
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
  container: {
    flex: 1,
  },
  headerContainer: {
    width: width * 0.9,
    alignSelf: 'center',
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
});
