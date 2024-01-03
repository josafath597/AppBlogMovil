import {
  Dimensions, StyleSheet, View,
} from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextInput, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import useEntriesContext from '../../hooks/useEntriesContext';

const { width, height } = Dimensions.get('screen');

function AddNewEntry() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const { setEntries, setBaseEntries, entries } = useEntriesContext();
  const navigation = useNavigation();
  const onSubmit = (data) => {
    const maxId = entries.length > 0 ? Math.max(...entries.map((entry) => entry.id)) : 0;
    setEntries([{ ...data, id: maxId + 1 }, ...entries]);
    setBaseEntries([{ ...data, id: maxId + 1 }, ...entries]);
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: 'Este campo es requerido.',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Titulo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.title}
              mode="outlined"
            />
          )}
          name="title"
        />
        {errors.title && <Text>{errors.title.message}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: 'Este campo es requerido.',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Autor"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.author}
              mode="outlined"
            />
          )}
          name="author"
        />
        {errors.author && <Text>{errors.author.message}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: 'Este campo es requerido.',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Contenido"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.author}
              mode="outlined"
              style={styles.input}
              multiline
              numberOfLines={5}
            />
          )}
          name="content"
        />
        {errors.content && <Text>{errors.content.message}</Text>}
      </View>
      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        Agregar
      </Button>
    </View>
  );
}

export default AddNewEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.9,
    alignSelf: 'center',
    paddingTop: height * 0.01,
  },
  inputContainer: {
    marginBottom: height * 0.02,
  },
});
